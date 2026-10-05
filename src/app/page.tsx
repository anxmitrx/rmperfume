"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import WebGLHero from "@/components/WebGLHero";

const FESTIVE_FAVS = [
  { id: "cologne-discovery-collection", name: "Cologne Discovery Collection", price: "150.00", image: "/images/flacon_orion.jpg", badge: "LIMITED EDITION" },
  { id: "orange-bitters-home-candle", name: "Orange Bitters Home Candle", price: "55.00", image: "/images/flacon_noble.jpg", badge: "BESTSELLER" },
  { id: "pine-and-eucalyptus-travel-candle", name: "Pine & Eucalyptus Travel Candle", price: "38.00", image: "/images/flacon_regal.jpg", badge: "ONLINE EXCLUSIVE" },
  { id: "cologne-intense-collection", name: "Cologne Intense Collection", price: "180.00", image: "/images/throne_100ml.jpg", badge: "NEW" }
];

const CATEGORIES = [
  { name: "Colognes", image: "/images/flacon_orion.jpg" },
  { name: "Candles", image: "/images/flacon_noble.jpg" },
  { name: "Bath & Body", image: "/images/flacon_2ml.jpg" },
  { name: "Diffusers & Sprays", image: "/images/shop_collection.jpg" }
];

const SERVICES = [
  { title: "My RM Perfumes", desc: "Discover the perfect scent.", image: "/images/storytelling_1.jpg", btnText: "Explore More" },
  { title: "Complimentary Engraving", desc: "Personalise your bottle.", image: "/images/flacon_noble.jpg", btnText: "Shop Now" },
  { title: "In-Store Appointments", desc: "Book a private consultation.", image: "/images/storytelling_2.jpg", btnText: "Book Appointment" }
];

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-rose-100 via-[#F9F8F3] to-sky-100 min-h-screen text-[#1A1A1A] font-sans">
      <Navbar />

      {/* WebGL 3D Hero Section */}
      <WebGLHero />

      {/* Festive Favourites */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-[#1A1A1A]">Festive Favourites</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FESTIVE_FAVS.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col">
              <Link href={`/product/${item.id}`} className="block">
                <div className="relative aspect-[4/5] mb-4 bg-white flex flex-col p-4 transition-all duration-300">
                  <div className="absolute top-4 left-4 bg-white text-[#1A1A1A] text-[9px] font-bold tracking-widest px-2 py-1 uppercase z-10 border border-[#E5E5E5] rounded-sm shadow-sm transition-colors">
                    {item.badge}
                  </div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="text-left px-2">
                  <h3 className="font-serif text-lg mb-1">{item.name}</h3>
                  <p className="text-xs text-[#555555] mb-4 font-light">£{item.price}</p>
                </div>
              </Link>
              <div className="px-2 mt-auto">
                <Link href="/cart" className="block w-full">
                  <button className="w-full bg-[#1A1A1A] text-white py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-[#333333]">
                    Add to Bag
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Two Promos */}
      <section className="py-12 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full mb-6 overflow-hidden rounded-lg">
              <Image src="/images/flacon_orion.jpg" alt="Discover ORION" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="text-center">
              <h2 className="font-serif text-2xl mb-4">Discover ORION</h2>
              <Link href="/product">
                <button className="bg-[#1A1A1A] text-white px-8 py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-[#333333]">
                  Shop ORION
                </button>
              </Link>
            </div>
          </div>

          <div className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full mb-6 overflow-hidden rounded-lg">
              <Image src="/images/storytelling_2.jpg" alt="Save 15%" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="text-center">
              <h2 className="font-serif text-2xl mb-4">Save 15% When You Purchase Two Home Fragrances*</h2>
              <Link href="/shop">
                <button className="bg-[#1A1A1A] text-white px-8 py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-[#333333]">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Link href={`/category/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} key={idx} className="group flex flex-col items-center">
              <div className="relative aspect-square w-full mb-4 bg-white transition-opacity duration-300 hover:opacity-90">
                <Image src={cat.image} alt={cat.name} fill className="object-cover transition-opacity duration-500" />
              </div>
              <span className="text-[#1A1A1A] text-[11px] font-sans tracking-widest uppercase transition-colors group-hover:text-[#555555]">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Video / Banner Section */}
      <section className="py-12 px-6 max-w-[1400px] mx-auto">
        <div className="relative w-full aspect-[16/9] md:aspect-[2.5/1] flex items-center justify-center overflow-hidden mb-8 group cursor-pointer rounded-2xl shadow-lg">
          <Image src="/images/shop_collection.jpg" alt="Video Banner" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
          <div className="relative z-10">
            <h2 className="font-serif text-5xl md:text-7xl text-white tracking-widest drop-shadow-sm transition-colors duration-300">
              #RM_PERFUMES
            </h2>
          </div>
        </div>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl mb-6 text-[#1A1A1A]">Imagine May And Henry. Shop The Collection...</h2>
          <Link href="/shop">
            <button className="bg-[#1A1A1A] text-white px-8 py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-[#333333]">
              Shop The Collection
            </button>
          </Link>
        </div>
      </section>

      {/* Discover Our Services */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-[#1A1A1A] border-b border-[#E5E5E5] inline-block pb-4">Discover Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((srv, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer text-center">
              <div className="relative aspect-square w-full mb-6 overflow-hidden bg-[#F2EFE8]">
                <Image src={srv.image} alt={srv.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-xl mb-2">{srv.title}</h3>
              <p className="text-xs text-[#555555] mb-6 h-8 font-light">{srv.desc}</p>
              <div>
                <Link href={`/services/${srv.title.toLowerCase().replace(/ /g, '-')}`}>
                  <button className="bg-[#1A1A1A] text-white px-8 py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-[#333333]">
                    {srv.btnText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complimentary Services Bar */}
      <section className="py-16 px-6 max-w-[1400px] mx-auto mt-10 bg-gradient-to-r from-pink-50 via-purple-50 to-cyan-50 rounded-xl shadow-sm mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-purple-200">
          <div className="flex flex-col items-center justify-center p-4 group">
            <h4 className="font-serif text-lg mb-2 text-[#1A1A1A]">Free Delivery</h4>
            <p className="text-[10px] tracking-widest text-[#555555] uppercase font-light">On all orders over £50</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 group">
            <h4 className="font-serif text-lg mb-2 text-[#1A1A1A]">Complimentary Gift Wrap</h4>
            <p className="text-[10px] tracking-widest text-[#555555] uppercase font-light">With our signature packaging</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 group">
            <h4 className="font-serif text-lg mb-2 text-[#1A1A1A]">Click & Collect</h4>
            <p className="text-[10px] tracking-widest text-[#555555] uppercase font-light">From our flagship boutiques</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
