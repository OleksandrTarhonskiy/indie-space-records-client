import React              from 'react';
import PropTypes          from 'prop-types';
import { withRouter }     from 'react-router';
import { graphql }        from 'react-apollo';
import { compose }        from 'recompose';
import CircularProgress   from '@material-ui/core/CircularProgress';
import styled             from 'styled-components';

import EditEventForm      from '../forms/edit_event_form';
import { viewEventQuery } from '../graphql/queries';

const EditEventPage = ({
  data: {
    loading,
    viewEvent = {}
  },
}) => (
  <EditEventPage.PageWrapper>
    {
      loading ?
        <CircularProgress />
        :
        <EditEventForm currentEvent={viewEvent} />
    }
  </EditEventPage.PageWrapper>
);

EditEventPage.PageWrapper = styled.div`
  padding     : 5% 10%;
  font-family : 'Roboto', sans-serif;
  color       : #3c3c3e;
`;

EditEventPage.propTypes = {
  match : PropTypes.object.isRequired,
  data  : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  graphql(viewEventQuery, {
    options: (props) => ({
      variables: {
        eventId: props.match.params.id,
      }
    })
  })
);

export default withRecompose(EditEventPage);
