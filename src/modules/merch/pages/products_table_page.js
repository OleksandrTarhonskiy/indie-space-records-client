import React                  from 'react';
import PropTypes              from 'prop-types';
import styled                 from 'styled-components';
import TextField              from '@material-ui/core/TextField';
import * as R                 from 'ramda';
import { graphql }            from 'react-apollo';
import {
  compose,
  withStateHandlers,
}                             from 'recompose';
import CircularProgress       from '@material-ui/core/CircularProgress';

import { allMyProductsQuery } from '../graphql/queries';
import ProductsTable          from '../components/products_table';

const ProductsTablePage = ({
  data: {
    loading,
    allMyProducts = [],
  },
  tableOptions: {
    searchQuery,
  },
  handleChange,
}) => (
  <div>
    <ProductsTablePage.InputsWrapper>
      <TextField
        name="searchQuery"
        label="Search"
        type="text"
        margin="normal"
        onChange={handleChange}
        value={searchQuery}
        fullWidth
      />
    </ProductsTablePage.InputsWrapper>
    {
      loading ?
      <CircularProgress />
      :
      <ProductsTable products={allMyProducts} />
    }
  </div>
);

ProductsTablePage.InputsWrapper = styled.div`
  width  : 20%;
  margin : 2%;
`;

ProductsTablePage.propTypes = {
  data : PropTypes.object.isRequired,
};

const withRecompose = compose(
  graphql(allMyProductsQuery),
  withStateHandlers(
    ({
      tableOptions = {
        searchQuery : '',
      }
    }) => ({ tableOptions }),
    {
      handleChange : state => ({ target }) => {
        const tableOptions = R.assoc(target.name, target.value, state.tableOptions);
        return ({ tableOptions });
      },
    },
  ),
);

export default withRecompose(ProductsTablePage);
