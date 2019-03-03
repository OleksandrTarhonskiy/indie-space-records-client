import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';

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
              {p.title}
              {p.price}
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

export default ModalContent;
