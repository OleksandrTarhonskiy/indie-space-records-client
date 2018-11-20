import React          from 'react';
import { Switch }     from 'react-router-dom';

import PrivateRoute   from '../../../routes/private_route';
import { MERCH_PATH } from '../models/merch_routing';
import ProductsTable  from '../components/products_table';
import OrdersPage     from './orders_page';
import AddProductForm from '../forms/add_product_form';

const MerchHomePage = ({ products }) => (
  <div>
    <Switch>
      <PrivateRoute exact path={MERCH_PATH.PRODUCTS} component={() => <ProductsTable products={products} />} />
      <PrivateRoute exact path={MERCH_PATH.CREATE} component={AddProductForm} />
      <PrivateRoute exact path={MERCH_PATH.ORDEDS} component={OrdersPage} />
    </Switch>
  </div>
);

export default MerchHomePage;
