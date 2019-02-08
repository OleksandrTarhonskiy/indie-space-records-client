import React                 from 'react';
import PropTypes             from 'prop-types';
import { withRouter }        from 'react-router';
import { graphql }           from 'react-apollo';
import { compose }           from 'recompose';
import CircularProgress      from '@material-ui/core/CircularProgress';
import styled                from 'styled-components';
import { Helmet }            from 'react-helmet';

import { fetchProfileQuery } from '../graphql/queries';
import Sections              from '../components/sections';

const ProfilePage = ({
  data: {
    loading,
    fetchProfile = {}
  },
}) => (
  <React.Fragment>
    {
      loading ?
        <CircularProgress />
        :
        <ProfilePage.Body
          elementStyles={JSON.parse(fetchProfile.theme.style)}
        >
          <Helmet>
            <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(fetchProfile.theme.fonts).headlineFont}`} rel="stylesheet" />
            <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(fetchProfile.theme.fonts).regularTextFont}`} rel="stylesheet" />
            <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(fetchProfile.theme.fonts).linksFont}`} rel="stylesheet" />
            <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(fetchProfile.theme.fonts).subHead}`} rel="stylesheet" />
          </Helmet>
          <ProfilePage.Header elementStyles={JSON.parse(fetchProfile.theme.style)}>
            <ProfilePage.NavItems>
              {
                fetchProfile.theme.sections.map(section =>
                  <ProfilePage.NavItem key={section.id}>
                    <ProfilePage.Link
                      href=""
                      elementStyles={JSON.parse(fetchProfile.theme.style)}
                      elementFont={JSON.parse(fetchProfile.theme.fonts)}
                    >
                      {section.name}
                    </ProfilePage.Link>
                  </ProfilePage.NavItem>
                )
              }
            </ProfilePage.NavItems>
          </ProfilePage.Header>
          <Sections
            profileThemeSections={fetchProfile.theme.sections}
            profileThemeStyles={JSON.parse(fetchProfile.theme.style)}
            profileThemeFonts={JSON.parse(fetchProfile.theme.fonts)}
            profileId={fetchProfile.id}
            events={fetchProfile.events}
            products={fetchProfile.products}
            currency={fetchProfile.currency}
          />
        </ProfilePage.Body>
    }
  </React.Fragment>
);

ProfilePage.Body = styled.div`
  background-color : ${props => props.elementStyles.backgroundColor};
  position         : relative;
`;

ProfilePage.Header = styled.div`
  background-color : ${props => props.elementStyles.headerBackground};
  text-align       : ${props => props.elementStyles.MenuLinksPosition};
`;

ProfilePage.NavItems = styled.ul`
  margin  : 0;
  padding : 0;
`;

ProfilePage.Link = styled.a`
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

ProfilePage.NavItem = styled.li`
  display : inline-block;
  padding : 2%;
`;

ProfilePage.propTypes = {
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

export default withRecompose(ProfilePage);
