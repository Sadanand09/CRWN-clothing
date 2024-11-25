import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss'

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toogleIsCartOpen = () => { setIsCartOpen(!isCartOpen) };
    
    return (
        <div className='cart-icon-container' onClick={toogleIsCartOpen} >
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <sapn className='item-count'>0</sapn>
        </div>
    );
}

export default CartIcon;