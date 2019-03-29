import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';
import breakpoint   from 'styled-components-breakpoint';
import Button       from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import DoneIcon     from '@material-ui/icons/Done';

import withCart     from '../../cart/with_cart';

const ProductDetails = ({
  profileId,
  product,
  fonts,
  sections,
  currency,
  setProduct,
  products,
}) => (
  <ProductDetails.Wrapper
    sectionStyles={JSON.parse(sections.find((element) => element.type === 'merch').style)}
  >
    <ProductDetails.ImageWrapper>
      <ProductDetails.Image
        src={process.env.REACT_APP_API_URL + product.url}
        alt=""
      />
    </ProductDetails.ImageWrapper>
    <ProductDetails.DetailsBlock>
      <h1>{product.title}</h1>
      <React.Fragment>
        <h2>{product.price} {currency}</h2>
        <h3>{product.type}</h3>
        <p>{product.desc}</p>
        {
          products.find(p => p.id === product.id && product.quantity === p.quantity)?
            <ProductDetails.AddToCart
              disabled={true}
              styles={fonts}
            >
              <DoneIcon />
            In cart
            </ProductDetails.AddToCart>
            :
            <ProductDetails.AddToCart
              styles={fonts}
              onClick={setProduct.bind(null, product, profileId)}
              disabled={!product.quantity}
            >
              <ShoppingCart />
            Add to cart
            </ProductDetails.AddToCart>
        }
      </React.Fragment>
    </ProductDetails.DetailsBlock>
  </ProductDetails.Wrapper>
);

ProductDetails.Wrapper = styled.div`
  && {
    background-color : ${props => props.sectionStyles.background};
    display          : flex;
    flex-direction   : column;
    font-family      : 'Roboto', sans-serif;
    color            : ${props => props.sectionStyles.color};

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
    border        : ${props => props.styles.border}px solid;;
    background    : ${props => props.disabled ? '#ffff' : props.styles.buttonsBackground};
    color         : ${props => props.styles.buttonsColor};
    padding       : 15px 30px;
    border-radius : ${props => props.styles.borderRadius}px;
    font-size     : 20px;

    &:hover {
      color      : ${props => props.styles.LinksHover};
      background : transparent;
    }
  }
`;

ProductDetails.propTypes = {
  product    : PropTypes.object.isRequired,
  fonts      : PropTypes.object.isRequired,
  sections   : PropTypes.array.isRequired,
  currency   : PropTypes.string.isRequired,
  profileId  : PropTypes.number.isRequired,
  setProduct : PropTypes.func.isRequired,
  products   : PropTypes.array.isRequired,
};

export default withCart(ProductDetails);
