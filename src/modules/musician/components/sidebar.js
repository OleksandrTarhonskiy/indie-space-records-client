import React                 from 'react';
import PropTypes             from 'prop-types';
import { graphql }           from 'react-apollo';
import styled                from 'styled-components';
import Paper                 from '@material-ui/core/Paper';
import CircularProgress      from '@material-ui/core/CircularProgress';
import ExpansionPanel        from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon        from '@material-ui/icons/ExpandMore';
import Typography            from '@material-ui/core/Typography';

import ProfileThemeSettings  from '../forms/profile_theme_settings';
import { fetchProfileQuery } from '../graphql/queries';
import EditSectionStyleForm  from '../forms/edit_section_style_form';

const Sidebar = ({
  data: {
    loading,
    fetchProfile = {},
  },
  id,
}) => (
  <Sidebar.Wrapper>
      {
        loading?
          <CircularProgress />
          :
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Basic theme styles</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ProfileThemeSettings
                styles={JSON.parse(fetchProfile.theme.style)}
                fonts={JSON.parse(fetchProfile.theme.fonts)}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
      }
      {
        loading?
          <CircularProgress />
          :
          fetchProfile.theme.sections.map(section =>
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
  data : PropTypes.object.isRequired,
};

export default graphql(fetchProfileQuery, {
  options: (props) => ({
    variables: {
      profileId: props.id
    }
  })
})(Sidebar);
