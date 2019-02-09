import React                 from 'react';
import PropTypes             from 'prop-types';
import { withRouter }        from 'react-router';
import { graphql }           from 'react-apollo';
import { compose }           from 'recompose';
import CircularProgress      from '@material-ui/core/CircularProgress';
import styled                from 'styled-components';
import { Helmet }            from 'react-helmet';

import { fetchProfileQuery } from '../graphql/queries';

const WithHeaderWrapper = ({
  data: {
    loading,
    fetchProfile = {}
  },
  children,
}) => (
  <React.Fragment>
    {
      loading ?
        <CircularProgress />
        :
        <WithHeaderWrapper.Body
          elementStyles={JSON.parse(fetchProfile.theme.style)}
        >
          <Helmet>
            <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(fetchProfile.theme.fonts).headlineFont}`} rel="stylesheet" />
            <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(fetchProfile.theme.fonts).regularTextFont}`} rel="stylesheet" />
            <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(fetchProfile.theme.fonts).linksFont}`} rel="stylesheet" />
            <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(fetchProfile.theme.fonts).subHead}`} rel="stylesheet" />
          </Helmet>
          <WithHeaderWrapper.Header elementStyles={JSON.parse(fetchProfile.theme.style)}>
            <WithHeaderWrapper.NavItems>
              {
                fetchProfile.theme.sections.map(section =>
                  <WithHeaderWrapper.NavItem key={section.id}>
                    <WithHeaderWrapper.Link
                      href=""
                      elementStyles={JSON.parse(fetchProfile.theme.style)}
                      elementFont={JSON.parse(fetchProfile.theme.fonts)}
                    >
                      {section.name}
                    </WithHeaderWrapper.Link>
                  </WithHeaderWrapper.NavItem>
                )
              }
            </WithHeaderWrapper.NavItems>
          </WithHeaderWrapper.Header>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              profileThemeSections : fetchProfile.theme.sections,
              profileThemeStyles   : JSON.parse(fetchProfile.theme.style),
              profileThemeFonts    : JSON.parse(fetchProfile.theme.fonts),
              profileId            : fetchProfile.id,
              events               : fetchProfile.events,
              products             : fetchProfile.products,
              currency             : fetchProfile.currency,
            })
          )}
      </WithHeaderWrapper.Body>
    }
  </React.Fragment>
);

WithHeaderWrapper.Body = styled.div`
  background-color : ${props => props.elementStyles.backgroundColor};
  position         : relative;
`;

WithHeaderWrapper.Header = styled.div`
  background-color : ${props => props.elementStyles.headerBackground};
  text-align       : ${props => props.elementStyles.MenuLinksPosition};
`;

WithHeaderWrapper.NavItems = styled.ul`
  margin  : 0;
  padding : 0;
`;

WithHeaderWrapper.Link = styled.a`
  && {
    color           : ${props => props.elementStyles.LinksColor};
    text-decoration : none;
    font-family     : ${props => `${props.elementFont.linksFont}`}, sans-serif;
    font-weight     : 600;
    outline         : none;

    &:hover {
      color : ${props => props.elementStyles.LinksHover};
    }
  }
`;

WithHeaderWrapper.NavItem = styled.li`
  display : inline-block;
  padding : 2%;
`;

WithHeaderWrapper.propTypes = {
  match : PropTypes.object.isRequired,
  data  : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  graphql(fetchProfileQuery, {
    options: (props) => ({
      variables: {
        profileId: props.myId || props.match.params.id
      }
    })
  }),
);

export default withRecompose(WithHeaderWrapper);
