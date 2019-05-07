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
      elementstyles={JSON.parse(theme.style)}
    >
      <Helmet>
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).headlineFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).regularTextFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).linksFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(theme.fonts).subHead}`} rel="stylesheet" />
      </Helmet>
      <ProfileHeader.Header elementstyles={JSON.parse(theme.style)}>
        <ProfileHeader.NavItems>
          {
            theme.sections.map(section =>
              <ProfileHeader.NavItem key={section.id}>
                <ProfileHeader.Link
                  href=""
                  elementstyles={JSON.parse(theme.style)}
                  elementfont={JSON.parse(theme.fonts)}
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
  background-color : ${props => props.elementstyles.backgroundColor};
  position         : relative;
`;

ProfileHeader.Header = styled.div`
  background-color : ${props => props.elementstyles.headerBackground};
  text-align       : ${props => props.elementstyles.MenuLinksPosition};
`;

ProfileHeader.NavItems = styled.ul`
  margin  : 0;
  padding : 0;
`;

ProfileHeader.Link = styled.a`
  && {
    color           : ${props => props.elementstyles.LinksColor};
    text-decoration : none;
    font-family     : ${props => `${props.elementfont.linksFont}`}, sans-serif;
    font-weight     : 600;
    outline         : none;

    &:hover {
      color : ${props => props.elementstyles.LinksHover};
    }
  }
`;

ProfileHeader.NavItem = styled.li`
  display : inline-block;
  padding : 2%;
`;

ProfileHeader.propTypes = {
  theme : PropTypes.object.isRequired,
};

export default withTheme(ProfileHeader);
