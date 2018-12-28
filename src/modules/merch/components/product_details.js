import React              from 'react';
import PropTypes          from 'prop-types';
import { graphql }        from 'react-apollo';
import { compose }        from 'recompose';

import { viewProductQuery } from '../graphql/queries';

const ProductDetails = ({
  data: {
    viewProduct = {}
  },
}) => (
  <div>
    <img src={`http://localhost:8080/${viewProduct.url}`} alt="" />
    {viewProduct.title}
  </div>
);

ProductDetails.propTypes = {
  id   : PropTypes.number.isRequired,
  data : PropTypes.object.isRequired,
};

const withRecompose = compose(
  graphql(viewProductQuery, {
    options: (ownProps) => ({
      variables: {
        productId: ownProps.id
      }
    })
  }),
);

export default withRecompose(ProductDetails);
