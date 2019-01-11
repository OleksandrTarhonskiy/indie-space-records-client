import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import Section        from './section';

const Sections = ({ profile }) => (
  <React.Fragment>
    {
      profile.theme.sections.map(section =>
        <Sections.Section
          key={section.id}
          elementStyles={JSON.parse(section.style)}
        >
          <Sections.SubHeadline
            elementStyles={JSON.parse(profile.theme.style)}
            elementFont={JSON.parse(profile.theme.fonts)}
            display={JSON.parse(section.style).displayHeadline}
            sectionStyle={JSON.parse(section.style)}
          >
            {section.name}
          </Sections.SubHeadline>
          <Sections.SectionContent
            elementStyles={JSON.parse(profile.theme.style)}
            elementFont={JSON.parse(profile.theme.fonts)}
            sectionStyle={JSON.parse(section.style)}
          >
            <Section
              id={profile.id}
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
                section.id === w.sectionId? <Sections.SocialIcon url={w.link} /> : null
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

Section.propTypes = {
  profile : PropTypes.object.isRequired,
};

export default Sections;
