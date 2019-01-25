import React                  from 'react';
import PropTypes              from 'prop-types';
import { graphql }            from 'react-apollo';
import * as R                 from 'ramda';
import {
  compose,
  withStateHandlers,
}                             from 'recompose';
import CircularProgress       from '@material-ui/core/CircularProgress';
import Button                 from '@material-ui/core/Button';

import { allMyProductsQuery } from '../graphql/queries';
import ProductsTable          from '../components/products_table';

const SearchResults = ({
  data: {
    loading,
    MyProducts = [],
    fetchMore,
  },
  loadMore,
}) => (
  <div>
    {
      loading ?
        <CircularProgress />
        :
        <React.Fragment>
          <ProductsTable products={MyProducts} />
          <Button
            variant="contained"
            onClick={loadMore}
          >
            Load More
          </Button>
        </React.Fragment>
    }
  </div>
);

SearchResults.propTypes = {
  data     : PropTypes.object.isRequired,
  loadMore : PropTypes.func.isRequired,
};

const withRecompose = compose(
  graphql(allMyProductsQuery, {
    options: props => ({
      fetchPolicy: 'network-only',
      variables: {
        searchQuery : props.search,
        offset      : 0,
      },
    }),
  }),
  withStateHandlers(
    ({
      hasMoreItems = true,
    }) => ({ hasMoreItems }),
    {
      loadMore : (state, { data }) => () => {
        data.fetchMore({
          variables : {
            offset : data.MyProducts.length,
          },

          updateQuery : (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }

            if (fetchMoreResult.MyProducts.length < 5) {
              state = R.assoc('hasMoreItems', false, state);
            }

            return {
              ...previousResult,
              MyProducts: [...previousResult.MyProducts, ...fetchMoreResult.MyProducts],
            };
          },
        });
      }
    },
  ),
);

export default withRecompose(SearchResults);
