import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import Section        from '../components/section';
import withTheme      from '../HOCs/with_theme';

const ProfileHomePage = ({
  theme: {
    fonts,
    style,
    sections,
  },
  id,
  events,
  products,
  currency,
}) => (
  <React.Fragment>
    {
      sections.map(section =>
        <ProfileHomePage.Section
          key={section.id}
          elementStyles={JSON.parse(section.style)}
        >
          <ProfileHomePage.SubHeadline
            elementStyles={JSON.parse(style)}
            elementFont={JSON.parse(fonts)}
            display={JSON.parse(section.style).displayHeadline}
            sectionStyle={JSON.parse(section.style)}
          >
            {section.name}
          </ProfileHomePage.SubHeadline>
          <ProfileHomePage.SectionContent
            elementStyles={JSON.parse(style)}
            elementFont={JSON.parse(fonts)}
            sectionStyle={JSON.parse(section.style)}
          >
            <Section
              id={id}
              type={section.type}
              events={events}
              products={products}
              content={section.content}
              currency={currency}
              fonts={JSON.parse(fonts)}
              styles={JSON.parse(style)}
            />
            {
              section.widgets.map(w =>
                section.id === w.sectionId? <ProfileHomePage.SocialIcon key={w.id} url={w.link} /> : null
              )
            }
          </ProfileHomePage.SectionContent>
        </ProfileHomePage.Section>
      )
    }
  </React.Fragment>
);

ProfileHomePage.Section = styled.div`
  background-color : ${props => props.elementStyles.background};
  display          : flex;
  flex-direction   : column;
  padding          : 5% 8%;
`;

ProfileHomePage.SocialIcon = styled(SocialIcon)`
  margin : 1%;
`;

ProfileHomePage.SubHeadline = styled.h2`
  font-family : ${props => `${props.elementFont.subHead}`}, sans-serif;
  font-size   : ${props => props.elementStyles.h2FontSize}px;
  display     : ${props => props.display === 'false' ? 'none' : 'block'};
  color       : ${props => props.sectionStyle.headlineColor};
`;

ProfileHomePage.SectionContent = styled.div`
  font-family : ${props => `${props.elementFont.regularTextFont}`}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
  color       : ${props => props.sectionStyle.color};
`;

ProfileHomePage.propTypes = {
  theme    : PropTypes.object.isRequired,
  id       : PropTypes.number.isRequired,
  events   : PropTypes.array.isRequired,
  products : PropTypes.array.isRequired,
  currency : PropTypes.string.isRequired,
};

export default withTheme(ProfileHomePage);
