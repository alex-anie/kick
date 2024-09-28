import { NextResponse } from "next/server";

const washingMachine = [
    {
      nameOfProducts:
        "5kg Top Load Twin Tub Washing Machine (WM503-WSPA) With One Year Warranty",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/391977/1.jpg?9530",
      newPrice: 1500,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 50,
      lengthOfdata: 1,
      rates: 70,
      brands: "Hisense",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/391977/2.jpg?9530",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/391977/3.jpg?9522",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/391977/4.jpg?9522",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/391977/5.jpg?9522",
        },
      ],
      specifications: [
        {
          sku: "HI368HA0FPO6HNAFAMZ",
          productLine: "XCX Store",
          model: "WSPA503",
          productionCountry: "USA",
          sizes: "15x20x25",
          color: "White and Cyan",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "8kg Top Loader Automatic Washing Machine (Wash&Spin)",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/673875/1.jpg?1181",
      newPrice: 1500,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 67,
      lengthOfdata: 2,
      rates: 42,
      brands: "Hisense",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/673875/2.jpg?1181",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/673875/3.jpg?1181",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/673875/4.jpg?1313",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/673875/5.jpg?1313",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Globaltech Electronics",
          model: "SMW-DFC",
          productionCountry: "France",
          sizes: "15x20x25",
          color: "White and Gray",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts:
        "7kg Twin Tub Semi-automatic Washing Machine (WMS-7/MH)",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/586144/1.jpg?6389",
      newPrice: 194570,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 34,
      lengthOfdata: 3,
      rates: 32,
      brands: "Skyrun",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/586144/1.jpg?6389",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/586144/2.jpg?6389",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/586144/3.jpg?6389",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/586144/1.jpg?6389",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Skyrun Official Store-Sea-COD",
          model: "WMS-7/MH",
          productionCountry: "France",
          sizes: "15x20x25",
          color: "GREY &WHITE",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Bruhm Powerful Mini Wash And Dehydrate Machine",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/1.jpg?1465",
      newPrice: 99000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 25,
      lengthOfdata: 4,
      rates: 23,
      brands: "Bruhm",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/2.jpg?1465",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/3.jpg?1465",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/4.jpg?1465",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/5.jpg?1465",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Gubabi",
          model: "WMS-7/MH",
          productionCountry: "China, Egypt",
          sizes: "15x20x25",
          color: "White and blue",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Bruhm Powerful Mini Wash And Dehydrate Machine",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/1.jpg?1465",
      newPrice: 99000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 25,
      lengthOfdata: 4,
      rates: 23,
      brands: "Bruhm",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/2.jpg?1465",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/3.jpg?1465",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/4.jpg?1465",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/7975592/5.jpg?1465",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Gubabi",
          model: "WMS-7/MH",
          productionCountry: "China, Egypt",
          sizes: "15x20x25",
          color: "White and blue",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "8L Portable Folding Turbine Washing Machine - Purple",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/0852603/1.jpg?5088",
      newPrice: 29860,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 55,
      lengthOfdata: 5,
      rates: 41,
      brands: "BL",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/0852603/2.jpg?5088",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/0852603/3.jpg?5088",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/0852603/4.jpg?5088",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/0852603/5.jpg?5088",
        },
      ],
      specifications: [
        {
          sku: "HI368HL0HHSJSNAFAMZ",
          productLine: "Lebaiqi Store-COD",
          model: "WMS-7/MH",
          productionCountry: "China",
          sizes: "30*30*22cm",
          color: "Purple",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Foldable Powerful Mini Washing Machine",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/2706443/1.jpg?1043",
      newPrice: 45000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 30,
      lengthOfdata: 6,
      rates: 51,
      brands: "BL",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/2706443/1.jpg?1043",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/2706443/2.jpg?1043",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/2706443/1.jpg?1043",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/2706443/1.jpg?1043",
        },
      ],
      specifications: [
        {
          sku: "GE779HA5UBTDGNAFAMZ",
          productLine: "God is Mighty store",
          model: "WMS-7/MH",
          productionCountry: "China",
          sizes: "30*30*22cm",
          color: "Purple",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Midea 7kg Twin Tub Washing Machine (MT100W70/WG)",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/5982502/1.jpg?9434",
      newPrice: 176698,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 30,
      lengthOfdata: 7,
      rates: 61,
      brands: "Midea",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/5982502/2.jpg?9440",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/6320361/3.jpg?4031",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/6320361/4.jpg?4031",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/6320361/5.jpg?4031",
        },
      ],
      specifications: [
        {
          sku: "GE779HA5UBTDGNAFAMZ",
          productLine: "God is Mighty store",
          model: "WMS-7/MH",
          productionCountry: "China",
          sizes: "30*30*22cm",
          color: "Purple",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Skyrun 6kg Single Tub Washing Machine (WM-6MH)",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/6320361/1.jpg?4031",
      newPrice: 4500,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 30,
      lengthOfdata: 8,
      rates: 61,
      brands: "Skyrun",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/130536/1.jpg?7910",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/130536/2.jpg?7910",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/130536/3.jpg?7910",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/130536/4.jpg?7910",
        },
      ],
      specifications: [
        {
          sku: "GE779HA5UBTDGNAFAMZ",
          productLine: "God is Mighty store",
          model: "WMS-7/MH",
          productionCountry: "China",
          sizes: "46*44.5*83",
          color: "GREY & WHITE",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },
  ]

  export async function GET(){
    return NextResponse.json(washingMachine)
  }