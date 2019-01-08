import React                from 'react';
import { withRouter }       from 'react-router';
import PropTypes            from 'prop-types';
import { graphql }          from 'react-apollo';
import { compose }          from 'recompose';

import ProductDetails       from '../components/product_details';
import { viewProductQuery } from '../graphql/queries';


const ProductPage = ({
  match: {
    params: {
      id
    }
  },
  data: {
    viewProduct = {}
  },
  myId,
}) => (
  <div>
    <ProductDetails product={viewProduct} />
  </div>
);

ProductPage.propTypes = {
  match : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  graphql(viewProductQuery, {
    options: (ownProps) => ({
      variables: {
        productId: ownProps.myId || ownProps.id
      }
    })
  }),
);

export default withRecompose(ProductPage);
