import Price from "../Price";
import AddAmount from "../AddAmount";
import AddProduct from "../AddProduct";

interface IProductInformation {
  collection: number,
  primaryColor: string,
  secundaryColor: string, 
  sneaker: string,
  title: string,
  description: string,
  price: number,
  discount: number
}

export default function ProductInformation ({ collection, primaryColor, secundaryColor, sneaker, title, description, price, discount }: IProductInformation) {
  return (
    <div className="flex flex-col gap-4 p-4 lg:w-[45%] lg:gap-6">
      <span 
        className="uppercase font-semibold text-sm tracking-wider" 
        style={{ color: `rgb(${primaryColor})` }}>Sneaker company</span>
      <h2 className="font-bold text-2xl lg:text-3xl">{title}</h2>
      <p className="text-sm leading-6">{description}</p>
      
      <Price 
        sneaker={sneaker}
        price={price} 
        discount={discount} 
        primaryColor={primaryColor} 
        secundaryColor={secundaryColor} 
      />

      <div className="flex flex-col gap-3 lg:flex-row">
        <AddAmount 
          sneaker={sneaker}
          color={primaryColor}
          collection={collection}
        />

        <AddProduct 
          sneaker={sneaker}  
          primaryColor={primaryColor} 
          secundaryColor={secundaryColor} 
          collection={collection}
        />
      </div>
    </div>
  )
}