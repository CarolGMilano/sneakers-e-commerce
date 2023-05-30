"use client";

import { isInTheCart } from "@/redux/reducers/seasons";
import { useDispatch } from "react-redux";

import iconCart from "../../public/images/icon-cart.svg";
import Image from "next/image";

interface IAddProduct {
  sneaker: string,
  color: string
}

export default function AddProduct ({ sneaker, color }: IAddProduct) {
  const dispatch = useDispatch();

  return (
    <button 
      className="p-4 rounded-lg text-[--black] text-base font-bold flex justify-center items-center gap-2 lg:flex-grow lg:hover:opacity-90"
      style={{ backgroundColor: `#${color}` }}
      onClick={() => dispatch(isInTheCart(sneaker))}
    >
      <Image 
        src={iconCart} 
        alt="" 
        className="w-4 h-auto"/>
      Add to cart
      </button>
  )
}