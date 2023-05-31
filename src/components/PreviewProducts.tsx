import Image from "next/image";

import { useRouter } from "next/navigation";

import { IProduct } from "@/redux/reducers/products";

interface IPreviewProducts {
  products: IProduct[],
  collection: string
  title: string
}

export default function PreviewProducts ({ products, collection, title }: IPreviewProducts) {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-6 px-3 py-8 lg:w-[1024px] lg:pt-[80px]">
      <h1 className="pb-2 uppercase border-solid border-slate-500 border-b-[1px] lg:text-lg">{title}</h1>

      <div className="flex flex-wrap justify-between gap-y-5 pb-6">
        {products.map(item => (
          <div 
            className="flex flex-col w-[45%] justify-center items-center text-center lg:w-[23%] lg:hover:outline lg:hover:outline-[1px] lg:hover:outline-slate-500 lg:hover:rounded-md lg:hover:cursor-pointer lg:p-2" 
            key={item.sneaker} 
            onClick={() => router.push(`/${collection}/${item.sneaker}`)}>
            <Image 
              className="rounded-xl"
              src={item.image} 
              alt=""  />

            <h2 className="p-2 text-sm">{item.title}</h2>
            
            <span 
              className="font-bold p-1 rounded-lg bg-grad" 
              style={
                { background: 
                    `${ item.sneaker === "airMax" ||
                        item.sneaker === "vibrant" ||
                        item.sneaker === "pastelHarmony" ||
                        item.sneaker === "wideLace"
                          ? `linear-gradient(to right, rgba(${item.primaryColor}, .5), rgba(${item.secundaryColor}, .5))` 
                          : `rgba(${item.secundaryColor}, .3)`}` 
                }}>
                  ${(item.price - ((item.price * item.discount) / 100)).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}