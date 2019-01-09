import React                  from 'react';
import PropTypes              from 'prop-types';
import { compose }            from 'recompose';
import { withRouter }         from 'react-router';
import { graphql }            from 'react-apollo';
import CircularProgress       from '@material-ui/core/CircularProgress';

import { fetchProductsQuery } from '../graphql/queries';
import FullMerchList          from '../components/full_merch_list';

const MusicianMerchPage = ({
  match: {
    params: {
      id
    }
  },
  data: {
    loading,
    fetchProducts = []
  },
}) => (
  <React.Fragment>
    {
      loading ?
        <CircularProgress />
        :
        <FullMerchList merch={fetchProducts} />
    }
  </React.Fragment>
);

MusicianMerchPage.propTypes = {
  data  : PropTypes.object.isRequired,
  match : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  graphql(fetchProductsQuery, {
    options: (props) => ({
      variables: {
        profileId: props.match.params.id
      }
    })
  }),
);

export default withRecompose(MusicianMerchPage);
