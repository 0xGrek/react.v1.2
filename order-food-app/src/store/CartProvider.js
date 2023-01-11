import { useReducer } from "react";

import CartContect from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};
// state =  last snepshot
const cartReducer = (state, рррорро) => {
    if (action.type === "ADD") {
        const updateItems = state.items.concat(action.item);

        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;
        console.log(updateItems);
        console.log(updatedTotalAmount);

        return {
            items: updateItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeToCartHandelr = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,

        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeToCartHandelr,
    };

    return (
        <CartContect.Provider value={cartContext}>
            {props.children}
        </CartContect.Provider>
    );
};
export default CartProvider;
