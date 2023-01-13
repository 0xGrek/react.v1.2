import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCardButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amunt;
    }, 0);

    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.}>
            <CartIcon />
        </span>
        <span>Your car</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>;
};
export default HeaderCardButton;
