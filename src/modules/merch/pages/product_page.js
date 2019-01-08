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
}) => (
  <div>
    {console.log(viewProduct)}
    <ProductDetails product={viewProduct} />
  </div>
);

ProductPage.propTypes = {
  match : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  graphql(viewProductQuery, {
    options: props => ({
      variables: {
        productId: props.match.params.id,
      },
    })
  }),
);

export default withRecompose(ProductPage);
