"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Plus, Minus } from "lucide-react";

import { Product } from "@/lib/types";
import { useCartStore } from "@/context/useCartStore";


export default function ProductDetailsClient({
  product,
}: {
  product: Product;
}) {

  const addToCart = useCartStore(
    (state) => state.addToCart
  );


  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);



  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }


  function decreaseQuantity() {
    setQuantity((prev) =>
      prev > 1 ? prev - 1 : 1
    );
  }



  function handleAddToCart() {

    addToCart(product, quantity);

    setAdded(true);


    setTimeout(() => {
      setAdded(false);
    }, 1500);

  }



  return (
    <div className="mt-8 flex flex-col gap-6">


      {/* Quantity Selector */}
      <div className="flex items-center gap-4">


        <span className="text-sm font-semibold text-black">
          Quantity
        </span>



        <div className="
          flex items-center
          border border-slate-300
          bg-white
        ">

          <button
            onClick={decreaseQuantity}
            className="
              flex h-10 w-10
              items-center justify-center
              text-black
              transition
              hover:bg-blue-950
              hover:text-white
            "
            aria-label="Decrease quantity"
          >
            <Minus size={16}/>
          </button>



          <span className="
            flex h-10 w-12
            items-center justify-center
            border-x border-slate-300
            font-semibold
          ">
            {quantity}
          </span>



          <button
            onClick={increaseQuantity}
            className="
              flex h-10 w-10
              items-center justify-center
              text-black
              transition
              hover:bg-blue-950
              hover:text-white
            "
            aria-label="Increase quantity"
          >
            <Plus size={16}/>
          </button>


        </div>


      </div>





      {/* Actions */}
      <div className="
        flex flex-wrap gap-4
      ">


        <button
          onClick={handleAddToCart}
          className="
            flex items-center gap-3
            bg-blue-950
            px-8 py-4
            font-semibold
            text-white
            transition
            hover:bg-blue-900
          "
        >

          <ShoppingCart size={20}/>


          {added
            ? "Added To Cart"
            : "Add To Cart"
          }


        </button>




        <Link
          href="/cart"
          className="
            border border-black
            px-8 py-4
            font-semibold
            text-black
            transition
            hover:bg-black
            hover:text-white
          "
        >
          View Cart
        </Link>


      </div>


    </div>
  );
}