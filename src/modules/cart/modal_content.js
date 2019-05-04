import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import DeleteIcon     from '@material-ui/icons/Delete';
import breakpoint     from 'styled-components-breakpoint';
import Typography     from '@material-ui/core/Typography';

import GradientButton from '../../layouts/gradient_button';
import withCart       from './with_cart';

const ModalContent = ({
  products,
  removeProduct,
  children,
}) => (
  <ModalContent.ContentWrapper>
    {
      products.length?
        <React.Fragment>
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
          {children}
        </React.Fragment>
        :
        <ModalContent.EmptyWrapper>
          <Typography variant="h2" gutterBottom>
            Shopping Cart Is Empty
          </Typography>
        </ModalContent.EmptyWrapper>
    }
  </ModalContent.ContentWrapper>
);

ModalContent.propTypes = {
  children      : PropTypes.element.isRequired,
  products      : PropTypes.array.isRequired,
  removeProduct : PropTypes.func.isRequired,
};

ModalContent.ContentWrapper = styled.div`
  background : #ffff;
  margin     : 3%;
  padding    : 1%;
  overflow   : scroll;
  height     : 570px;
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

ModalContent.EmptyWrapper = styled.div`
  display         : flex;
  margin          : 15% 0;
  justify-content : center;
`;

export default withCart(ModalContent);
