import React    from 'react';
import ReactDOM from 'react-dom';

const cartRoot = document.getElementById('cart-root');

class CartButton extends React.Component {
  el = document.createElement('div');

  componentDidMount() {
    cartRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    cartRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default CartButton;
