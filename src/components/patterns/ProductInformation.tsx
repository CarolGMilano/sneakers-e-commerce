import AddAmount from "../AddAmount";
import AddProduct from "../AddProduct";
import Price from "../Price";

interface IProductInformation {
  primaryColor: string,
  secundaryColor: string, 
  season: string,
  title: string,
  description: string,
  price: number,
  discount: number
}

export default function ProductInformation ({ primaryColor, secundaryColor, season, title, description, price, discount }: IProductInformation) {
  return (
    <div className="flex flex-col gap-4 p-4 lg:w-[45%] lg:gap-6">
        <span className="uppercase font-semibold text-sm tracking-wider" style={{ color: `#${primaryColor}` }}>Sneaker company</span>
        <h2 className="font-bold text-2xl lg:text-3xl">{title}</h2>
        <p className="text-sm leading-6">{description}</p>
        
        <Price 
          price={price} 
          discount={discount} 
          primaryColor={primaryColor} 
          secundaryColor={secundaryColor} 
        />

        <div className="flex flex-col gap-3 lg:flex-row">
          <AddAmount 
            sneaker={season}
            color={primaryColor}
          />

          <AddProduct 
            sneaker={season}  
            color={primaryColor}
          />
        </div>
      </div>
  )
}