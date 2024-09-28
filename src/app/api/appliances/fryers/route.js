import { NextResponse } from "next/server"

const fryers = [
    {
      nameOfProducts:
        "Non-Stick Deep Fryer 3 In 1+6pcs Cooking Spoon+key Holder",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/054317/1.jpg?1796",
      newPrice: 16999,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 34,
      lengthOfdata: 1,
      rates: 56,
      brands: "Holder",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/054317/2.jpg?1796",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/054317/3.jpg?1796",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/054317/3.jpg?1796",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/054317/1.jpg?1796",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Sample Store",
          model: "SMW-12df4",
          productionCountry: "Finland",
          sizes: "15x20x25",
          color: "Orange, black",
          mainMaterial: "still and Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Crown Star 3.5L Stainless Electric Deep Fryer",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/538293/1.jpg?5153",
      newPrice: 59999,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 24,
      lengthOfdata: 2,
      rates: 67,
      brands: "Crown Star",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/538293/1.jpg?5153",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/538293/1.jpg?5153",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/538293/1.jpg?5153",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/538293/1.jpg?5153",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Chri store",
          model: "N/A",
          productionCountry: "USA",
          sizes: "15x20x25",
          color: "silver",
          mainMaterial: "steel",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Portable Premium Deep Fryer",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/708012/1.jpg?4211",
      newPrice: 15000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 34,
      lengthOfdata: 3,
      rates: 21,
      brands: "Suresonic",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/708012/1.jpg?4211",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/708012/1.jpg?4211",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/708012/1.jpg?4211",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/708012/1.jpg?4211",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Alex Store",
          model: "SMW-12FR34",
          productionCountry: "USA",
          sizes: "15x20x25",
          color: "Black",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Solid Large Wok FryPan",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/9431811/1.jpg?8841",
      newPrice: 19000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 42,
      lengthOfdata: 4,
      rates: 21,
      brands: "Solid",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/8490592/2.jpg?1964",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/9431811/1.jpg?8841",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/8490592/2.jpg?1964",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/9431811/1.jpg?8841",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Sample Store",
          model: "SMW-12FR34",
          productionCountry: "USA",
          sizes: "15x20x25",
          color: "Red Steel",
          mainMaterial: "still and Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Manual Deep Fryer + Whistling Kettle + Fry Pans",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/962083/1.jpg?9846",
      newPrice: 32800,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 42,
      lengthOfdata: 5,
      rates: 21,
      brands: "Solid",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/962083/1.jpg?9846",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/962083/1.jpg?9846",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/962083/1.jpg?9846",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/962083/1.jpg?9846",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Sample Store",
          model: "SMW-12FR34",
          productionCountry: "USA",
          sizes: "15x20x25",
          color: "Red Steel",
          mainMaterial: "still and Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts:
        "Russell Hobbs Original Food Collections 2.5 Litres Deep Frye",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/6877722/1.jpg?2483",
      newPrice: 34000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 42,
      lengthOfdata: 6,
      rates: 41,
      brands: "Russell Hobbs",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/6877722/1.jpg?2483",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/6877722/2.jpg?2483",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/6877722/3.jpg?2483",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/6877722/1.jpg?2483",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "BaHD GaNG Stores",
          model: "Food collection X12",
          productionCountry: "USA",
          sizes: "15x20x25",
          color: "Black",
          mainMaterial: "copper coil",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Master Chef Stainless Steel Electric Deep Fryer",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/801754/1.jpg?6697",
      newPrice: 39500,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 38,
      lengthOfdata: 7,
      rates: 51,
      brands: "Russell Hobbs",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/801754/2.jpg?6697",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/801754/1.jpg?6697",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/801754/2.jpg?6697",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/801754/1.jpg?6697",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "BaHD GaNG Stores",
          model: "Food collection X12",
          productionCountry: "Canada",
          sizes: "15x20x25",
          color: "Black White",
          mainMaterial: "copper coil",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Moulinex 2.2 LItres Super Uno Deep Fryer (AM310028)",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/9956622/1.jpg?2110",
      newPrice: 82500,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 38,
      lengthOfdata: 8,
      rates: 74,
      brands: "Moulinex",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/9956622/2.jpg?2900",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/9956622/3.jpg?2900",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/9956622/4.jpg?2900",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/9956622/5.jpg?2900",
        },
      ],
      specifications: [
        {
          sku: "MO881HA3SC66MNAFAMZ",
          productLine: "QUAANTUM",
          model: "AM310028",
          productionCountry: "China",
          sizes: "41.6 x 31.2 x 30.7 (cm)",
          color: "White",
          mainMaterial: "copper coil",
          shopType: "Kick Mall",
        },
      ],
    },
  ]

export async function GET(){
    return NextResponse.json(fryers)
}