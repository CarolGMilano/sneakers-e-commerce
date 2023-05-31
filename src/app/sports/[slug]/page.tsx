"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { openImageDialog } from "@/redux/reducers/imageDialog";

import ProductInformation from "@/components/patterns/ProductInformation";
import ImageDialog from "@/components/ImageDialog";

export default function Product () {
  const dispatch = useDispatch();
  const pageName = useParams();
  const product = useSelector((state: RootState) => state.products.sports.filter((item) => item.sneaker === pageName.slug)[0]);

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
        collection={1}
        primaryColor={product.primaryColor}
        secundaryColor={product.secundaryColor}
        sneaker={product.sneaker}
        title={product.title}
        description={product.description}
        price={product.price}
        discount={product.discount}
      />

      <ImageDialog image={product.image} />
    </section>
  )
}