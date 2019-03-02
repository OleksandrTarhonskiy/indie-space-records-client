import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';

const ModalContent = ({ products }) => (
  <ModalContent.ContentWrapper>
    <ul>
      {
        products.map(p =>
          <li key={p.id}>
            <div>
              {p.title}
            </div>
          </li>
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
`;

export default ModalContent;
