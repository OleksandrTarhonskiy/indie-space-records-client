import React                 from 'react';
import PropTypes             from 'prop-types';
import styled                from 'styled-components';
import { Helmet }            from 'react-helmet';

import withTheme             from '../HOCs/with_theme';

const WithHeaderWrapper = ({
  theme,
}) => (
  <React.Fragment>
    <WithHeaderWrapper.Body
      elementStyles={JSON.parse(theme.style)}
    >
      <Helmet>
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).headlineFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).regularTextFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).linksFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).subHead}`} rel="stylesheet" />
      </Helmet>
      <WithHeaderWrapper.Header elementStyles={JSON.parse(theme.style)}>
        <WithHeaderWrapper.NavItems>
          {
            theme.sections.map(section =>
              <WithHeaderWrapper.NavItem key={section.id}>
                <WithHeaderWrapper.Link
                  href=""
                  elementStyles={JSON.parse(theme.style)}
                  elementFont={JSON.parse(theme.fonts)}
                >
                  {section.name}
                </WithHeaderWrapper.Link>
              </WithHeaderWrapper.NavItem>
            )
          }
        </WithHeaderWrapper.NavItems>
      </WithHeaderWrapper.Header>
    </WithHeaderWrapper.Body>
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

export default withTheme(WithHeaderWrapper);
