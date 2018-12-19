import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import { Helmet }     from 'react-helmet';
import { SocialIcon } from 'react-social-icons';

import Section        from './section';

const Profile = ({ profile }) => (
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
      {
        profile.theme.sections.map(section =>
          <Profile.Section
            key={section.id}
            elementStyles={JSON.parse(section.style)}
          >
            <Profile.SubHeadline
              elementStyles={JSON.parse(profile.theme.style)}
              elementFont={JSON.parse(profile.theme.fonts)}
              display={JSON.parse(section.style).displayHeadline}
              sectionStyle={JSON.parse(section.style)}
              className="apply-font-subHead"
            >
              {section.name}
            </Profile.SubHeadline>
            <Profile.SectionContent
              elementStyles={JSON.parse(profile.theme.style)}
              elementFont={JSON.parse(profile.theme.fonts)}
              sectionStyle={JSON.parse(section.style)}
              className="apply-font-regularTextFont"
            >
              <Section
                type={section.type}
                events={profile.events}
                products={profile.products}
                content={section.content}
                currency={profile.currency}
                elementFont={JSON.parse(profile.theme.fonts)}
                elementStyles={JSON.parse(profile.theme.style)}
              />
              {
                section.widgets.map(w =>
                  section.id === w.sectionId? <Profile.SocialIcon url={w.link} /> : null
                )
              }
            </Profile.SectionContent>
          </Profile.Section>
        )
      }
    </Profile.Body>
  </div>
);

Profile.Body = styled.div`
  background-color : ${props => props.elementStyles.backgroundColor};
  position         : relative;
`;

Profile.Section = styled.div`
  background-color : ${props => props.elementStyles.background};
  display          : flex;
  flex-direction   : column;
  padding          : 5% 8%;
`;

Profile.SocialIcon = styled(SocialIcon)`
  margin : 1%;
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

Profile.SubHeadline = styled.h2`
  font-family : ${props => `${props.elementFont.subHead}`}, sans-serif;
  font-size   : ${props => props.elementStyles.h2FontSize}px;
  display     : ${props => props.display === 'false' ? 'none' : 'block'};
  color       : ${props => props.sectionStyle.headlineColor};
`;

Profile.SectionContent = styled.p`
  font-family : ${props => `${props.elementFont.regularTextFont}`}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
  color       : ${props => props.sectionStyle.color};
`;

Profile.propTypes = {
  profile : PropTypes.object.isRequired,
};

export default Profile;
