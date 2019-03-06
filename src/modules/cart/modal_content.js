import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import DeleteIcon     from '@material-ui/icons/Delete';

import GradientButton from '../../layouts/gradient_button';

const ModalContent = ({ products }) => (
  <ModalContent.ContentWrapper>
    <ul>
      {
        products.map(p =>
          <ModalContent.MerchItem key={p.id}>
            <ModalContent.CartItem>
              <img
                src={`http://localhost:8080/${p.url}`}
                style={{ width : '260px' }}
                alt=""
              />
              <ModalContent.DetailsWrapper>
                <h2>{p.title}</h2>
                <h2>{p.price}</h2>
                <GradientButton>
                  Checkout
                </GradientButton>
                <GradientButton>
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
  display : flex;
`;

ModalContent.MerchItem = styled.li`
  list-style : none;
  padding    : 30px;
`;

ModalContent.DetailsWrapper = styled.div`
  display        : flex;
  flex-direction : column;
  color          : #565656;
  font-family    : 'Roboto', sans-serif;
  margin         : 30px;
`;

ModalContent.ButtonsWrapper = styled.div`
  display        : flex;
  flex-direction : row;
`;

export default ModalContent;
