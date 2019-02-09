import React                from 'react';
import PropTypes            from 'prop-types';
import { withRouter }       from 'react-router';
import { graphql }          from 'react-apollo';
import { compose }          from 'recompose';
import CircularProgress     from '@material-ui/core/CircularProgress';

import ProductDetails       from '../components/product_details';
import { viewProductQuery } from '../graphql/queries';
import WithHeaderWrapper    from '../../musician/components/with_header_wrapper';


const ProductPage = ({
  data: {
    viewProduct = {},
    loading,
  },
}) => (
  <div>
    {
      loading ?
        <CircularProgress />
        :
        <WithHeaderWrapper>
          <ProductDetails product={viewProduct} />
        </WithHeaderWrapper>
    }
  </div>
);

ProductPage.propTypes = {
  match : PropTypes.object.isRequired,
  data  : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  graphql(viewProductQuery, {
    options: props => ({
      variables: {
        productId: props.match.params.productId,
      },
    })
  }),
);

export default withRecompose(ProductPage);
