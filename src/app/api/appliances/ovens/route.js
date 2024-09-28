import { NextResponse } from "next/server";

const ovens = [
    {
      nameOfProducts: "Century ELECTRIC OVEN 37 LITRES",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/982126/1.jpg?2678",
      newPrice: 78000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 83,
      lengthOfdata: 1,
      rates: 26,
      brands: "Century",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/982126/2.jpg?2678",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/982126/3.jpg?2678",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/982126/4.jpg?2678",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/982126/5.jpg?2678",
        },
      ],
      specifications: [
        {
          sku: "CE125HL169E5QNAFAMZ",
          productLine: "Mummy's Choices store",
          model: "COV-8320- C",
          productionCountry: "USA",
          sizes: "15x20x25",
          color: "White",
          mainMaterial: "Black",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Wolfgang Pressure Oven Rotisserie 29-Litres",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/456247/1.jpg?0045",
      newPrice: 115000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 75,
      lengthOfdata: 2,
      rates: 55,
      brands: "Wolfgang",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/456247/2.jpg?0045",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/456247/3.jpg?0045",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/456247/4.jpg?0045",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/456247/5.jpg?0045",
        },
      ],
      specifications: [
        {
          sku: "WO800HA02NIGNNAFAMZ",
          productLine: "uk kitchen",
          model: "BROR1000-A4",
          productionCountry: "Japan",
          sizes: "600 x 470 x 415",
          color: "stainless",
          mainMaterial: "stainless steel",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Qasa Electric Oven Toaster-19L",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/424976/1.jpg?1565",
      newPrice: 80999,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 35,
      lengthOfdata: 3,
      rates: 53,
      brands: "Qasa",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/424976/1.jpg?1565",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/424976/1.jpg?1565",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/424976/1.jpg?1565",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/424976/1.jpg?1565",
        },
      ],
      specifications: [
        {
          sku: "QA791HL11RF0WNAFAMZ",
          productLine: "Armond",
          model: "19L",
          productionCountry: "Taiwan",
          sizes: "600 x 470 x 415",
          color: "white",
          mainMaterial: "steel",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Master Chef Toaster / Sandwich Maker",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/484122/1.jpg?4648",
      newPrice: 13700,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 62,
      lengthOfdata: 4,
      rates: 42,
      brands: "Master",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/424976/1.jpg?1565",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/424976/1.jpg?1565",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/424976/1.jpg?1565",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/424976/1.jpg?1565",
        },
      ],
      specifications: [
        {
          sku: "QA791HL11RF0WNAFAMZ",
          productLine: "Armond",
          model: "19L",
          productionCountry: "Taiwan",
          sizes: "600 x 470 x 415",
          color: "Black",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts:
        "Salter 11L Aerocook Pro XL Digital Air Fryer With Rotisserie",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/2049641/1.jpg?4862",
      newPrice: 230000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 79,
      lengthOfdata: 5,
      rates: 72,
      brands: "Salter",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/2049641/2.jpg?4862",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/2049641/3.jpg?4862",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/2049641/4.jpg?4862",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/2049641/5.jpg?4862",
        },
      ],
      specifications: [
        {
          sku: "SA947HA2YOZFONAFAMZ",
          productLine: "EU MART",
          model: "EK3662",
          productionCountry: "Taiwan",
          sizes: "600 x 470 x 415",
          color: "United Kingdom",
          mainMaterial: "Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Cookworks Excellent 15L Digital Halogen Oven",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/676145/1.jpg?1391",
      newPrice: 54000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 34,
      lengthOfdata: 6,
      rates: 12,
      brands: "Cookworks",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/676145/2.jpg?1391",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/676145/3.jpg?1391",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/676145/4.jpg?1391",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/676145/5.jpg?1391",
        },
      ],
      specifications: [
        {
          sku: "CO106HL1KD8KXNAFAMZ",
          productLine: "Purity Success",
          model: "EK3662",
          productionCountry: "United Kingdom",
          sizes: "600 x 470 x 415",
          color: "white",
          mainMaterial: "Glass, Plastic",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts: "Russell Hobbs Worcester 4 Slice Toaster",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/463356/1.jpg?7837",
      newPrice: 45000,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 34,
      lengthOfdata: 7,
      rates: 92,
      brands: "Russell Hobbs",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/463356/1.jpg?7837",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/463356/2.jpg?7837",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/463356/3.jpg?7837",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/463356/1.jpg?7837",
        },
      ],
      specifications: [
        {
          sku: "RU937HA0PA4XONAFAMZ",
          productLine: "Uk Kitchen",
          model: "22406",
          productionCountry: "Taiwan",
          sizes: "600 x 470 x 415",
          color: "United Kingdom",
          mainMaterial: "stainless steel",
          shopType: "Kick Mall",
        },
      ],
    },

    {
      nameOfProducts:
        "17L Multifunctional Convectional Airfryer Halogen Oven-Glass",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/6806263/1.jpg?9572",
      newPrice: 52500,
      oldPrice: 0.3,
      numberOfItems: 12.6,
      percent: 67,
      lengthOfdata: 8,
      rates: 42,
      brands: "17L",
      displayImages: [
        {
          imageOne:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/6806263/1.jpg?9572",
          imageTwo:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/6806263/2.jpg?9572",
          imageThree:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/6806263/2.jpg?9572",
          imageFour:
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/6806263/1.jpg?9572",
        },
      ],
      specifications: [
        {
          sku: "RU937HA0PA4XONAFAMZ",
          productLine: "Uk Kitchen",
          model: "22406",
          productionCountry: "Taiwan",
          sizes: "600 x 470 x 415",
          color: "United Kingdom",
          mainMaterial: "stainless steel",
          shopType: "Kick Mall",
        },
      ]
    }
]

export async function GET() {
    return NextResponse.json(ovens)
}