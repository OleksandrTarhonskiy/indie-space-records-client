import React          from 'react';
import styled         from 'styled-components';

import AddProductForm from '../forms/add_product_form';

const AddProductPage = () => (
  <AddProductPage.PageWrapper>
    <AddProductForm />
  </AddProductPage.PageWrapper>
);

AddProductPage.PageWrapper = styled.div`
  background : #eaedf5;
  padding    : 1% 0 1%;
`;

export default AddProductPage;
