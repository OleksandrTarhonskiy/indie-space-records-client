import React                       from 'react';
import PropTypes                   from 'prop-types';
import { graphql }                 from 'react-apollo';
import styled                      from 'styled-components';
import Paper                       from '@material-ui/core/Paper';
import CircularProgress            from '@material-ui/core/CircularProgress';
import ExpansionPanel              from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary       from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails       from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon              from '@material-ui/icons/ExpandMore';
import Typography                  from '@material-ui/core/Typography';

import ProfileThemeSettings        from '../forms/profile_theme_settings';
import MyProfilePage               from './my_profile_page';
import { myProfileWithThemeQuery } from '../graphql/queries';
import EditSectionStyleForm        from '../forms/edit_section_style_form';

const ProfileThemeSettingsPage = ({ data: { loading, myProfile = {} } }) => (
  <ProfileThemeSettingsPage.Wrapper>
    <ProfileThemeSettingsPage.SideBar>
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
              key={myProfile.id}
              styles={JSON.parse(myProfile.theme.style)}
              fonts={JSON.parse(myProfile.theme.fonts)}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      }
      {
        loading?
        <CircularProgress />
        :
        myProfile.theme.sections.map(section =>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{section.name} section styles</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <EditSectionStyleForm
                key={section.id}
                id={section.id}
                styles={JSON.parse(section.style)}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      }
    </ProfileThemeSettingsPage.SideBar>
    <ProfileThemeSettingsPage.ProfileWrapper>
      <MyProfilePage />
    </ProfileThemeSettingsPage.ProfileWrapper>
  </ProfileThemeSettingsPage.Wrapper>
);

ProfileThemeSettingsPage.Wrapper = styled.div`
  display        : flex;
  flex-direction : row;
  background     : #eaedf5;
`;

ProfileThemeSettingsPage.SideBar = styled(Paper)`
  width            : 18%;
  background-color : #f8f8f8;
  display          : flex;
  flex-direction   : column;
  justify-content  : flex-start;
  padding          : 0;
  margin           : 1%;
`;

ProfileThemeSettingsPage.ProfileWrapper = styled(Paper)`
  width   : 80%;
  padding : 1%;
  margin  : 1% 0;
`;

ProfileThemeSettingsPage.propTypes = {
  data : PropTypes.object.isRequired,
};

export default graphql(myProfileWithThemeQuery)(ProfileThemeSettingsPage);
