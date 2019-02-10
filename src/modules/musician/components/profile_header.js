import React                 from 'react';
import PropTypes             from 'prop-types';
import styled                from 'styled-components';
import { Helmet }            from 'react-helmet';

import withTheme             from '../HOCs/with_theme';

const ProfileHeader = ({
  theme,
}) => (
  <React.Fragment>
    <ProfileHeader.Body
      elementStyles={JSON.parse(theme.style)}
    >
      <Helmet>
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).headlineFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).regularTextFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).linksFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).subHead}`} rel="stylesheet" />
      </Helmet>
      <ProfileHeader.Header elementStyles={JSON.parse(theme.style)}>
        <ProfileHeader.NavItems>
          {
            theme.sections.map(section =>
              <ProfileHeader.NavItem key={section.id}>
                <ProfileHeader.Link
                  href=""
                  elementStyles={JSON.parse(theme.style)}
                  elementFont={JSON.parse(theme.fonts)}
                >
                  {section.name}
                </ProfileHeader.Link>
              </ProfileHeader.NavItem>
            )
          }
        </ProfileHeader.NavItems>
      </ProfileHeader.Header>
    </ProfileHeader.Body>
  </React.Fragment>
);

ProfileHeader.Body = styled.div`
  background-color : ${props => props.elementStyles.backgroundColor};
  position         : relative;
`;

ProfileHeader.Header = styled.div`
  background-color : ${props => props.elementStyles.headerBackground};
  text-align       : ${props => props.elementStyles.MenuLinksPosition};
`;

ProfileHeader.NavItems = styled.ul`
  margin  : 0;
  padding : 0;
`;

ProfileHeader.Link = styled.a`
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

ProfileHeader.NavItem = styled.li`
  display : inline-block;
  padding : 2%;
`;

ProfileHeader.propTypes = {
  match : PropTypes.object.isRequired,
  data  : PropTypes.object.isRequired,
};

export default withTheme(ProfileHeader);
