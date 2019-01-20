import React                from 'react';
import PropTypes            from 'prop-types';
import styled               from 'styled-components';
import breakpoint           from 'styled-components-breakpoint';
import { graphql }          from 'react-apollo';
import Button               from '@material-ui/core/Button';
import ShoppingCart         from '@material-ui/icons/ShoppingCart';
import { compose }          from 'recompose';
import { withRouter }       from 'react-router';
import CircularProgress     from '@material-ui/core/CircularProgress';

import { profileThemeQuery } from '../../musician/graphql/queries';

const ProductDetails = ({
  product,
  data: {
    fetchProfile = {},
    loading,
  },
}) => (
  <ProductDetails.Wrapper>
    <ProductDetails.ImageWrapper>
      <ProductDetails.Image
        src={`http://localhost:8080/${product.url}`}
        alt=""
      />
    </ProductDetails.ImageWrapper>
    <ProductDetails.DetailsBlock>
      <h1>{product.title}</h1>
      {
        loading ?
        <CircularProgress />
        :
        <React.Fragment>
          <h2>{product.price} {fetchProfile.currency}</h2>
          <h3>{product.type}</h3>
          <p>{product.desc}</p>
          <ProductDetails.AddToCart
            basicStyles={JSON.parse(fetchProfile.theme.style)}
            disabled={!product.quantity}
          >
            <ShoppingCart />
            Add to cart
          </ProductDetails.AddToCart>
        </React.Fragment>
      }
    </ProductDetails.DetailsBlock>
  </ProductDetails.Wrapper>
);

ProductDetails.Wrapper = styled.div`
  && {
    display        : flex;
    flex-direction : column;
    font-family    : 'Roboto', sans-serif;
    color          : #3c3c3e;

    ${breakpoint('md')`
      flex-direction : row;
    `}
  }
`;

ProductDetails.DetailsBlock = styled.div`
  display        : flex;
  flex-direction : column;
  padding        : 4%;
`;

ProductDetails.ImageWrapper = styled.div`
  width   : 50%;
  display : block;
  padding : 4%;
`;

ProductDetails.Image = styled.img`
  width  : 100%
  height : auto;
`;

ProductDetails.AddToCart = styled(Button)`
  && {
    width         : 300px;
    border        : ${props => props.basicStyles.border}px solid;;
    background    : ${ props => props.disabled ? '#ffff' : props.basicStyles.buttonsBackground};
    color         : ${props => props.basicStyles.buttonsColor};
    padding       : 15px 30px;
    border-radius : ${props => props.basicStyles.borderRadius}px;
    font-size     : 20px;

    &:hover {
      color      : ${props => props.basicStyles.LinksHover};
      background : #ffff;
    }
  }
`;

ProductDetails.propTypes = {
  product : PropTypes.number.isRequired,
  data    : PropTypes.object.isRequired,
  match   : PropTypes.object.isRequired,
};

const withRecompose = compose(
  withRouter,
  graphql(profileThemeQuery, {
    options: (props) => ({
      variables: {
        profileId: props.match.params.musicianId,
      }
    })
  }),
);

export default withRecompose(ProductDetails);
