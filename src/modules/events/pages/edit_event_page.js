import React          from 'react';
import PropTypes      from 'prop-types';
import { withRouter } from 'react-router';

import EditEvent      from '../components/edit_event';

const EditEventPage = ({
  match: {
    params: {
      id
    }
  },
}) => (
  <EditEvent id={id} />
);

EditEventPage.propTypes = {
  match : PropTypes.object.isRequired,
};

export default withRouter(EditEventPage);
