import React         from 'react';
import PropTypes     from 'prop-types';
import styled        from 'styled-components';
import TextField     from '@material-ui/core/TextField';
import * as R        from 'ramda';
import {
  compose,
  withStateHandlers,
}                    from 'recompose';

import SearchResults from './search_results'

const ProductsTablePage = ({
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
    <SearchResults search={searchQuery} />
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
