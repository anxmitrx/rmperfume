"use client";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const FLACON_UNIVERSE = [
  { id: "orion", name: "ORION", subtitle: "AWAKENING ABSOLU", description: "Azure marine notes, cold pressed dark vetiver, polished lapis lazuli.", price: "1,499", image: "/images/flacon_orion.jpg" },
  { id: "noble", name: "NOBLE", subtitle: "CRIMSON PLASMA", description: "Grenadine rose, smoked frankincense, saffron, crimson dust.", price: "1,499", image: "/images/flacon_noble.jpg" },
  { id: "regal", name: "REGAL", subtitle: "LIQUID GOLD", description: "Sun-drenched neroli, golden amber, Moroccan cedar, gilded filigree.", price: "1,499", image: "/images/flacon_regal.jpg" }
];

const SHOP_COLLECTION = [
  { id: "c1", name: "THE LEADER SET", desc: "4 x 20ml Travel Drops Flacon", price: "4,499", image: "/images/shop_collection.jpg" },
  { id: "c2", name: "ORION", desc: "50ml Extrait de Parfum", price: "899", image: "/images/flacon_orion.jpg" },
  { id: "c3", name: "NOBLE", desc: "50ml Extrait de Parfum", price: "899", image: "/images/flacon_noble.jpg" },
  { id: "c4", name: "THRONE", desc: "50ml Extrait de Parfum", price: "1,299", image: "/images/throne_100ml.jpg" }
];

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-gray-200">
      <Navbar theme="dark" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-36">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_bg.jpg" 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16"
          initial="hidden" animate="visible" variants={fadeIn}
        >
          <div className="text-[8px] md:text-[9px] tracking-[0.3em] font-semibold text-[#d4af37] mb-8 border border-[#d4af37]/30 inline-block px-4 py-1 uppercase">
            Limited Allocation • Only 300 flacons per batch
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-wide leading-[1.1] mb-8">
            BORN IN<br/>
            OBSCURITY.<br/>
            <span className="text-[#d4af37] italic">REFINED IN</span><br/>
            <span className="text-[#d4af37] italic">SHADOWS.</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 text-sm md:text-base font-light tracking-wider leading-relaxed">
            Dark woods, obscured resins, and flacons that bridge rare unbranded essences, with testament and silent commands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/product">
              <button className="bg-[#d4af37] text-black px-8 py-3 rounded-full tracking-[0.2em] font-semibold hover:bg-white hover:text-black transition-all text-[10px]">
                A MASTER'S SELECTION →
              </button>
            </Link>
            <Link href="/product">
              <button className="text-white hover:text-[#d4af37] px-8 py-3 tracking-[0.2em] font-semibold transition-all text-[10px] flex items-center gap-2">
                EXPLORE EDITIONS ↓
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Metrics Footer of Hero */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-12 pt-20 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-8 border-t border-gray-800 pt-8">
            <div>
              <div className="text-[#d4af37] font-serif text-xl mb-1">30%</div>
              <div className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">PURE EXTRAIT</div>
            </div>
            <div>
              <div className="text-[#d4af37] font-serif text-xl mb-1">CEDAR • KYOTO</div>
              <div className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">HEART NOTES</div>
            </div>
            <div>
              <div className="text-[#d4af37] font-serif text-xl mb-1">300 FLACONS</div>
              <div className="text-[9px] text-gray-500 tracking-[0.2em] uppercase">LIMITED ALLOCATION</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Stacked Sections for Flacons */}
      {FLACON_UNIVERSE.map((item, index) => (
        <section key={item.id} className="relative w-full h-[65vh] md:h-[80vh] flex items-end justify-center pb-20 group overflow-hidden">
          <Image 
            src={item.image} 
            alt={item.name} 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          <div className="relative z-10 text-center flex flex-col items-center">
            <h4 className="text-[9px] tracking-[0.3em] uppercase text-gray-400 mb-2">{item.subtitle}</h4>
            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-white tracking-widest">{item.name}</h2>
            <Link href="/product">
              <button className="text-[10px] tracking-[0.2em] font-semibold text-white border-b border-white pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors uppercase">
                DISCOVER {item.name}
              </button>
            </Link>
          </div>
        </section>
      ))}

      {/* Throne Carousel Section (White) */}
      <section className="bg-white text-black py-24 px-6 w-full relative flex flex-col items-center justify-center border-y border-gray-100">
        <div className="flex items-center justify-center w-full max-w-[1200px] gap-8 md:gap-20">
          <button className="hidden md:block text-3xl font-light hover:text-[#d4af37] transition-colors">‹</button>
          
          <div className="flex items-end justify-center gap-6 md:gap-16">
            {/* left bottle */}
            <div className="relative w-24 h-48 md:w-32 md:h-[280px] opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <Image src="/images/flacon_noble.jpg" fill className="object-cover rounded-xl filter drop-shadow-xl" alt="Noble" />
            </div>
            
            {/* center bottle */}
            <div className="relative w-40 h-[300px] md:w-[220px] md:h-[450px]">
              <Image src="/images/throne_100ml.jpg" fill className="object-cover rounded-xl filter drop-shadow-2xl" alt="Throne" />
            </div>
            
            {/* right bottle */}
            <div className="relative w-24 h-48 md:w-32 md:h-[280px] opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <Image src="/images/flacon_orion.jpg" fill className="object-cover rounded-xl filter drop-shadow-xl" alt="Orion" />
            </div>
          </div>

          <button className="hidden md:block text-3xl font-light hover:text-[#d4af37] transition-colors">›</button>
        </div>
        
        <div className="text-center mt-16">
          <h2 className="font-serif text-4xl md:text-5xl tracking-widest mb-3">THRONE</h2>
          <p className="text-[9px] tracking-[0.3em] text-gray-500 uppercase mb-8">Masterwork Extrait • 100ml</p>
          <Link href="/product">
            <button className="bg-black text-white px-10 py-3.5 text-[9px] tracking-[0.2em] uppercase font-bold hover:bg-[#d4af37] hover:text-black transition-colors">
              SHOP NOW
            </button>
          </Link>
        </div>
      </section>

      {/* Storytelling Full Width Sections */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-end justify-center pb-20 group overflow-hidden">
        <Image 
          src="/images/storytelling_1.jpg" 
          alt="Storytelling 1" 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white tracking-widest">UNSEEN IN SPIRIT</h2>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">OBSCURITY IS YOUR ALLY.</p>
        </div>
      </section>

      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-end justify-center pb-20 group overflow-hidden">
        <Image 
          src="/images/storytelling_2.jpg" 
          alt="Storytelling 2" 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white tracking-widest">POWER ISN'T INHERITED</h2>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">IT'S BUILT.</p>
        </div>
      </section>

      {/* Shop Collection Divider Bar */}
      <div className="w-full bg-black py-10 text-center">
        <h2 className="font-serif text-2xl tracking-[0.3em] text-white uppercase">SHOP THE COLLECTION</h2>
      </div>

      {/* Shop Collection Grid (White) */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {SHOP_COLLECTION.map((item) => (
            <motion.div key={item.id} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 flex flex-col group cursor-pointer hover:shadow-xl transition-all relative z-10">
              <div className="bg-black text-white text-[8px] font-bold tracking-[0.2em] px-3 py-1 uppercase self-start mb-6">
                LIMITED
              </div>
              <div className="relative h-64 w-full mb-8 flex items-center justify-center p-4">
                <Image src={item.image} alt={item.name} fill className="object-cover opacity-90 p-0 group-hover:scale-105 transition-transform duration-500 rounded-sm" />
              </div>
              <div className="flex flex-col flex-grow text-center items-center">
                <p className="text-[9px] text-[#d4af37] tracking-[0.25em] font-semibold uppercase mb-2">Extrait de Parfum</p>
                <h3 className="font-serif text-xl tracking-widest mb-2 text-black">{item.name}</h3>
                <p className="text-[10px] text-gray-500 tracking-widest uppercase mb-6 flex-grow">{item.desc}</p>
                <Link href="/product" className="w-full">
                  <button className="border border-black text-black w-full py-3 text-[9px] tracking-[0.2em] font-bold hover:bg-black hover:text-white transition-colors uppercase">
                    SHOP - ₹{item.price}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <Footer theme="dark" />
    </main>
  );
}
