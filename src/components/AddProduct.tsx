import Image from "next/image";

import { isInTheCart } from "@/redux/reducers/products";
import { useDispatch } from "react-redux";

import iconCart from "../../public/images/icon-cart.svg";

interface IAddProduct {
  sneaker: string,
  primaryColor: string,
  secundaryColor: string,
  collection: number
}

export default function AddProduct ({ sneaker, primaryColor, secundaryColor, collection }: IAddProduct) {
  const dispatch = useDispatch();

  return (
    <button 
      className="p-4 rounded-lg text-[--black] text-base font-bold flex justify-center items-center gap-2 lg:flex-grow lg:hover:opacity-90"
      style={{ 
        background: 
          `${ sneaker === "airMax" ||
              sneaker === "vibrant" ||
              sneaker === "pastelHarmony" ||
              sneaker === "wideLace"
                ? `linear-gradient(to right, rgb(${primaryColor}), rgb(${secundaryColor}))` 
                : `rgb(${primaryColor})`}` 
        }}
      onClick={() => dispatch(isInTheCart({ numberCollection: collection, sneaker: sneaker }))}
    >
      <Image 
        src={iconCart} 
        alt="" 
        className="w-4 h-auto" />
      Add to cart
    </button>
  )
}