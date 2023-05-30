"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  const seasons = useSelector((state: RootState) => state.sneakers);
  const router = useRouter();

  return (
    <section className="flex flex-col gap-6 p-3 lg:w-[1024px] lg:pt-[80px]">
      <h1 className="pb-2 uppercase border-solid border-slate-500 border-b-[1px] lg:text-lg">New collection</h1>

      <div className="flex flex-wrap justify-between gap-y-5 border-solid border-slate-500 border-b-[1px] pb-6">
        {seasons.map(item => (
          <div 
            key={item.sneaker} 
            className="flex flex-col w-[45%] justify-center items-center text-center lg:w-[23%] lg:hover:outline lg:hover:outline-[1px] lg:hover:outline-slate-500 lg:hover:rounded-md lg:hover:cursor-pointer lg:p-2" 
            onClick={() => router.push(`/collections/${item.sneaker}`)}>
            <Image src={item.image} alt="" className="rounded-xl" />
            <h2 className="p-2 text-sm">{item.title}</h2>
            <span className="font-bold p-1 rounded-lg" style={{ backgroundColor: `${item.secundaryColor}` }}>${(item.price - ((item.price * item.discount) / 100)).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <NewsLetter />
    </section>
  )
}
