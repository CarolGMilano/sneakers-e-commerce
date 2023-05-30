import { createSlice } from "@reduxjs/toolkit";
import type { StaticImageData } from 'next/image';

import sneakerSpring from "../../../public/images/sneaker-spring.jpg";
import sneakerSummer from "../../../public/images/sneaker-summer.jpg";
import sneakerAutumn from "../../../public/images/sneaker-autumn.jpg";
import sneakerWinter from "../../../public/images/sneaker-winter.jpg";

export interface IProduct {
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

const initialState: IProduct[] = [
  {
    sneaker: "spring",
    title: "Spring Limited Edition Sneakers",
    image: sneakerSpring,
    primaryColor: "77BB9A",
    secundaryColor: "rgba(119, 187, 154, 0.3)",
    description: "Experience the revitalizing essence of spring with our Meadow Green sneakers. Symbolizing lush greenery and renewal, their breathable mesh construction ensures cool comfort. The flexible rubber sole offers excellent traction, while moisture-wicking lining keeps feet dry for enjoyable springtime adventures.",
    discount: 35,
    price: 280,
    amount: 0,
    inTheCart: false
  },
  {
    sneaker: "summer",
    title: "Summer Limited Edition Sneakers",
    image: sneakerSummer,
    primaryColor: "E7B10A",
    secundaryColor: "rgba(231, 176, 10, 0.3)",
    description: "Introducing our vibrant Summer Sneaker in sunny yellow! Step into the season with this stylish and comfortable footwear that embodies the essence of summer. Crafted with breathable materials and a cushioned sole, it ensures all-day comfort, whether you're strolling along the beach or exploring the city. The bright yellow color adds a cheerful touch to your outfit and perfectly complements the warm and sunny days ahead. Embrace the spirit of summer with our must-have Summer Sneaker in yellow and make every step a fashion statement.",
    discount: 20,
    price: 265,
    amount: 0,
    inTheCart: false
  },
  {
    sneaker: "autumn",
    title: "Autumn Limited Edition Sneakers",
    image: sneakerAutumn,
    primaryColor: "E38B29",
    secundaryColor: "rgba(227, 140, 41, 0.3)",
    description: "Immerse yourself in the beauty of fall with our Autumn Glow sneakers. Crafted with the finest premium suede, these sneakers feature a rustic red color that captures the essence of the season. The soft fabric lining provides ultimate comfort, while the durable rubber sole ensures long-lasting wear. These sneakers are perfect for casual walks, outdoor adventures, and adding a touch of autumn charm to your outfits.",
    discount: 50,
    price: 330,
    amount: 0,
    inTheCart: false
  },
  {
    sneaker: "winter",
    title: "Winter Limited Edition Sneakers",
    image: sneakerWinter,
    primaryColor: "6C9BCF",
    secundaryColor: "rgba(108, 154, 207, 0.3)",
    description: "Step into the winter wonderland with our Blue Winter Sneaker. Designed to brave the cold, this stylish sneaker features a cozy faux-fur lining and a waterproof exterior, keeping your feet warm and dry. With its sleek design and icy blue hue, it's the perfect companion for all your winter adventures. Stay fashionable and comfortable this season with our Blue Winter Sneaker.",
    discount: 10,
    price: 300,
    amount: 0,
    inTheCart: false
  }
];

const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    isInTheCart: (state, { payload }) => {
      const product = state.filter(item => item.sneaker === payload)[0];

        if(product.amount != 0) { 
          product.inTheCart = true;
        } 
    },
    isNotInTheCart: (state, { payload }) => { 
      const product = state.filter(item => item.sneaker === payload)[0];
      
        product.inTheCart = false;
        product.amount = 0;
    },
    increaseAmount: (state, { payload }) => { 
      const product = state.filter(item => item.sneaker === payload)[0];

        product.amount++; 
    }, 
    decreaseAmount: (state, { payload }) => { 
      const product = state.filter(item => item.sneaker === payload)[0];

        if(product.amount < 1) {
          return; 
        } 

        product.amount--; 
    }
  }
})

export const { isInTheCart, isNotInTheCart, increaseAmount, decreaseAmount } = sneakersSlice.actions;
export default sneakersSlice.reducer;