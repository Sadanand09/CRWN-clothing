import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { signOutStart } from "../../store/user/user.action.js";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";


import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style.jsx";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
