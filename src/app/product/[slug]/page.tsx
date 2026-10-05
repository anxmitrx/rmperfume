"use client";
import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const productData: Record<string, any> = {
  "noble": {
    name: "NOBLE",
    size: "100ml",
    tags: ["UNISEX", "WOODY", "PARFUM"],
    mood: "EVENING GALAS - VELVET - THE EXCEPTIONAL",
    quote: "\"A structure built on smoked frankincense and rich grenadine.\"",
    price: "1,499",
    originalPrice: "1,999",
    image: "/images/flacon_noble.jpg",
    desc: "Crafted from rare crimson dust and steeped in Moroccan cedar.",
    notes: [
      {
        title: "The Prelude",
        subtitle: "GRENADINE & SAFFRON",
        desc: "A rich opening of crushed pomegranates and hand-picked saffron threads that deliver an immediate opulent impact.",
        image: "/images/flacon_2ml.jpg",
        color: "bg-red-50"
      },
      {
        title: "The Heart",
        subtitle: "SMOKED FRANKINCENSE",
        desc: "Resinous frankincense tear drops harvested from the Omani desert, adding a deep spiritual warmth.",
        image: "/images/storytelling_2.jpg",
        color: "bg-amber-50"
      },
      {
        title: "The Climax",
        subtitle: "MOROCCAN CEDAR & CRIMSON DUST",
        desc: "An enduring foundation of dry atlas cedarwood layered with our proprietary crimson dust accord for a 16-hour sillage.",
        image: "/images/product_base_notes.jpg",
        color: "bg-stone-100"
      }
    ]
  },
  "cologne-discovery-collection": {
    name: "COLOGNE DISCOVERY",
    size: "5x 9ML",
    tags: ["UNISEX", "DISCOVERY", "SET"],
    mood: "EXPLORATION - JOURNEYS - THE UNDECIDED",
    quote: "\"Five masterpieces waiting to be unlocked.\"",
    price: "150.00",
    originalPrice: "180.00",
    image: "/images/flacon_orion.jpg",
    desc: "A curated wardrobe of our most iconic scents.",
    notes: [
      {
        title: "The Selection",
        subtitle: "CURATED MASTERPIECES",
        desc: "Contains 9ml miniature flacons of Orion, Noble, Regal, Throne, and our secret unreleased archive blend.",
        image: "/images/shop_collection.jpg",
        color: "bg-gray-50"
      },
      {
        title: "The Presentation",
        subtitle: "BESPOKE PACKAGING",
        desc: "Housed in a sustainable, hand-crafted wooden presentation box with velvet lining.",
        image: "/images/storytelling_1.jpg",
        color: "bg-stone-50"
      },
      {
        title: "The Guarantee",
        subtitle: "REDEEMABLE VALUE",
        desc: "The full value of this discovery set can be redeemed against your next 100ml full-size flacon purchase.",
        image: "/images/flacon_2ml.jpg",
        color: "bg-white"
      }
    ]
  }
};

