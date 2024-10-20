import React from "react";

const CartContext = React.createContext({
   items: [],
   totalAmount: 0,
   additem: () => {},
   removeItem: (id) => {},
});

export default CartContext