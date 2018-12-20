import React                  from 'react';
import PropTypes              from 'prop-types';
import { graphql }            from 'react-apollo';
import { compose }            from 'recompose';
import CircularProgress       from '@material-ui/core/CircularProgress';

import { allMyProductsQuery } from '../graphql/queries';
import ProductsTable          from '../components/products_table';

const SearchResults = ({
  data: {
    loading,
    allMyProducts = [],
  },
}) => (
  <div>
    {
      loading ?
        <CircularProgress />
        :
        <ProductsTable products={allMyProducts} />
    }
  </div>
);

SearchResults.propTypes = {
  data : PropTypes.object.isRequired,
};

const withRecompose = compose(
  graphql(allMyProductsQuery, {
    options: (props) => ({
      variables: {
        searchQuery: props.search
      }
    })
  }),
);

export default withRecompose(SearchResults);
