import React              from 'react';
import PropTypes          from 'prop-types';
import styled             from 'styled-components';
import { graphql }        from 'react-apollo';
import { compose }        from 'recompose';
import CircularProgress   from '@material-ui/core/CircularProgress';

import EditEventForm      from '../forms/edit_event_form';
import { viewEventQuery } from '../graphql/queries';

const EditEvent = ({
  data: { loading, viewEvent = {} },
}) => (
  <EditEvent.PageWrapper>
    {
      loading?
        <CircularProgress />
        :
        <EditEventForm currentEvent={viewEvent} />
    }
  </EditEvent.PageWrapper>
);

EditEvent.PageWrapper = styled.div`
  padding     : 5% 10%;
  font-family : 'Roboto', sans-serif;
  color       : #3c3c3e;
`;

EditEvent.propTypes = {
  id   : PropTypes.string.isRequired,
  data : PropTypes.object.isRequired,
};

const withRecompose = compose(
  graphql(viewEventQuery, {
    options: (ownProps) => ({
      variables: {
        eventId: ownProps.id,
      }
    })
  })
);

export default withRecompose(EditEvent);
