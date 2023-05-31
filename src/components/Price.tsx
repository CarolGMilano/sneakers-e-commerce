interface IPrice {
  sneaker: string,
  price: number,
  discount: number,
  primaryColor: string,
  secundaryColor: string
}

export default function Price ({ sneaker, price, discount, primaryColor, secundaryColor }: IPrice) {
  return (
    <div className="flex justify-between lg:flex-col lg:gap-2">
      <div className="flex items-center gap-8">
        <span className="font-bold text-2xl">${(price - ((price * discount) / 100)).toFixed(2)}</span>
        
        <span 
          className="font-bold px-2 rounded-md text-base " 
          style={{ 
            backgroundColor: 
              `${ sneaker === "airMax" ||
                  sneaker === "vibrant" ||
                  sneaker === "pastelHarmony" ||
                  sneaker === "wideLace" ? `rgba(${secundaryColor}, .3) ` : `rgba(${secundaryColor}, .3)`}`, 
            color: `rgb(${primaryColor})`}}>{discount}%</span>
      </div>

      <span className="line-through text-[--black] opacity-40 text-lg font-bold">${price.toFixed(2)}</span>
    </div>
  )
}