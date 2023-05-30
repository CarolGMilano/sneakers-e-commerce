"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changeCart } from "@/redux/reducers/cart";

import iconCart from "../../public/images/icon-cart.svg";
import iconDelete from "../../public/images/icon-delete.svg";
import { isNotInTheCart } from "@/redux/reducers/seasons";

export default function Cart () {
  const dispatch = useDispatch();
  let statusCart = useSelector((state: RootState) => state.cart.isOpen);
  const cartList = useSelector((state: RootState) => state.sneakers.filter(sneaker => sneaker.inTheCart && sneaker.amount >= 1));
  const amountCart = cartList.reduce((initial, sneaker) => initial + sneaker.amount, 0);

  return (
    <>
      <Image 
        src={iconCart} 
        alt="My Cart" 
        className="w-auto h-5 lg:h-7 lg:hover:cursor-pointer lg:hover:bg-black lg:hover:bg-opacity-10 lg:hover:rounded-sm"
        onClick={() => dispatch(changeCart())}
      />

      {cartList.length >= 1 ? <span className="absolute top-4 right-[60px] bg-black px-[6px] text-xs rounded-full text-[--white] lg:top-12 lg:right-[80px] lg:text-sm">{ amountCart }</span> : ""}

      <div 
        className={`absolute ${statusCart ? "block" : "hidden"} top-[108%] w-[95%] h-auto left-[50%] bg-[--beige] translate-x-[-50%] p-4 rounded-md md:w-[450px] lg:left-[70%] lg:top-[75%]`}
        style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}
      >
        <h3 className="pb-4 border-b border-gray-400 font-bold">Cart</h3>

        {cartList.length == 0 
          ? <p className="text-center py-14 text-sm">Your cart is empty.</p>
          : <>
              {cartList.map(item => {
                const finalPrice = (item.price - ((item.price * item.discount) / 100)) * item.amount;

                return <div key={item.sneaker} className="py-5 flex gap-3 items-center justify-between">
                  <Image 
                    src={item.image} 
                    alt=""
                    className="w-14 rounded-md" />

                  <div>
                    <h3 className="text-sm">{item.title}</h3>
                    <p className="text-lg">${(item.price - ((item.price * item.discount) / 100)).toFixed(2)} x {item.amount} = <span className="font-bold">${finalPrice.toFixed(2)}</span></p> 
                  </div>

                  <Image 
                    src={iconDelete} 
                    alt="" 
                    onClick={() => dispatch(isNotInTheCart(item.sneaker))}
                    className="m-2 hover:cursor-pointer" />
                </div>
              })}

              <button className="p-4 rounded-lg text-[--beige] text-base font-bold w-full bg-[--black]">Checkout</button>
            </>
        }
      </div>
    </>
  )
}