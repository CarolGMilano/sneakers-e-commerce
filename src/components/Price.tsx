interface IPrice {
  price: number,
  discount: number,
  primaryColor: string,
  secundaryColor: string
}

export default function Price ({ price, discount, primaryColor, secundaryColor }: IPrice) {
  return (
    <div className="flex justify-between lg:flex-col lg:gap-2">
      <div className="flex items-center gap-8">
        <span className="font-bold text-2xl">${(price - ((price * discount) / 100)).toFixed(2)}</span>
        <span className="font-bold px-2 rounded-md text-base " style={{ backgroundColor: `${secundaryColor}`, color: `#${primaryColor}`}}>{discount}%</span>
      </div>

      <span className="line-through text-[--black] opacity-40 text-lg font-bold">${price.toFixed(2)}</span>
    </div>
  )
}