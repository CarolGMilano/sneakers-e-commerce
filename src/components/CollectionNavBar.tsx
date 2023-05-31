import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";

import { RootState } from "@/redux/store";
import { closeMenu } from "@/redux/reducers/menu";
import { IProduct } from "@/redux/reducers/products";

interface ICollectionNavBar {
  title: string, 
  numberCollection: number
}

export default function CollectionNavBar ({ title, numberCollection }: ICollectionNavBar) {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const collection: IProduct[] = useSelector((state: RootState) => Object.values(state.products)[numberCollection]);

  return (
    <ul className="flex flex-col gap-1">
      <h3 className="font-bold pb-3 lg:text-base">{title}</h3>
      {collection.map(item => (
        <li 
          key={item.sneaker}
          className={`relative before:hidden before:w-2 before:h-5 before:-left-4 before:absolute before:bg-indigo-300 hover:before:inline-block ${pathname == `/${item.collection}/${item.sneaker}` ? "lg:before:inline-block" : "before:hidden"}`}>
          <Link 
            href={`/${item.collection}/${item.sneaker}`} 
            className="lg:text-base lg:text-[--darkGrayishBlue] lg:uppercase"
            onClick={() => dispatch(closeMenu())}
          >{item.sneaker.toLocaleUpperCase()}</Link>
        </li>
      ))}
    </ul>
  )
}