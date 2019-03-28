import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import DeleteIcon     from '@material-ui/icons/Delete';
import breakpoint     from 'styled-components-breakpoint';

import GradientButton from '../../layouts/gradient_button';
import withCart       from './with_cart';

const ModalContent = ({
  products,
  removeProduct,
}) => (
  <ModalContent.ContentWrapper>
    <ul>
      {
        products.map(p =>
          <ModalContent.MerchItem key={p.id}>
            <ModalContent.CartItem>
              <ModalContent.ProductImage
                src={process.env.REACT_APP_API_URL + p.url}
                alt=""
              />
              <ModalContent.DetailsWrapper>
                <h2>Product title : {p.title}</h2>
                <h2>Product title : {p.price}</h2>
                <p>Product quantity : {p.quantity}</p>
                <GradientButton>
                  Checkout
                </GradientButton>
                <GradientButton onClick={removeProduct.bind(null, p.id)}>
                  <DeleteIcon />
                  Remove
                </GradientButton>
              </ModalContent.DetailsWrapper>
            </ModalContent.CartItem>
          </ModalContent.MerchItem>
        )
      }
    </ul>
  </ModalContent.ContentWrapper>
);

ModalContent.propTypes = {
  products : PropTypes.array.isRequired,
};

ModalContent.ContentWrapper = styled.div`
  background : #ffff;
  margin     : 5%;
  padding    : 1%;
  overflow   : scroll;
  height     : 500px;
`;

ModalContent.CartItem = styled.div`
  display        : flex;
  flex-direction : column;

  ${breakpoint('md')`
    flex-direction : row;
  `}
`;

ModalContent.ProductImage = styled.img`
  width : 30%;

  ${breakpoint('md')`
    width : 100%;
  `}
`;

ModalContent.MerchItem = styled.li`
  list-style : none;
  padding    : 1%;
`;

ModalContent.DetailsWrapper = styled.div`
  display        : flex;
  width          : 100%
  flex-direction : column;
  color          : #565656;
  font-family    : 'Roboto', sans-serif;
  margin         : 1%;
`;

ModalContent.ButtonsWrapper = styled.div`
  display        : flex;
  flex-direction : row;
`;

export default withCart(ModalContent);
