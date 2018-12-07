import React                  from 'react';
import { graphql }            from 'react-apollo';
import ExpansionPanel         from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary  from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails  from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon         from '@material-ui/icons/ExpandMore';
import CircularProgress       from '@material-ui/core/CircularProgress';
import Typography             from '@material-ui/core/Typography';

import { allMySectionsQuery } from '../graphql/queries';
import EditSectionsContent    from '../forms/edit_sections_content'

const ProfileContentSettings = ({
  data: {
    loading,
    allMySections = []
  },
}) => (
  <div>
    {
      loading?
      <CircularProgress />
      :
      allMySections.map(section =>
        <ExpansionPanel key={section.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{section.name} settings</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <EditSectionsContent section={section} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    }
  </div>
);

export default graphql(allMySectionsQuery)(ProfileContentSettings);
