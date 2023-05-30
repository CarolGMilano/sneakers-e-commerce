"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/images/logo.svg";
import Menu from "../../../public/images/icon-menu.svg";
import Profile from "../../../public/images/image-avatar.png";
import NavBar from "../NavBar";
import Cart from "../Cart";

import { useDispatch } from "react-redux";
import { openMenu } from "@/redux/reducers/menu";

export default function Header () {
  const dispatch = useDispatch();

  return (
    <header className="p-5 flex justify-between items-center relative lg:w-[1024px] lg:py-12 lg:border-b-[1px] lg:border-b-black lg:px-3">
      <div className="flex justify-center items-start gap-x-5 lg:gap-x-16">
        <Image src={Menu} alt="Menu" className="w-auto h-[25px] lg:hidden" onClick={() => dispatch(openMenu())} />

        <Link href="/">
          <Image src={Logo} priority={true} alt="Sneakers"  className="w-auto h-5 lg:h-7" />
        </Link>

        <NavBar />
      </div>
      
      <div className="flex justify-center items-center gap-x-6 lg:gap-x-8">
        <Cart />
        <Image src={Profile} alt="My Profile" className="w-6 h-6 lg:w-12 lg:h-12 rounded-full hover:outline hover:outline-1  hover:outline-black hover:cursor-pointer" />
      </div>
    </header>
  )
}