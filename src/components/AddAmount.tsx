import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { increaseAmount, decreaseAmount, isNotInTheCart, IProduct } from "@/redux/reducers/products";

interface IAddAmount {
  sneaker: string,
  color: string,
  collection: number
}

export default function AddAmount ({ sneaker, color, collection }: IAddAmount) {
  const dispatch = useDispatch();
  const currentCollection = useSelector((state: RootState) => Object.values(state.products)[collection]);
  const product = currentCollection.filter((item: IProduct) => item.sneaker === sneaker)[0];

  return (
    <div className="bg-[--beigeAmount] p-3 rounded-lg flex justify-between items-center lg:w-[150px]">
      <button 
        onClick={() => {
          product.amount == 1 
            ? dispatch(isNotInTheCart({ numberCollection: collection, sneaker: sneaker })) 
            : dispatch(decreaseAmount({ numberCollection: collection, sneaker: sneaker }))
        }}
        className="px-3 text-2xl font-bold lg:hover:bg-[--beige] lg:hover:rounded-lg"
        style={{ color: `rgb(${color})` }}
      >
        -
      </button>

      <span className="text-xl">{product.amount}</span>

      <button 
        onClick={() => dispatch(increaseAmount({ numberCollection: collection, sneaker: sneaker }))}
        className="px-3 text-2xl font-bold lg:hover:bg-[--beige] lg:hover:rounded-lg"
        style={{ color: `rgb(${color})` }}
      >
        +
      </button>
    </div>
  )
}