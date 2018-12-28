import React          from 'react';
import { withRouter } from 'react-router';
import PropTypes      from 'prop-types';

import ProductDetails from '../components/product_details';

const ProductPage = ({
  match: {
    params: {
      id
    }
  },
}) => (
  <div>
    <ProductDetails id={id} />
  </div>
);

ProductPage.propTypes = {
  match : PropTypes.object.isRequired,
};

export default withRouter(ProductPage);
