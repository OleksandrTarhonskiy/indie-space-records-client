import React  from 'react';
import { withRouter }       from 'react-router';

import EditEvent from '../components/edit_event';

const EditEventPage = ({
  match: {
    params: {
      id
    }
  },
}) => (
  <EditEvent id={id} />
);

export default withRouter(EditEventPage);
