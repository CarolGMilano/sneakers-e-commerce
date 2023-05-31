import Image from "next/image";

import bannerMobile from "../../public/images/banner-mobile.png";
import bannerDesktop from "../../public/images/banner-desktop.jpg";

export default function Banner () {
  return (
    <>
      <Image 
        src={bannerMobile} 
        alt=""
        className="md:hidden pb-5" />
        
      <Image 
        src={bannerDesktop} 
        alt=""
        className="hidden md:block lg:w-full lg:pb-5" />
    </>
    )
}