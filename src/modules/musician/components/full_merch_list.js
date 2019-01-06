import React      from 'react';
import PropTypes  from 'prop-types';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const FullMerchList = ({ merch }) => (
  <FullMerchList.List>
    {
      merch.map(product =>
        <li key={product.id}>
          <FullMerchList.ImageWrapper background={`http://localhost:8080/${product.url}`} />
          {product.title}
        </li>
      )
    }
  </FullMerchList.List>
);

FullMerchList.propTypes = {
  merch : PropTypes.array.isRequired,
};

FullMerchList.List = styled.ul`
  && {
    display        : flex;
    flex-direction : column;
    list-style     : none;
    padding        : 0;
    margin         : 0;

    ${breakpoint('md')`
      display               : grid;
      grid-template-columns : 33% 33% 33%;
    `}
  }
`;

FullMerchList.ImageWrapper = styled.div`
  width             : 100%;
  height            : 462px;
  background        : url(${props => props.background});
  background-size   : contain;
  background-repeat : no-repeat;
`;


export default FullMerchList;
