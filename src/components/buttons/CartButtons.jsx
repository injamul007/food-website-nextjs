"use client";
import { CartContext } from "@/app/context/CartProvider";
import React, { use } from "react";

const CartButtons = ({food}) => {
  // const [inCart, setInCart] = useState(false);
  const {addToCart} = use(CartContext)

  const handleAddToCart = () => {
    // setInCart(true);
    addToCart(food)
  };

  return (
    <button
      onClick={handleAddToCart}
      // disabled={inCart}
      className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-lg cursor-pointer duration-200 disabled:bg-slate-400 disabled:cursor-default"
    >
      {/* {inCart ? "Added" : "Add to Cart"} */}
      Add to Cart
    </button>
  );
};

export default CartButtons;
