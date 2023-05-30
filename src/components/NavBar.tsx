"use client";

import Image from "next/image";
import Link from "next/link";

import CloseIcon from "../../public/images/icon-close.svg";
import ExpandIcon from "../../public/images/icon-expand.svg";

import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "@/redux/reducers/menu";
import { RootState } from "@/redux/store";
import { usePathname } from 'next/navigation';

export default function NavBar () {
  const statusMenu = useSelector((state: RootState) => state.menu.isOpen);
  const dispatch = useDispatch();
  const pathname = usePathname();

  return (
    <nav 
      className={`w-full h-screen absolute z-50 flex-col left-0 top-0 bg-[--beige] ${statusMenu ? 'flex' : 'hidden'} p-5 gap-5 lg:static lg:bg-transparent lg:w-auto lg:h-auto lg:flex-row lg:p-0 lg:gap-14 lg:flex`}>
      <Image 
        src={CloseIcon} 
        alt="Close menu" 
        className="mb-8 w-[25px] h-auto lg:hidden" 
        onClick={() => dispatch(closeMenu())}/>

        <div className="group/collections flex flex-col gap-3 lg:block">
          <h2 className="transition flex gap-2 font-bold pl-6 lg:text-xl lg:font-medium lg:text-[--darkGrayishBlue] lg:pl-0 lg:hover:cursor-pointer hover:text-[--black]">
            Seasonal collection 
            <Image src={ExpandIcon} alt="" width={28} className="hidden transition duration-500 rotate-180 group-hover/collections:rotate-0 lg:block"/>
          </h2>

          <ul className="pl-12 flex flex-col gap-4 lg:absolute lg:top-22 lg:left-30 lg:drop-shadow-md lg:bg-[--beige] lg:py-5 lg:px-8 lg:w-[180px] lg:rounded-lg lg:hidden group-hover/collections:flex ">
            <li className={`before:hidden before:w-2 before:h-5 before:left-3 before:absolute before:bg-[#77BB9A] hover:before:inline-block ${pathname == "/collections/spring" ? "lg:before:inline-block" : "before:hidden"}`}>
              <Link 
                href="/collections/spring" 
                className="font-semibold lg:text-base lg:font-light lg:text-[--darkGrayishBlue] lg:uppercase"
                onClick={() => dispatch(closeMenu())}
              >Spring</Link>
            </li>

            <li className={`before:w-2 before:h-5 before:absolute before:left-3 before:bg-[#E7B10A] hover:before:inline-block ${pathname == "/collections/summer" ? "lg:before:inline-block" : "before:hidden"}`}>
              <Link 
                href="/collections/summer" 
                className="font-semibold lg:text-base lg:font-light lg:text-[--darkGrayishBlue] lg:uppercase"
                onClick={() => dispatch(closeMenu())}
              >Summer</Link>
            </li>

            <li className={`before:w-2 before:h-5 before:absolute before:left-3 before:bg-[#E38B29] hover:before:inline-block ${pathname == "/collections/autumn" ? "lg:before:inline-block" : "before:hidden"}`}>
              <Link 
                href="/collections/autumn" 
                className="font-semibold lg:text-base lg:font-light lg:text-[--darkGrayishBlue] lg:uppercase"
                onClick={() => dispatch(closeMenu())}
              >Autumn</Link>
              </li>

            <li className={`before:w-2 before:h-5 before:absolute before:left-3 before:bg-[#6C9BCF] hover:before:inline-block ${pathname == "/collections/winter" ? "lg:before:inline-block" : "before:hidden"}`}>
              <Link 
                href="/collections/winter" 
                className="font-extrabold lg:text-base lg:font-light lg:text-[--darkGrayishBlue] lg:uppercase"
                onClick={() => dispatch(closeMenu())}
              >Winter</Link>
            </li>
          </ul>
        </div>

      <Link 
        href="/about" 
        className={`relative font-bold pl-6 lg:text-xl lg:font-medium lg:pl-0 transition lg:after:absolute lg:after:left-0 lg:after:-bottom-5 lg:after:w-full lg:after:h-[1px] lg:after:bg-slate-700 hover:after:inline-block hover:text-[--black] ${pathname == "/about" ? "lg:after:inline-block text-[--black]" : "lg:after:hidden lg:text-[--darkGrayishBlue]"}`}
        onClick={() => dispatch(closeMenu())} 
      >About</Link>
    </nav>
  )
}