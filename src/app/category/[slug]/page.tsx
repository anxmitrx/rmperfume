"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AI_PRODUCTS = [
  { id: "orion", name: "ORION", category: "Extrait de Parfum", price: "1,499", image: "/images/flacon_orion.jpg", badge: "SIGNATURE" },
  { id: "noble", name: "NOBLE", category: "Extrait de Parfum", price: "1,499", image: "/images/flacon_noble.jpg", badge: "BESTSELLER" },
  { id: "regal", name: "REGAL", category: "Extrait de Parfum", price: "1,499", image: "/images/flacon_regal.jpg", badge: "NEW" },
  { id: "throne", name: "THRONE", category: "Masterwork Extrait", price: "1,299", image: "/images/throne_100ml.jpg", badge: "LIMITED" }
];

export default function Category() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop()?.replace(/-/g, ' ') || 'Category';

  return (
    <main className="bg-[#F9F8F3] min-h-screen text-[#1A1A1A] font-sans">
      <Navbar />
      
      {/* Category Header */}
      <section className="pt-32 pb-16 px-6 max-w-[1400px] mx-auto text-center border-b border-[#E5E5E5]">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 capitalize">{slug}</h1>
        <p className="text-[#555555] font-light max-w-xl mx-auto">Browse our curated selection of {slug}, featuring our most sought-after and exclusive aromas designed to elevate your everyday rituals.</p>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_PRODUCTS.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/5] mb-4 bg-white flex flex-col p-4 transition-all duration-300">
                <div className="absolute top-4 left-4 bg-white text-[#1A1A1A] text-[9px] font-bold tracking-widest px-2 py-1 uppercase z-10 border border-[#E5E5E5] rounded-sm shadow-sm">
                  {item.badge}
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" />
                </div>
              </div>
              <div className="text-left px-2 flex flex-col flex-grow">
                <h3 className="font-serif text-lg mb-1">{item.name}</h3>
                <p className="text-[10px] text-[#555555] tracking-widest uppercase mb-2">{item.category}</p>
                <p className="text-xs font-light mb-4">₹{item.price}</p>
                <div className="mt-auto">
                  <button className="w-full bg-[#1A1A1A] text-white py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-[#333333]">
                    Discover
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
