import { useDispatch, useSelector } from "react-redux"
import { increaseAmount, decreaseAmount, isNotInTheCart } from "@/redux/reducers/seasons"
import { RootState } from "@/redux/store"

interface IAddAmount {
  sneaker: string,
  color: string
}

export default function AddAmount ({ sneaker, color }: IAddAmount) {
  const product = useSelector((state: RootState) => state.sneakers.filter(item => item.sneaker === sneaker)[0]);
  const dispatch = useDispatch();

  return (
    <div className="bg-[--beigeAmount] p-3 rounded-lg flex justify-between items-center lg:w-[150px]">
      <button 
        onClick={() => {product.amount == 1 ? dispatch(isNotInTheCart(sneaker)) : dispatch(decreaseAmount(sneaker))}}
        className="px-3 text-2xl font-bold lg:hover:bg-[--beige] lg:hover:rounded-lg"
        style={{ color: `#${color}` }}
      >
        -
      </button>

      <span className="text-xl">{product.amount}</span>

      <button 
        onClick={() => dispatch(increaseAmount(sneaker))}
        className="px-3 text-2xl font-bold lg:hover:bg-[--beige] lg:hover:rounded-lg"
        style={{ color: `#${color}` }}
      >
        +
      </button>
    </div>
  )
}