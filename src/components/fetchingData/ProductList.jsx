"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 466, min: 0 },
    items: 2,
  },
};

export default function ProductList({apiPath, title }) {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    async function getBlendersData() {
      try {
        const response = await fetch(apiPath);
        if (!response.ok) {
          throw new Error(`Failed to fetch data ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }

    getBlendersData();
  }, [apiPath]);

  if (!products) return <p>Loading...</p>;

  return (
    <div>
    
      <section>
        <aside >
         <Link href="/testing-page" className="hover:underline hover:text-blue-500">
            <h1>Testing Page</h1>
         </Link>
        <div className="w-full h-10 bg-blue-400 flex justify-start items-center rounded-tr-lg rounded-tl-lg mt-10">
            <p className="font-semibold pl-5">{title}</p>
        </div>
                <Carousel
                  responsive={responsive}
                  draggable={true}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  dotListClass="custom-dot-list-style"
                >
                  {products &&
                    products.map((product, index) => (
                  <Link key={index} href={`/blenders/${product.id}`}>
                  <div className="h-[15.75em] bg-white p-3">
                        <div className="w-full">
                              <Image
                                width={100}
                                height={100}
                                className="object-cover rounded-md"
                                src={product.image}
                                alt={product.nameOfProducts}
                                sizes="100vw"
                                style={{
                                  objectFit: 'cover',
                                  height: '10.75em',
                                  width: '100%'
                                }}
                              />
                        </div>
                        <div>
                            <h2 className="text-[0.875em] text-neutral-950">{product.nameOfProducts}</h2>
                            <p className="font-bold text-[0.9375em] text-neutral-950">₦ {new Intl.NumberFormat('en-NG').format(parseFloat(product.newPrice))}</p>
                            <p className="text-[0.775em] text-neutral-700 line-through decoration-neutral-700">₦ {new Intl.NumberFormat('en-NG').format(parseFloat(product.newPrice / product.oldPrice))}</p>
                      </div>
                  </div>
                    </Link>
                    ))}
                </Carousel>
        </aside>
      </section>
    </div>
  );
}
