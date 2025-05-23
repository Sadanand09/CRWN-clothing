import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  //const { cartItems, cartTotal } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems && cartItems.length > 0 ? (
        cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      ) : (
        <p>Your cart is empty</p>
      )}

      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
