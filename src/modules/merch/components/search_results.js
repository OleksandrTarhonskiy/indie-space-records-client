import React                  from 'react';
import PropTypes              from 'prop-types';
import { graphql }            from 'react-apollo';
import {
  compose,
  withHandlers,
  withState,
}                             from 'recompose';
import CircularProgress       from '@material-ui/core/CircularProgress';
import InfiniteScroll         from 'react-infinite-scroller';

import { allMyProductsQuery } from '../graphql/queries';
import ProductsTable          from '../components/products_table';

const SearchResults = ({
  data: {
    loading,
    MyProducts = [],
    fetchMore,
  },
  loadMore,
  hasMore,
}) => (
  <div>
    {
      loading ?
        <CircularProgress />
        :
        <React.Fragment>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={<CircularProgress key={0} />}
            useWindow={true}
          >
            <ProductsTable products={MyProducts} />
          </InfiniteScroll>
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
  withState('hasMore', 'setHasMore', true),
  withHandlers(
    {
      loadMore : ({ data, setHasMore }) => () => {
        data.fetchMore({
          variables : {
            offset : data.MyProducts.length,
          },

          updateQuery : (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }

            if (fetchMoreResult.MyProducts.length < 5) {
              setHasMore(false);
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
