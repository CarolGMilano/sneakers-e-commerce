import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { StaticImageData } from 'next/image';

import sneakerSpring from "../../../public/images/sneaker-spring.jpg";
import sneakerSummer from "../../../public/images/sneaker-summer.jpg";
import sneakerAutumn from "../../../public/images/sneaker-autumn.jpg";
import sneakerWinter from "../../../public/images/sneaker-winter.jpg";

import sneakerSport1 from "../../../public/images/sneaker-sport-1.png";
import sneakerSport2 from "../../../public/images/sneaker-sport-2.png";
import sneakerSport3 from "../../../public/images/sneaker-sport-3.png";
import sneakerSport4 from "../../../public/images/sneaker-sport-4.png";

export interface IProduct {
  id: number,
  collection: string,
  sneaker: string,
  title: string,
  image: StaticImageData,
  primaryColor: string,
  secundaryColor: string
  description: string,
  discount: number,
  price: number,
  amount: number,
  inTheCart: boolean
}

interface IProducts {
  seasons: IProduct[],
  sports: IProduct[]
}

const initialState: IProducts = {
  seasons: [
    {
      id: 0,
      collection: "seasons",
      sneaker: "spring",
      title: "Spring Limited Edition Sneakers",
      image: sneakerSpring,
      primaryColor: "119, 187, 154",
      secundaryColor: "119, 187, 154",
      description: "Experience the revitalizing essence of spring with our Meadow Green sneakers. Symbolizing lush greenery and renewal, their breathable mesh construction ensures cool comfort. The flexible rubber sole offers excellent traction, while moisture-wicking lining keeps feet dry for enjoyable springtime adventures.",
      discount: 35,
      price: 280,
      amount: 0,
      inTheCart: false
    },
    {
      id: 0,
      collection: "seasons",
      sneaker: "summer",
      title: "Summer Limited Edition Sneakers",
      image: sneakerSummer,
      primaryColor: "231, 177, 10",
      secundaryColor: "231, 176, 10",
      description: "Introducing our vibrant Summer Sneaker in sunny yellow! Step into the season with this stylish and comfortable footwear that embodies the essence of summer. Crafted with breathable materials and a cushioned sole, it ensures all-day comfort, whether you're strolling along the beach or exploring the city. The bright yellow color adds a cheerful touch to your outfit and perfectly complements the warm and sunny days ahead. Embrace the spirit of summer with our must-have Summer Sneaker in yellow and make every step a fashion statement.",
      discount: 20,
      price: 265,
      amount: 0,
      inTheCart: false
    },
    {
      id: 0,
      collection: "seasons",
      sneaker: "autumn",
      title: "Autumn Limited Edition Sneakers",
      image: sneakerAutumn,
      primaryColor: "227, 139, 41",
      secundaryColor: "227, 140, 41",
      description: "Immerse yourself in the beauty of fall with our Autumn Glow sneakers. Crafted with the finest premium suede, these sneakers feature a rustic red color that captures the essence of the season. The soft fabric lining provides ultimate comfort, while the durable rubber sole ensures long-lasting wear. These sneakers are perfect for casual walks, outdoor adventures, and adding a touch of autumn charm to your outfits.",
      discount: 50,
      price: 330,
      amount: 0,
      inTheCart: false
    },
    {
      id: 0,
      collection: "seasons",
      sneaker: "winter",
      title: "Winter Limited Edition Sneakers",
      image: sneakerWinter,
      primaryColor: "108, 155, 207",
      secundaryColor: "108, 154, 207",
      description: "Step into the winter wonderland with our Blue Winter Sneaker. Designed to brave the cold, this stylish sneaker features a cozy faux-fur lining and a waterproof exterior, keeping your feet warm and dry. With its sleek design and icy blue hue, it's the perfect companion for all your winter adventures. Stay fashionable and comfortable this season with our Blue Winter Sneaker.",
      discount: 10,
      price: 300,
      amount: 0,
      inTheCart: false
    }
  ],
  sports: [
    {
      id: 1,
      collection: "sports",
      sneaker: "airMax",
      title: "Air Max Rainbow Athletics",
      image: sneakerSport1,
      primaryColor: "109, 183, 191",
      secundaryColor: "203, 182, 228",
      description: "The 'Air Max Rainbow Athletics' is a colorful and sporty sneaker that combines style and performance. With its vibrant rainbow-inspired design, this shoe adds a playful touch to your athletic wardrobe. It features Air Max technology for exceptional cushioning and support. Made with high-quality materials, it offers durability and breathability. The sleek silhouette enhances its overall appeal. Whether you're hitting the gym or adding a pop of color to your outfit, this sneaker is sure to make a statement. Step into a world of style and performance with the 'Air Max Rainbow Athletics'",
      discount: 12,
      price: 350,
      amount: 0,
      inTheCart: false
    },
    {
      id: 1,
      collection: "sports",
      sneaker: "vibrant",
      title: "Vibrant Rainbow Athletics",
      image: sneakerSport2,
      primaryColor: "132, 110, 178",
      secundaryColor: "255, 173, 134",
      description: "The 'Vibrant Rainbow Athletics' is an athletic sneaker that bursts with lively and vibrant colors. Designed for those who crave a bold and energetic look, this shoe is the perfect companion for your active lifestyle. With its dynamic color palette, it adds a pop of excitement and personality to any outfit. Engineered with sporty features, it offers excellent support, comfort, and durability. The lightweight construction ensures unrestricted movement, while the cushioned sole absorbs impact for a smooth and responsive stride. Get ready to stand out from the crowd and unleash your vibrant energy with the 'Vibrant Rainbow Athletics' sneaker!",
      discount: 18,
      price: 285,
      amount: 0,
      inTheCart: false
    },
    {
      id: 1,
      collection: "sports",
      sneaker: "pastelHarmony",
      title: "Pastel Harmony Rainbow Athletics",
      image: sneakerSport3,
      primaryColor: "103, 161, 178",
      secundaryColor: "223, 232, 243",
      description: "The 'Pastel Harmony Rainbow Athletics' is a sporty sneaker that combines the charm of pastel colors with a touch of pristine white. This shoe is a harmonious blend of elegance and athleticism, making it the perfect choice for those who appreciate a softer, more delicate aesthetic. The pastel hues create a soothing and calming visual experience, while the white accents provide a clean and fresh look. With its athletic design and performance-driven features, this sneaker offers both style and functionality. The cushioned sole ensures optimal comfort, while the breathable materials keep your feet cool and dry during your workouts. Step into the world of tranquility and style with the 'Pastel Harmony Rainbow Athletics' sneaker.",
      discount: 16,
      price: 265,
      amount: 0,
      inTheCart: false
    },
    {
      id: 1,
      collection: "sports",
      sneaker: "wideLace",
      title: "Wide Lace Rainbow Athletics",
      image: sneakerSport4,
      primaryColor: "151, 212, 230",
      secundaryColor: "241, 199, 89",
      description: "The 'Wide Lace Rainbow Athletics' is a sporty sneaker that effortlessly combines vibrant pastel colors with a unique feature: wide laces. With its eye-catching design, this shoe not only stands out but also provides a comfortable and secure fit. The wide laces add a touch of style and allow for easy adjustments, ensuring that the sneaker stays snugly on your feet during any athletic activity. The pastel color palette exudes a sense of playfulness and versatility, making it a versatile choice for both casual wear and sports. The ergonomic sole offers excellent support and cushioning, reducing impact and providing enhanced comfort during workouts or daily activities. Step into a world of style, comfort, and functionality with the 'Wide Lace Rainbow Athletics' sneaker.",
      discount: 10,
      price: 390,
      amount: 0,
      inTheCart: false
    },
  ]
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    isInTheCart: (state, action: PayloadAction<{ numberCollection: number, sneaker: string }>) => {
      const { numberCollection, sneaker } = action.payload;
      const currentCollection = Object.values(state)[numberCollection];
      const product = currentCollection.filter(item => item.sneaker === sneaker)[0];

        if(product.amount != 0) { 
          product.inTheCart = true;
        } 
    },
    isNotInTheCart: (state, action: PayloadAction<{ numberCollection: number, sneaker: string }>) => { 
      const { numberCollection, sneaker } = action.payload;
      const currentCollection = Object.values(state)[numberCollection];
      const product = currentCollection.filter(item => item.sneaker === sneaker)[0];
      
        product.inTheCart = false;
        product.amount = 0;
    },
    increaseAmount: (state, action: PayloadAction<{ numberCollection: number, sneaker: string }>) => { 
      const { numberCollection, sneaker } = action.payload;
      const currentCollection = Object.values(state)[numberCollection];
      const product = currentCollection.filter(item => item.sneaker === sneaker)[0];

        product.amount++; 
    }, 
    decreaseAmount: (state, action: PayloadAction<{ numberCollection: number, sneaker: string }>) => { 
      const { numberCollection, sneaker } = action.payload;
      const currentCollection = Object.values(state)[numberCollection];
      const product = currentCollection.filter(item => item.sneaker === sneaker)[0];

        if(product.amount < 1) {
          return; 
        } 

        product.amount--; 
    }
  }
})

export const { isInTheCart, isNotInTheCart, increaseAmount, decreaseAmount } = productsSlice.actions;
export default productsSlice.reducer;