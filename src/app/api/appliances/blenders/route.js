import { NextResponse } from "next/server";

const blenders = [
  {
    id: 1,
    nameOfProducts: "Counter Top Blenders",
    image: "https://m.media-amazon.com/images/I/71mBa96btlL._AC_SX679_.jpg",
    newPrice: 12456,
    oldPrice: 0.3,
    numberOfItems: 12.6,
    percent: 60,
    lengthOfdata: 1,
    rates: 23,
    brands: "Braun TriForce",
    brandsWebsite:'https://www.braunhousehold.com/en-us',
    displayImages: [
      {
        imageOne:
          "https://m.media-amazon.com/images/I/71mBa96btlL._AC_SX679_.jpg",
        imageTwo:
          "https://m.media-amazon.com/images/I/71mBa96btlL._AC_SX679_.jpg",
        imageThree:
          "https://m.media-amazon.com/images/I/71mBa96btlL._AC_SX679_.jpg",
        imageFour:
          "https://m.media-amazon.com/images/I/71mBa96btlL._AC_SX679_.jpg",
      },
    ],
    specifications: [
      {
        sku: "GRLSRUSJFIS93740DHF",
        productLine: "Vic Big Store",
        model: "S-GX 2293",
        productionCountry: "China",
        sizes: "3x12x34",
        color: "Transparent",
        mainMaterial: "Transparent Glass",
        shopType: "Kick Mall",
      },
    ],
  },

  {
    id: 2,
    nameOfProducts: "Immersion Blenders (Hand Blenders)",
    image:
      "https://images.pexels.com/photos/5514988/pexels-photo-5514988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: 4000,
    oldPrice: 0.3,
    numberOfItems: 12.6,
    percent: 20,
    lengthOfdata: 2,
    rates: 15,
    brands: "Breville the Fresh & Furious",
    brandsWebsite: 'https://www.breville.com/en-us/product/bbl620',
    displayImages: [
      {
        imageOne:
          "https://images.pexels.com/photos/5514987/pexels-photo-5514987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageTwo:
          "https://images.pexels.com/photos/5514988/pexels-photo-5514988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageThree:
          "https://images.pexels.com/photos/5514987/pexels-photo-5514987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageFour:
          "https://images.pexels.com/photos/5514988/pexels-photo-5514988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    specifications: [
      {
        sku: "DRIWWPF-47583-FHSK",
        productLine: "Uncle Mic Store",
        model: "SEX-15",
        productionCountry: "Mexico",
        sizes: "12x24x17",
        color: "Yellow Transparent",
        mainMaterial: "Glass and Plastic",
        shopType: "Kick Mall",
      },
    ],
  },

  {
    id: 3,
    nameOfProducts: "Personal Blenders",
    image:
      "https://images.pexels.com/photos/6802630/pexels-photo-6802630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: 3500,
    oldPrice: 0.3,
    numberOfItems: 12.6,
    percent: 80,
    lengthOfdata: 3,
    rates: 18,
    brands: "Ninja Blast",
    brandsWebsite: 'https://www.ninjakitchen.com/',
    
    displayImages: [
      {
        imageOne:
          "https://images.pexels.com/photos/6803737/pexels-photo-6803737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageTwo:
          "https://images.pexels.com/photos/6802635/pexels-photo-6802635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageThree:
          "https://images.pexels.com/photos/6802635/pexels-photo-6802635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageFour:
          "https://images.pexels.com/photos/6803737/pexels-photo-6803737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    specifications: [
      {
        sku: "AGSD-EJKD-2382",
        productLine: "Sam Lee",
        model: "MEX-15",
        productionCountry: "Nigeria",
        sizes: "12x14x12",
        color: "Yellow Transparent",
        mainMaterial: "Glass and Plastic",
        shopType: "Kick Mall",
      },
    ],
  },

  {
    id: 4,
    nameOfProducts: "Bullet Blenders",
    image:
      "https://images.pexels.com/photos/8845074/pexels-photo-8845074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: 1500,
    oldPrice: 0.3,
    numberOfItems: 12.6,
    percent: 10,
    lengthOfdata: 4,
    rates: 39,
    brands: "Nutribullet Pro 900",
    brandsWebsite: 'https://www.nutribullet.com/shop/blenders/nutribullet-pro/',
    displayImages: [
      {
        imageOne:
          "https://images.pexels.com/photos/8845077/pexels-photo-8845077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageTwo:
          "https://images.pexels.com/photos/8845101/pexels-photo-8845101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageThree:
          "https://images.pexels.com/photos/8845109/pexels-photo-8845109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageFour:
          "https://images.pexels.com/photos/17890554/pexels-photo-17890554/free-photo-of-hand-pouring-milk-into-blender-with-fruits-and-spinach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    specifications: [
      {
        sku: "AKG-RUDFJ-37492",
        productLine: "Jones Stores",
        model: "WUS-29",
        productionCountry: "Japan",
        sizes: "10x15x78",
        color: "Silver Transparent",
        mainMaterial: "Glass, Aluminum and Plastic",
        shopType: "Kick Mall",
      },
    ],
  },

  {
    id: 5,
    nameOfProducts: "Smoothie Blenders",
    image:
      "https://images.pexels.com/photos/19773941/pexels-photo-19773941/free-photo-of-boy-with-blender-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: 2460,
    oldPrice: 0.3,
    numberOfItems: 12.6,
    percent: 76,
    lengthOfdata: 5,
    rates: 22,
    brands: "KitchenAid K150",
    brandsWebsite:'https://www.kitchenaid.com/',
    displayImages: [
      {
        imageOne:
          "https://images.pexels.com/photos/19773962/pexels-photo-19773962/free-photo-of-son-standing-with-pitcher-and-mother-near-fridge-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageTwo:
          "https://images.pexels.com/photos/19773943/pexels-photo-19773943/free-photo-of-son-and-smiling-mother-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageThree:
          "https://images.pexels.com/photos/19773964/pexels-photo-19773964/free-photo-of-son-and-mother-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageFour:
          "https://images.pexels.com/photos/19773976/pexels-photo-19773976/free-photo-of-mother-standing-with-son-and-pouring-juice-from-blender.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    specifications: [
      {
        sku: "FES-GEX-0e8e0",
        productLine: "Jones Stores",
        model: "WUS-29",
        productionCountry: "Japan",
        sizes: "12x23x14",
        color: "Cream Transparent",
        mainMaterial: "Glass, Aluminum and Plastic",
        shopType: "Kick Mall",
      },
    ],
  },

  {
    id: 6,
    nameOfProducts: "Food Processors with Blending Function",
    image:
      "https://images.pexels.com/photos/7937005/pexels-photo-7937005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: 1230,
    oldPrice: 0.3,
    numberOfItems: 12.6,
    percent: 44,
    lengthOfdata: 6,
    rates: 23,
    brands: "Vitamix A3500 / A3500i.",
    brandsWebsite: 'https://www.kitchenaid.com/',
    displayImages: [
      {
        imageOne:
          "https://images.pexels.com/photos/19773962/pexels-photo-19773962/free-photo-of-son-standing-with-pitcher-and-mother-near-fridge-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageTwo:
          "https://images.pexels.com/photos/19773943/pexels-photo-19773943/free-photo-of-son-and-smiling-mother-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageThree:
          "https://images.pexels.com/photos/19773964/pexels-photo-19773964/free-photo-of-son-and-mother-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageFour:
          "https://images.pexels.com/photos/19773976/pexels-photo-19773976/free-photo-of-mother-standing-with-son-and-pouring-juice-from-blender.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    specifications: [
      {
        sku: "FES-GEX-0e8e0",
        productLine: "Jones Stores",
        model: "WUS-29",
        productionCountry: "Japan",
        sizes: "12x23x14",
        color: "Cream Transparent",
        mainMaterial: "Glass, Aluminum and Plastic",
        shopType: "Kick Mall",
      },
    ],
  },

  {
    id: 7,
    nameOfProducts: "Commercial Blenders",
    image:
      "https://images.pexels.com/photos/7937015/pexels-photo-7937015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    newPrice: 1430,
    oldPrice: 0.3,
    numberOfItems: 12.6,
    percent: 13,
    lengthOfdata: 7,
    rates: 211,
    brands: "Smeg Professional Blender",
    brandsWebsite: 'https://www.smeg.com/us/blenders',
    displayImages: [
      {
        imageOne:
          "https://images.pexels.com/photos/19773962/pexels-photo-19773962/free-photo-of-son-standing-with-pitcher-and-mother-near-fridge-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageTwo:
          "https://images.pexels.com/photos/19773943/pexels-photo-19773943/free-photo-of-son-and-smiling-mother-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageThree:
          "https://images.pexels.com/photos/7937006/pexels-photo-7937006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        imageFour:
          "https://images.pexels.com/photos/7937005/pexels-photo-7937005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    specifications: [
      {
        sku: "AGSY-3849-MANS",
        productLine: "City Kitt",
        model: "XSH-27",
        productionCountry: "UK",
        sizes: "12x23x14",
        color: "Cream Transparent",
        mainMaterial: "Glass, Aluminum and Plastic",
        shopType: "Kick Mall",
      },
    ],
  },

  {
    id: 8,
    nameOfProducts: "Blender/Food Processor Combo",
    image: "https://m.media-amazon.com/images/I/71mBa96btlL._AC_SX679_.jpg",
    newPrice: 3482,
    oldPrice: 0.3,
    numberOfItems: 12.6,
    percent: 71,
    lengthOfdata: 8,
    rates: 11,
    brands: "Breville the Super Q",
    brandsWebsite: 'https://www.breville.com/en-us/product/bbl920',
    displayImages: [
      {
        imageOne:
          "https://m.media-amazon.com/images/I/61tc6KFItIL._AC_SX679_.jpg",

        imageTwo:
          "https://m.media-amazon.com/images/I/71cOB-LwL5L._AC_SX679_.jpg",

        imageThree:
          "https://m.media-amazon.com/images/I/71Vm1kUwpML._AC_SX679_.jpg",

        imageFour:
          "https://m.media-amazon.com/images/I/71Xdqk073nL._AC_SX679_.jpg",
      },
    ],
    specifications: [
      {
        sku: "DD-EUR-2839",
        productLine: "Lake Side Store",
        model: "SH-22",
        productionCountry: "USA",
        sizes: "12x23x14",
        color: "Cream Transparent",
        mainMaterial: "Glass, Aluminum and Plastic",
        shopType: "Kick Mall",
      },
    ],
  },
];

export async function GET(request) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get('id');

  if(id){
    const blender = blenders.find(b => b.id === parseInt(id));
    if(blender){
      return NextResponse.json(blender);
    } else {
      return NextResponse.json({error: "Blender not found"}, {status: 404})
    }
  }
  return NextResponse.json(blenders);
}
