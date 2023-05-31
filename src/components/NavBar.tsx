import Image from "next/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { usePathname } from 'next/navigation';

import { RootState } from "@/redux/store";
import { closeMenu } from "@/redux/reducers/menu";

import CollectionNavBar from "./CollectionNavBar";

import CloseIcon from "../../public/images/icon-close.svg";
import ExpandIcon from "../../public/images/icon-expand.svg";

export default function NavBar () {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const statusMenu = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <nav 
      className={`w-full h-screen absolute z-50 flex-col left-0 top-0 bg-[--beige] ${statusMenu ? 'flex' : 'hidden'} p-5 gap-5 lg:static lg:bg-transparent lg:w-auto lg:h-auto lg:flex-row lg:p-0 lg:gap-14 lg:flex`}>
      <Image 
        className="mb-8 w-[25px] h-auto lg:hidden" 
        src={CloseIcon} 
        alt="Close menu" 
        onClick={() => dispatch(closeMenu())}/>

      <div className="group/collections flex flex-col gap-3 lg:block">
        <h2 className="transition flex gap-2 font-bold pl-6 lg:text-xl lg:font-medium lg:text-[--darkGrayishBlue] lg:pl-0 lg:hover:cursor-pointer hover:text-[--black]">
          Collections 
          <Image 
            className="hidden transition duration-500 rotate-180 group-hover/collections:rotate-0 lg:block"
            src={ExpandIcon} 
            alt="" 
            width={28} />
        </h2>

        <div className="pl-12 flex flex-col gap-4 lg:absolute lg:flex-row lg:gap-0 lg:justify-between lg:top-22 lg:left-30 lg:drop-shadow-md lg:bg-[--beige] lg:py-5 lg:px-8 lg:w-[400px] lg:rounded-lg lg:hidden group-hover/collections:flex ">
          <CollectionNavBar
            title="Seasonal" 
            numberCollection={0} />

          <CollectionNavBar
            title="Rainbow Athletics" 
            numberCollection={1} />
        </div>
      </div>

      <Link 
        href="/about" 
        className={`relative font-bold pl-6 lg:text-xl lg:font-medium lg:pl-0 transition lg:after:absolute lg:after:left-0 lg:after:-bottom-5 lg:after:w-full lg:after:h-[1px] lg:after:bg-slate-700 hover:after:inline-block hover:text-[--black] ${pathname == "/about" ? "lg:after:inline-block text-[--black]" : "lg:after:hidden lg:text-[--darkGrayishBlue]"}`}
        onClick={() => dispatch(closeMenu())} 
      >About</Link>
    </nav>
  )
}