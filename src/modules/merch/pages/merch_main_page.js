import React                  from 'react';
import styled                 from 'styled-components';
import breakpoint             from 'styled-components-breakpoint';
import { Switch }             from 'react-router-dom';

import NavTabs                from '../components/nav_tabs';
import PrivateRoute           from '../../../routes/private_route';
import { MERCH_PATH }         from '../models/merch_routing';
import ProductsTablePage      from './products_table_page';
import OrdersPage             from './orders_page';
import AddProductForm         from '../forms/add_product_form';

const MerchMainPage = () => (
  <MerchMainPage.PageWrapper>
    <MerchMainPage.Header>
      <NavTabs />
    </MerchMainPage.Header>
    <Switch>
      <PrivateRoute exact path={MERCH_PATH.PRODUCTS} component={ProductsTablePage} />
      <PrivateRoute exact path={MERCH_PATH.CREATE} component={AddProductForm} />
      <PrivateRoute exact path={MERCH_PATH.ORDEDS} component={OrdersPage} />
    </Switch>
  </MerchMainPage.PageWrapper>
);

MerchMainPage.PageWrapper = styled.div`
  background : #eaedf5;
  padding    : 0 0 1%;
`;

MerchMainPage.Header = styled.div`
  display         : flex;
  flex-direction  : column;
  width           : 100%;
  background      : #ffff;
  justify-content : center;
  box-shadow      : 0px 3px 5px -1px rgba(0, 0, 0, 0.2);

  ${breakpoint('md')`
    flex-direction: row;
  `}
`;

MerchMainPage.MessageWrapper = styled.div`
  font-family     : 'Roboto', sans-serif;
  color           : #374142;
  display         : flex;
  flex-direction  : column;
  justify-content : center;
  padding         : 14%;
  font-size       : 25px;
`;

export default MerchMainPage;
