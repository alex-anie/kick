import Image from "next/image";
import pickupBanner from "@/images/pickup-banner.png";
import SearchIcon from "@/components/svg-icons/SearchIcon";
import MapSearch from "@/components/google-map-api/MapSearch";

export default function PickupStation() {
  return (
    <main className="w-[90%] mx-auto pt-[8em] lg:pt-[4em]">
       <section className="w-full p-2 bg-white rounded-md my-4">
            <Image src={pickupBanner} style={{objectFit:'cover'}} alt="pickup station" className="rounded-md" height="252" width="100%"/>
       </section>

       <section className="bg-white rounded-md p-4 ">
        <article className="flex flex-col gap-2">
            <p className="text-[0.65em]">Delivery time starts from the day you place your order to when you receive the first SMS to pick up your order from our pickup station. Ensure you pickup your item within 5 days, otherwise it will be cancelled.</p>
            <p className="text-[0.65em]">Advantages of picking up your items at the pickup stations include</p>

            <ol className="text-[0.65em] list-decimal indent-4 list-inside">
                <li>Cheaper shipping fee when you order to a pickup station</li>
                <li>It allows customers adequately schedule your pickup at your convenience within the provided terms and conditions.</li>
                <li>No case of delayed delivery from dispatcher / rider</li>
            </ol>

            <p className="text-[0.65em]">The only limitation on pickup stations is the weight and size limit of the item that can be shipped to the station.</p>
            <p className="text-[0.65em]">At Jumia we ensure customer safety at our pickup station as:</p>
            <ol className="text-[0.65em] list-decimal indent-4 list-inside">
                <li>We follow contactless pickup procedures for all order pickups</li>
                <li>We ensure no direct contact between you and the Jumia team members</li>
                <li>When you arrive the store, you will receive specific pickup instructions</li>
            </ol>
        </article>
       </section>

       <section>
        <article className="grid grid-cols-7 gap-4 mt-4">
            {/* <aside className="col-span-2 w-full">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <SearchIcon  width={18} height={18}/>
                    </span>
                    <input type="search" name="search" placeholder="Search for station by name, location or landmark" className="placeholder:text-neutral-700 block bg-white w-full border border-neutral-800 rounded-md py-2 pl-8 pr-1 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 sm:text-[0.65em]"/>
                </label>
            </aside>
            <aside className="col-span-5">
                <h1 className="uppercase font-bold text-[0.875em]">Find the station close to you</h1>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d40954177.217985526!2d-121.9883!3d51.2072!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1727426501776!5m2!1sen!2sng" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </aside> */}
            <MapSearch />
        </article>
       </section>

    </main>
  )
}
