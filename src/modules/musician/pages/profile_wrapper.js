import React, { Component } from 'react';
import ShoppingCart         from '@material-ui/icons/ShoppingCart';
import Badge                from '@material-ui/core/Badge';
import IconButton           from '@material-ui/core/IconButton';
import Modal                from '@material-ui/core/Modal';
import * as R               from 'ramda';
import styled               from 'styled-components';
import { withRouter }       from 'react-router-dom';

import profileRoutes        from '../../../routes/profile_routes';
import ProfileHeader        from '../components/profile_header';
import ThemeProvider        from '../HOCs/theme_provider';
import CartButton           from '../../cart/portals/cart_button';
import CartProvider         from '../../cart/cart_provider';
import ModalContent         from '../../cart/modal_content';

class ProfileWrapper extends Component {
  state = {
    products : [],
    open     : false,
  };

  componentDidMount = () => {
    const products = JSON.parse(localStorage.getItem(`Cart${this.props.match.params.id}`)) || [];
    this.setState({ products });
  };

  setProduct = (product, profileId) => {
    const productData = {
      id       : product.id,
      title    : product.title,
      type     : product.type,
      price    : product.price,
      url      : product.url,
      storeId  : profileId,
      quantity : 1,
    };

    let productsList = [...this.state.products];

    const shoppingCart = JSON.parse(localStorage.getItem(`Cart${this.props.match.params.id}`)) || [];
    const selectedItem = R.find(R.propEq('id', product.id))(this.state.products)

    if (selectedItem) {
      const indexInState = productsList.indexOf(selectedItem);
      selectedItem.quantity++
      productsList[indexInState] = selectedItem;
      this.setState({ products : productsList });

      localStorage.setItem(`Cart${this.props.match.params.id}`, JSON.stringify(this.state.products));
    } else {
      productsList.push(productData);
      this.setState({ products : productsList });

      shoppingCart.push(productData);
      localStorage.setItem(`Cart${this.props.match.params.id}`, JSON.stringify(shoppingCart));
    }
  };

  removeProduct = id => {
    const productsList = [...this.state.products];
    const filteredList = productsList.filter(p => p.id !== id);
    this.setState({ products : filteredList });
    localStorage.setItem(`Cart${this.props.match.params.id}`, JSON.stringify(filteredList));
  };

  clearCart = () => {
    this.setState({ products : [] });
    localStorage.removeItem(`Cart${this.props.match.params.id}`);
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <CartProvider value={{
        setProduct    : this.setProduct,
        removeProduct : this.removeProduct,
        clearCart     : this.clearCart,
        products      : this.state.products,
      }}>
        <ThemeProvider>
          <ProfileHeader />
          {profileRoutes}
          {
            this.state.products.length > 0 &&
            <CartButton>
              <CartButtonBadge badgeContent={this.state.products.length} color="primary">
                <ShoppingCartButton onClick={this.handleOpen}>
                  <ShoppingCart />
                </ShoppingCartButton>
              </CartButtonBadge>
            </CartButton>
          }
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <ModalContent products={this.state.products} />
          </Modal>
        </ThemeProvider>
      </CartProvider>
    );
  };
};

const CartButtonBadge = styled(Badge)`
  position   : fixed !important;
  z-index    : 3000;
  text-align : center;
  bottom     : 100px;
  right      : 25px;
  position   : fixed !important;
  z-index    : 3000;
  text-align : center;
  z-index    : 3500;
`;


const ShoppingCartButton = styled(IconButton)`
  position   : fixed !important;
  z-index    : 3000;
  text-align : center;
  bottom     : 20px;
  right      : 20px;
  background : #ffff !important;
  height     : 80px;
  width      : 80px;
  box-shadow : 3px 10px 5px -8px rgba(0,0,0,0.75);
`;

export default withRouter(ProfileWrapper);
