import React                 from 'react';
import PropTypes             from 'prop-types';
import styled                from 'styled-components';
import Paper                 from '@material-ui/core/Paper';
import ExpansionPanel        from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon        from '@material-ui/icons/ExpandMore';
import Typography            from '@material-ui/core/Typography';

import ProfileThemeSettings  from '../forms/profile_theme_settings';
import EditSectionStyleForm  from '../forms/edit_section_style_form';

const Sidebar = ({ profile }) => (
  <Sidebar.Wrapper>
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Basic theme styles</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ProfileThemeSettings
          styles={JSON.parse(profile.theme.style)}
          fonts={JSON.parse(profile.theme.fonts)}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    {
      profile.theme.sections.map(section =>
        <ExpansionPanel key={section.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{section.name} section styles</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <EditSectionStyleForm
              id={section.id}
              styles={JSON.parse(section.style)}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    }
  </Sidebar.Wrapper>
);

Sidebar.Wrapper = styled(Paper)`
  width            : 18%;
  background-color : #f8f8f8;
  display          : flex;
  flex-direction   : column;
  justify-content  : flex-start;
  padding          : 0;
  margin           : 1%;
`;

Sidebar.propTypes = {
  profile : PropTypes.object.isRequired,
};

export default Sidebar;
