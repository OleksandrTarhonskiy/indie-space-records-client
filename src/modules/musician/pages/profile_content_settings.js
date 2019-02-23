import React                  from 'react';
import PropTypes              from 'prop-types';
import ExpansionPanel         from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary  from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails  from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon         from '@material-ui/icons/ExpandMore';
import Typography             from '@material-ui/core/Typography';
import IconButton             from '@material-ui/core/IconButton';
import Add                    from '@material-ui/icons/Add';
import CloseIcon              from '@material-ui/icons/Close';
import styled                 from 'styled-components';
import {
  compose,
  withStateHandlers,
}                             from 'recompose';

import EditSectionsContent    from '../forms/edit_sections_content';
import NewSectionForm         from '../forms/new_section_form';
import WidgetsPanel           from '../../widgets/components/widgets_panel';
import withProfileData        from '../HOCs/with_profile_data';

const ProfileContentSettings = ({
  profile: {
    myProfile: {
      theme: {
        sections,
      },
    },
  },
  toggleForm,
  isOpenForm,
}) => (
  <React.Fragment>
    {
      sections.map(section =>
        <ExpansionPanel key={section.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{section.name} settings</Typography>
          </ExpansionPanelSummary>
          <ProfileContentSettings.ExpansionPanelDetails>
            <EditSectionsContent section={section} />
            <WidgetsPanel widgets={section.widgets} />
          </ProfileContentSettings.ExpansionPanelDetails>
        </ExpansionPanel>
      )
    }
    <ProfileContentSettings.CreateNewWrapper>
      <ProfileContentSettings.IconButton
        onClick={toggleForm.bind(null, isOpenForm ? false : true)}
      >
        {
          isOpenForm ?
            <CloseIcon />
            :
            <Add />
        }
      </ProfileContentSettings.IconButton>
      <ProfileContentSettings.SubHead>
        Add new section to your profile
      </ProfileContentSettings.SubHead>
    </ProfileContentSettings.CreateNewWrapper>
    {
      isOpenForm?
        <ProfileContentSettings.FormWrapper>
          <NewSectionForm />
        </ProfileContentSettings.FormWrapper>
        :
        null
    }
  </React.Fragment>
);

ProfileContentSettings.CreateNewWrapper = styled.div`
  padding        : 2%;
  display        : flex;
  flex-direction : row;
`;

ProfileContentSettings.ExpansionPanelDetails = styled(ExpansionPanelDetails)`
  flex-direction : column;
`;

ProfileContentSettings.FormWrapper = styled.div`
  padding : 5%;
`;

ProfileContentSettings.SubHead = styled.h3`
  font-family  : 'Roboto', sans-serif;
  color        : #374142;
  font-weight  : 500;
  padding-left : 10px;
`;

ProfileContentSettings.IconButton = styled(IconButton)`
  width : 56px;
`;

ProfileContentSettings.propTypes = {
  profile    : PropTypes.object.isRequired,
  isOpenForm : PropTypes.bool.isRequired,
  toggleForm : PropTypes.func.isRequired,
};

const withRecompose = compose(
  withProfileData,
  withStateHandlers(
    ({
      isOpenForm = false
    }) => ({ isOpenForm }),
    {
      toggleForm : () => isOpenForm => ({ isOpenForm }),
    },
  ),
);

export default withRecompose(ProfileContentSettings);
