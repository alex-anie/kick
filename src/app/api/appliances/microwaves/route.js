import { NextResponse } from "next/server";

const microwaves = [
    {
      nameOfProducts:
        "Hisense 20 Litres (H20MOWS10) Microwave - White With 1 Year Warranty",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/383624/1.jpg?9095",
      newPrice: 15000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 33,
      lengthOfdata: 1,
      rates: 21,
      brands: "Hisense",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/383624/3.jpg?9085",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/383624/4.jpg?9085",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/383624/5.jpg?9085",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/383624/6.jpg?9085",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Sample Store",
          model: "SMW-1234",
          productionCountry: "USA",
          sizes: "15x20x25",
          color: "White",
          mainMaterial: "still and Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts:
        "Microwave, Griller, Coffee Maker, 3 In 1 Breakfast Maker",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/2461121/3.jpg?4531",
      newPrice: 2300,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 45,
      lengthOfdata: 2,
      rates: 21,
      brands: "Griller",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/9438501/1.jpg?3355",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/2461121/1.jpg?4531",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/2461121/2.jpg?4531",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/2461121/3.jpg?4531",
        },
      ],
      specifications: [
        {
          sku: "GE779HA38U8GWNAFAMZ",
          productLine: "ROYAL GOLD",
          model: "3P0-1234",
          productionCountry: "USA",
          sizes: "15x20x25",
          color: "black",
          mainMaterial: "still",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Samsung 23L Digital Microwave Oven With Heat Wave",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/2543102/1.jpg?7962",
      newPrice: 1200,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 86,
      lengthOfdata: 3,
      rates: 45,
      brands: "Samsung",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/2543102/2.jpg?7962",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/2543102/3.jpg?7962",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/2543102/4.jpg?7962",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/2543102/5.jpg?7962",
        },
      ],
      specifications: [
        {
          sku: "SA948HA3ZMX0MNAFAMZ",
          productLine: "Energizer",
          model: "MG23K3575AW/EU",
          productionCountry: "Korea",
          sizes: "34.7 x 48.9 x 27.5",
          color: "black",
          mainMaterial: "Stainless Steel",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Midea 20 Litres Microwave Oven",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/5631552/1.jpg?8738",
      newPrice: 2200,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 24,
      lengthOfdata: 4,
      rates: 5,
      brands: "Binatone",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/5631552/2.jpg?8739",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/544862/1.jpg?1185",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/544862/2.jpg?1129",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/5631552/2.jpg?8739",
        },
      ],
      specifications: [
        {
          sku: "SA948HA3ZMX0MNAFAMZ",
          productLine: "Black Bird",
          model: "EUX4-12",
          productionCountry: "India",
          sizes: "48.9 x 27.5",
          color: "black",
          mainMaterial: "Plastic, Stainless Steel",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "LG 20 Litres (MS 2044) Microwave Oven",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/240863/1.jpg?7571",
      newPrice: 2500,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 54,
      lengthOfdata: 5,
      rates: 80,
      brands: "LG",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/240863/2.jpg?7571",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/240863/3.jpg?7564",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/240863/4.jpg?7564",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/240863/5.jpg?7557",
        },
      ],
      specifications: [
        {
          sku: "LG835HL15TI73NAFAMZ",
          productLine: "Fouani Nigeria",
          model: "MS 2044",
          productionCountry: "India",
          sizes: "455 x 252 x 320",
          color: "black",
          mainMaterial: "Stainless Steel",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts:
        "Hisense 20 Litres (20MOMS10-H) Manual Microwave Oven - Silver",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/4842821/1.jpg?4375",
      newPrice: 3000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 45,
      lengthOfdata: 6,
      rates: 60,
      brands: "Hisense",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/240863/2.jpg?7571",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/4842821/2.jpg?4375",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/240863/4.jpg?7564",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/240863/5.jpg?7557",
        },
      ],
      specifications: [
        {
          sku: "LG835HL15TI73NAFAMZ",
          productLine: "Fouani Nigeria",
          model: "MS 2044",
          productionCountry: "India",
          sizes: "455 x 252 x 320",
          color: "black",
          mainMaterial: "Stainless Steel",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "LG Smart Inverter Microwave 2535",
      image:
        "https://ng.jumia.is/cms/external/pet/LG835HL13KVLSNAFAMZ/f1a0b6e97390be43574edfc36c71b932.jpg",
      newPrice: 4728,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 56,
      lengthOfdata: 7,
      rates: 50,
      brands: "LG",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/479104/1.jpg?0946",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/479104/2.jpg?0946",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/479104/3.jpg?0946",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/479104/1.jpg?0946",
        },
      ],
      specifications: [
        {
          sku: "LG835HL13KVLSNAFAMZ",
          productLine: "Fouani Nigeria",
          model: "FOU",
          productionCountry: "Spain",
          sizes: "455 x 252 x 320",
          color: "black",
          mainMaterial: "Stainless Steel",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "27L Multipurpose Rotisseries Oven With 2 Hot Plates",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/241322/1.jpg?7441",
      newPrice: 1110,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 33,
      lengthOfdata: 8,
      rates: 20,
      brands: "LG",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/241322/2.jpg?9450",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/241322/3.jpg?7441",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/241322/2.jpg?9450",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/241322/2.jpg?9450",
        },
      ],
      specifications: [
        {
          sku: "AM736HL0F10BUNAFAMZ",
          productLine: "Happytime media",
          model: "NA",
          productionCountry: "Spain",
          sizes: "455 x 252 x 320",
          color: "black",
          mainMaterial: "Stainless Steel",
          shopType: "Kick Mall",
        },
      ],
    }
]

export async function GET() {
    return NextResponse.json(microwaves);
}
