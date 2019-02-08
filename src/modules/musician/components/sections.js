import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import Section        from './section';

const Sections = ({
  profileThemeSections,
  profileThemeStyles,
  profileThemeFonts,
  profileId,
  events,
  products,
  currency,
}) => (
  <React.Fragment>
    {
      profileThemeSections.map(section =>
        <Sections.Section
          key={section.id}
          elementStyles={JSON.parse(section.style)}
        >
          <Sections.SubHeadline
            elementStyles={profileThemeStyles}
            elementFont={profileThemeFonts}
            display={JSON.parse(section.style).displayHeadline}
            sectionStyle={JSON.parse(section.style)}
          >
            {section.name}
          </Sections.SubHeadline>
          <Sections.SectionContent
            elementStyles={profileThemeStyles}
            elementFont={profileThemeFonts}
            sectionStyle={JSON.parse(section.style)}
          >
            <Section
              id={profileId}
              type={section.type}
              events={events}
              products={products}
              content={section.content}
              currency={currency}
              elementFont={profileThemeFonts}
              elementStyles={profileThemeStyles}
            />
            {
              section.widgets.map(w =>
                section.id === w.sectionId? <Sections.SocialIcon key={w.id} url={w.link} /> : null
              )
            }
          </Sections.SectionContent>
        </Sections.Section>
      )
    }
  </React.Fragment>
);

Sections.Section = styled.div`
  background-color : ${props => props.elementStyles.background};
  display          : flex;
  flex-direction   : column;
  padding          : 5% 8%;
`;

Sections.SocialIcon = styled(SocialIcon)`
  margin : 1%;
`;

Sections.SubHeadline = styled.h2`
  font-family : ${props => `${props.elementFont.subHead}`}, sans-serif;
  font-size   : ${props => props.elementStyles.h2FontSize}px;
  display     : ${props => props.display === 'false' ? 'none' : 'block'};
  color       : ${props => props.sectionStyle.headlineColor};
`;

Sections.SectionContent = styled.div`
  font-family : ${props => `${props.elementFont.regularTextFont}`}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
  color       : ${props => props.sectionStyle.color};
`;

Sections.propTypes = {
  profile : PropTypes.object.isRequired,
};

export default Sections;
