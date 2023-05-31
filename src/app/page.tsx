"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import Banner from "@/components/Banner";
import PreviewProducts from "@/components/PreviewProducts";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  const products = useSelector((state: RootState) => state.products);

  return (
    <>
      <Banner />

      <PreviewProducts
        products={products.seasons}
        collection="seasons"
        title="New collection" />
        
      <PreviewProducts 
        products={products.sports}
        collection="sports"
        title="Sport Collection" /> 

      <NewsLetter />
    </>
  )
}
