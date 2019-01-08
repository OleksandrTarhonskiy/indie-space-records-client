import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { Helmet }               from 'react-helmet';
import { SocialIcon }           from 'react-social-icons';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}                               from 'react-router-dom';
import { withRouter }           from "react-router";

import Sections                 from './sections';
import MusicianMerchPage        from '../pages/musician_merch_page';

const Profile = ({
  profile,
  match : {
    path,
  },
}) => (
  <div>
    <Profile.Body
      key={profile.id}
      elementStyles={JSON.parse(profile.theme.style)}
    >
      <Helmet>
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(profile.theme.fonts).headlineFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(profile.theme.fonts).regularTextFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(profile.theme.fonts).linksFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(profile.theme.fonts).subHead}`} rel="stylesheet" />
      </Helmet>
      <Profile.Header elementStyles={JSON.parse(profile.theme.style)}>
        <Profile.NavItems >
          {
            profile.theme.sections.map(section =>
              <Profile.NavItem key={section.id}>
                <Profile.Link
                  href=""
                  elementStyles={JSON.parse(profile.theme.style)}
                  elementFont={JSON.parse(profile.theme.fonts)}
                  className="apply-font-linksFont"
                >
                  {section.name}
                </Profile.Link>
              </Profile.NavItem>
            )
          }
        </Profile.NavItems>
      </Profile.Header>
      <Switch>
        <Route exact path={path} component={() => <Sections profile={profile} />} />
        <Route exact path={`${path}/merch`} component={() => <MusicianMerchPage myId={profile.id} />} />
      </Switch>
    </Profile.Body>
  </div>
);

Profile.Body = styled.div`
  background-color : ${props => props.elementStyles.backgroundColor};
  position         : relative;
`;

Profile.NavItems = styled.ul`
  margin  : 0;
  padding : 0;
`;

Profile.Link = styled.a`
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

Profile.NavItem = styled.li`
  display : inline-block;
  padding : 2%;
`;

Profile.Header = styled.div`
  background-color : ${props => props.elementStyles.headerBackground};
  text-align       : ${props => props.elementStyles.MenuLinksPosition};
`;

Profile.propTypes = {
  profile : PropTypes.object.isRequired,
};

export default withRouter(Profile);
