import HeroCarousel from "@/components/carousels/HeroCarousel";
import Image from "next/image";
import belt from "@/images/belt.jpg"
import shoe from "@/images/shoe.jpg"
import watch from "@/images/watch.jpg"
import BlenderData from "./blenders/page";


export default function Home() {
  return (
    <main className="w-[90%] mx-auto">
      <section className="pt-[9rem] lg:pt-[5rem]">
        <HeroCarousel />
      </section>

      <section className="grid md:grid-cols-3 gap-5 pt-[5rem]">
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={shoe} alt=""/></div>
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={watch} alt=""/></div>
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={belt} alt=""/></div>
      </section>

      <section>
        <BlenderData />
      </section>

    </main>
  );
}