export default function ProductPage() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop() || "noble";
  const product = productData[slug] || productData["noble"];
  const [selectedVariant, setSelectedVariant] = useState(product.name);
  
  const variants = [
    { id: "noble", name: "NOBLE", size: "100ML", image: "/images/flacon_noble.jpg" },
    { id: "regal", name: "REGAL", size: "100ML", image: "/images/flacon_regal.jpg" },
    { id: "throne", name: "THRONE", size: "100ML", image: "/images/throne_100ml.jpg" }
  ];

  return (
    <main className="bg-[#F9F8F3] min-h-screen text-[#1A1A1A] selection:bg-[#d4af37] selection:text-white">
      <Navbar />

      {/* Product Hero */}
      <section className="pt-24 lg:pt-0 lg:min-h-screen flex flex-col lg:flex-row bg-[#F9F8F3]">
        {/* Left: Product Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-10 min-h-[60vh] lg:min-h-screen border-r border-[#E5E5E5]">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative w-full max-w-md aspect-[3/4]">
            <Image src={product.image} alt={product.name} fill className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform duration-700" priority />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-[9px] tracking-[0.25em] font-semibold text-[#555555] uppercase">
              <span>{product.size}</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full lg:w-1/2 flex items-center p-8 lg:p-24 bg-[#F9F8F3]">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="w-full max-w-lg">
            <h1 className="font-serif text-5xl md:text-6xl mb-3 tracking-wide text-[#1A1A1A]">{product.name} <span className="text-2xl text-[#555555] font-sans tracking-tight font-light">({product.size})</span></h1>
            <div className="flex gap-2 text-[9px] tracking-[0.2em] font-semibold text-[#555555] mb-8 uppercase">
              {product.tags.map((tag: string, i: number) => (
                <span key={i} className="bg-white border border-[#E5E5E5] px-3 py-1">{tag}</span>
              ))}
            </div>
            
            <p className="text-[#555555] text-[10px] tracking-[0.25em] uppercase mb-3 font-semibold">{product.mood}</p>
            <p className="text-[#1A1A1A] italic mb-8 border-b border-[#E5E5E5] pb-8">{product.quote}</p>
            
            <div className="mb-8">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-3xl font-serif">₹ {product.price}</span>
                <span className="text-sm text-[#555555] line-through mb-1">₹{product.originalPrice}</span>
              </div>
              <p className="text-xs text-[#555555]">Incl. of all taxes. Free express shipping.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold mb-4">Choose variant:</h3>
              <div className="grid grid-cols-3 gap-4">
                {variants.map(v => (
                  <button 
                    key={v.id}
                    onClick={() => setSelectedVariant(v.name)}
                    className={`border p-2 bg-white flex flex-col items-center justify-center gap-2 transition-all ${selectedVariant === v.name ? 'border-[#1A1A1A] ring-1 ring-[#1A1A1A]' : 'border-[#E5E5E5] hover:border-[#555555]'}`}
                  >
                    <Image src={v.image} alt={v.name} width={40} height={40} className="object-cover" />
                    <span className="text-[10px] tracking-widest font-semibold">{v.name}</span>
                    <span className="text-[9px] text-[#555555]">{v.size}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="border border-[#E5E5E5] bg-white w-24 flex items-center justify-between px-4">
                <button className="text-[#555555] hover:text-[#1A1A1A]">-</button>
                <span className="text-sm font-medium">1</span>
                <button className="text-[#555555] hover:text-[#1A1A1A]">+</button>
              </div>
              <Link href="/cart" className="flex-1">
                <button className="w-full bg-[#1A1A1A] text-white py-4 text-xs font-semibold tracking-[0.2em] hover:bg-[#333333] transition-colors uppercase">
                  Add to Bag
                </button>
              </Link>
            </div>
            <p className="text-xs text-[#555555] mb-8">* Ships within 24-48 hours of ordering.</p>

            {/* Promos */}
            <h4 className="text-xs font-semibold mb-3 uppercase tracking-wider">Offers</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-[#E5E5E5] bg-white flex items-stretch overflow-hidden">
                <div className="bg-[#1A1A1A] text-white text-[9px] w-6 flex items-center justify-center shrink-0">
                  <div className="-rotate-90 whitespace-nowrap tracking-widest uppercase">MINI SIZE</div>
                </div>
                <div className="p-4 py-3">
                  <div className="text-xs font-semibold mb-1">A MINI SURPRISE</div>
                  <p className="text-[10px] text-[#555555] leading-tight">Get a 2ml sample with your order</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture of the Scent */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-[#555555] mb-4 uppercase">Sensorial Cartography</h4>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Architecture of the Scent</h2>
          <p className="text-[#555555] max-w-2xl mx-auto text-sm leading-relaxed">
            {product.desc}
          </p>
        </div>

        <div className="space-y-32">
          {product.notes.map((note: any, index: number) => (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'pl-0 md:pl-12' : 'pr-0 md:pr-12'}`}>
                <h4 className="font-serif italic text-xl text-[#555555] mb-2">{note.title}</h4>
                <h3 className="font-serif text-3xl mb-4">{note.subtitle}</h3>
                <p className="text-[#1A1A1A] leading-relaxed text-sm mb-8">
                  {note.desc}
                </p>
              </div>
              <div className="w-full md:w-1/2 relative h-[400px]">
                <div className={`absolute inset-0 ${note.color} rounded-sm ${index % 2 === 1 ? 'rotate-2' : '-rotate-2'} scale-105 opacity-50`}></div>
                <Image src={note.image} alt={note.title} fill className="object-cover relative z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
