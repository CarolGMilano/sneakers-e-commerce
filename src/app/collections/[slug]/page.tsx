"use client";

import Image from "next/image";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { openImageDialog } from "@/redux/reducers/imageDialog";
import ImageDialog from "@/components/ImageDialog";
import ProductInformation from "@/components/patterns/ProductInformation";

export default function Product () {
  const pageName = useParams();
  const product = useSelector((state: RootState) => state.sneakers.filter((item) => item.sneaker === pageName.slug)[0]);
  const dispatch = useDispatch();

  return (
    <section className="flex flex-col lg:flex-row lg:w-[1024px] lg:justify-between lg:px-5 lg:mt-14">
      <div className="w-full h-auto overflow-hidden bg-center lg:w-[45%] lg:flex lg:justify-center lg:items-center">
        <Image 
          src={product.image} 
          alt="" 
          onClick={() => dispatch(openImageDialog())}
          className="-my-16 lg:-my-0 lg:rounded-2xl lg:cursor-pointer"
        />
      </div>

      <ProductInformation 
        primaryColor={product.primaryColor}
        secundaryColor={product.secundaryColor}
        season={product.sneaker}
        title={product.title}
        description={product.description}
        price={product.price}
        discount={product.discount}
      />

      <ImageDialog image={product.image} />
    </section>
  )
}