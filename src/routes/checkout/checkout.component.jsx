import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss'

const Checkout = () => {

    const { cartItems, addItemToCart } = useContext(CartContext);

    return (
        <div>
            <h1>Checkout page created</h1>
            {
                cartItems.map((cartItem) => {
                    const { id, name, quantity } = cartItem;
                    return (
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <span >decrement</span>
                            <span onClick={() => addItemToCart(cartItem)}>increment</span>
                        </div>
                    )

                })
            }
        </div>
    )
};

export default Checkout;