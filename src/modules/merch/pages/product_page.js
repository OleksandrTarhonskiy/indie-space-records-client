import React                from 'react';
import PropTypes            from 'prop-types';
import { withRouter }       from 'react-router';
import { graphql }          from 'react-apollo';
import { compose }          from 'recompose';
import CircularProgress     from '@material-ui/core/CircularProgress';

import ProductDetails       from '../components/product_details';
import { viewProductQuery } from '../graphql/queries';
import withTheme            from '../../musician/HOCs/with_theme';

const ProductPage = ({
  theme: {
    style,
    fonts,
    sections,
  },
  currency,
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
        <ProductDetails
          product={viewProduct}
          style={JSON.parse(fonts)}
          fonts={JSON.parse(style)}
          currency={currency}
          sections={sections}
        />
    }
  </div>
);

ProductPage.propTypes = {
  match    : PropTypes.object.isRequired,
  data     : PropTypes.object.isRequired,
  theme    : PropTypes.object.isRequired,
  currency : PropTypes.string.isRequired,
};

const withRecompose = compose(
  withTheme,
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
