"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const AI_PRODUCTS = [
  { id: "orion", name: "ORION", category: "Extrait de Parfum", price: "1,499", image: "/images/flacon_orion.jpg", badge: "SIGNATURE" },
  { id: "noble", name: "NOBLE", category: "Extrait de Parfum", price: "1,499", image: "/images/flacon_noble.jpg", badge: "BESTSELLER" },
  { id: "regal", name: "REGAL", category: "Extrait de Parfum", price: "1,499", image: "/images/flacon_regal.jpg", badge: "NEW" },
  { id: "throne", name: "THRONE", category: "Masterwork Extrait", price: "1,299", image: "/images/throne_100ml.jpg", badge: "LIMITED" },
  { id: "cologne-discovery-collection", name: "COLOGNE DISCOVERY", category: "Miniature Set", price: "150", image: "/images/shop_collection.jpg", badge: "GIFT SET" }
];

export default function Shop() {
  return (
    <main className="bg-[#F9F8F3] min-h-screen text-[#1A1A1A] font-sans">
      <Navbar />
      
      {/* Shop Header */}
      <section className="pt-32 pb-16 px-6 max-w-[1400px] mx-auto text-center border-b border-[#E5E5E5]">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop The Collection</h1>
        <p className="text-[#555555] font-light max-w-xl mx-auto">Explore our complete range of exquisite fragrances and luxury collections, meticulously crafted from the rarest botanicals globally sourced.</p>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {AI_PRODUCTS.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/5] mb-6 bg-white flex flex-col p-4 transition-all duration-300">
                <div className="absolute top-4 left-4 bg-white text-[#1A1A1A] text-[9px] font-bold tracking-widest px-2 py-1 uppercase z-10 border border-[#E5E5E5] rounded-sm shadow-sm">
                  {item.badge}
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
                </div>
              </div>
              <div className="text-center px-2 flex flex-col flex-grow">
                <p className="text-[10px] text-[#555555] tracking-widest uppercase mb-2">{item.category}</p>
                <h3 className="font-serif text-2xl mb-2">{item.name}</h3>
                <p className="text-sm font-light mb-6">₹{item.price}</p>
                <div className="mt-auto">
                  <button className="w-full bg-[#1A1A1A] text-white py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-[#333333]">
                    Discover {item.name}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
