"use client";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ProductPage() {
  const [selectedVariant, setSelectedVariant] = useState("NOBLE");
  
  const variants = [
    { id: "noble", name: "NOBLE", size: "100ML", image: "/images/flacon_noble.jpg" },
    { id: "regal", name: "REGAL", size: "100ML", image: "/images/flacon_regal.jpg" },
    { id: "throne", name: "THRONE", size: "100ML", image: "/images/throne_100ml.jpg" }
  ];

  return (
    <main className="bg-white min-h-screen text-gray-900 selection:bg-[#d4af37] selection:text-white">
      <Navbar theme="light" />

      {/* Product Hero */}
      <section className="pt-24 lg:pt-0 lg:min-h-screen flex flex-col lg:flex-row">
        {/* Left: Product Image */}
        <div className="w-full lg:w-1/2 bg-[#fdfdfd] flex items-center justify-center p-10 min-h-[60vh] lg:min-h-screen border-r border-gray-100">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative w-full max-w-md aspect-[3/4]">
            <Image src="/images/flacon_orion.jpg" alt="ORION 100ml" fill className="object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" priority />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-[9px] tracking-[0.25em] font-semibold text-gray-400 uppercase">
              <span>EXTRAIT (30% CONC.)</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full lg:w-1/2 flex items-center p-8 lg:p-24 bg-white">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="w-full max-w-lg">
            <h1 className="font-serif text-5xl md:text-6xl mb-3 tracking-wide text-gray-900">ORION <span className="text-2xl text-gray-300 font-sans tracking-tight font-light">(100ml)</span></h1>
            <div className="flex gap-2 text-[9px] tracking-[0.2em] font-semibold text-gray-500 mb-8 uppercase">
              <span className="bg-gray-50 border border-gray-100 px-3 py-1">UNISEX</span>
              <span className="bg-gray-50 border border-gray-100 px-3 py-1">FRESH</span>
              <span className="bg-gray-50 border border-gray-100 px-3 py-1">PARFUM</span>
            </div>
            
            <p className="text-gray-400 text-[10px] tracking-[0.25em] uppercase mb-3 font-semibold">WORKDAYS - MORNING RUNS - THE EVERYDAY</p>
            <p className="text-gray-700 italic mb-8 border-b border-gray-200 pb-8">"It smells like citrus, lavender and early dews."</p>
            
            <div className="mb-8">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-3xl font-serif">₹ 1,499</span>
                <span className="text-sm text-gray-400 line-through mb-1">₹1,999</span>
              </div>
              <p className="text-xs text-gray-500">Incl. of all taxes. Free express shipping.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold mb-4">Choose variant:</h3>
              <div className="grid grid-cols-3 gap-4">
                {variants.map(v => (
                  <button 
                    key={v.id}
                    onClick={() => setSelectedVariant(v.name)}
                    className={`border p-2 flex flex-col items-center justify-center gap-2 transition-all ${selectedVariant === v.name ? 'border-black ring-1 ring-black' : 'border-gray-200 hover:border-gray-400'}`}
                  >
                    <Image src={v.image} alt={v.name} width={40} height={40} className="object-cover" />
                    <span className="text-[10px] tracking-widest font-semibold">{v.name}</span>
                    <span className="text-[9px] text-gray-500">{v.size}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="border border-gray-300 w-24 flex items-center justify-between px-4">
                <button className="text-gray-500 hover:text-black">-</button>
                <span className="text-sm font-medium">1</span>
                <button className="text-gray-500 hover:text-black">+</button>
              </div>
              <Link href="/cart" className="flex-1">
                <button className="w-full bg-black text-white py-4 text-xs font-semibold tracking-[0.2em] hover:bg-gray-800 transition-colors uppercase">
                  ADD TO BAG
                </button>
              </Link>
            </div>
            <p className="text-xs text-gray-500 mb-8">* Ships within 24-48 hours of ordering.</p>

            {/* Promos */}
            <h4 className="text-xs font-semibold mb-3 uppercase tracking-wider">Offers</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 flex items-stretch overflow-hidden">
                <div className="bg-black text-white text-[9px] w-6 flex items-center justify-center shrink-0">
                  <div className="-rotate-90 whitespace-nowrap tracking-widest uppercase">MINI SIZE</div>
                </div>
                <div className="p-4 py-3">
                  <div className="text-xs font-semibold mb-1">A MINI SURPRISE FOR YOU</div>
                  <p className="text-[10px] text-gray-500 leading-tight">Get a 2ml Orto Parisi with your order</p>
                  <p className="text-[9px] mt-2 text-green-600 font-semibold tracking-wider flex items-center gap-1">✓ APPLIED AT CHECKOUT</p>
                </div>
              </div>
              
              <div className="border border-gray-200 flex items-stretch overflow-hidden">
                <div className="bg-black text-white text-[9px] w-6 flex items-center justify-center shrink-0">
                  <div className="-rotate-90 whitespace-nowrap tracking-widest uppercase">BUNDLE + SAVE</div>
                </div>
                <div className="p-4 py-3">
                  <div className="text-xs font-semibold mb-1">MORE SAVINGS FOR YOU</div>
                  <p className="text-[10px] text-gray-500 leading-tight">Buy 2 or more 100ml flacons & save up to 20%</p>
                  <Link href="/shop">
                    <button className="text-[9px] mt-2 text-black font-semibold border-b border-black pb-px">EXPLORE BUNDLES →</button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture of the Scent */}
      <section className="py-24 px-6 max-w-5xl mx-auto bg-white">
        <div className="text-center mb-20">
          <h4 className="text-xs font-semibold tracking-[0.2em] text-gray-400 mb-4 uppercase">Sensorial Cartography</h4>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Architecture of the Scent</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Crafted in limited seasonal yields. Each flacon captures botanical extractions formulated with patience, matured in French oak to realize peak harmonic resonance.
          </p>
        </div>

        <div className="space-y-32">
          {/* Note 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 pr-0 md:pr-12">
              <h4 className="font-serif italic text-xl text-[#d4af37] mb-2">The Prelude</h4>
              <h3 className="font-serif text-3xl mb-4">CALABRIAN DAWN & WILD BERGAMOT</h3>
              <p className="text-xs tracking-widest text-gray-400 mb-6 uppercase">A luminous puncture through morning fog</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-8">
                Cold-pressed organic bergamot peel from Reggio groves in Calabria is married with high-altitude lavender buds picked at twilight. A flash of pink peppercorn provides an electric greeting that immediately commands the room.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Sillage</p>
                  <p className="text-sm font-semibold">0 to 45m</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Extraction</p>
                  <p className="text-sm font-semibold">CO₂ Pure</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Concentration</p>
                  <p className="text-sm font-semibold">30% Extrait</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px]">
              <div className="absolute inset-0 bg-orange-50 rounded-[40px] -rotate-3 scale-105"></div>
              <Image src="/images/flacon_2ml.jpg" alt="Top Notes" fill className="object-cover rounded-[30px] shadow-lg relative z-10" />
              <div className="absolute bottom-6 right-6 z-20 bg-white px-4 py-2 rounded-full text-[10px] font-semibold tracking-widest shadow-md">
                01 | TOP NOTES
              </div>
            </div>
          </motion.div>

          {/* Note 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2 pl-0 md:pl-12">
              <h4 className="font-serif italic text-xl text-[#d4af37] mb-2">The Heart</h4>
              <h3 className="font-serif text-3xl mb-4">CRUSHED VIOLET & CLARY SAGE</h3>
              <p className="text-xs tracking-widest text-gray-400 mb-6 uppercase">Velveteen green shadows on wet stone</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-8">
                The heart unfolds with calculated patience. Hand-harvested violet leaves introduce an invigorating verdant-floral freshness, tempered by the dry sun-baked warmth of Grasse clary sage and blue lotus petals.
              </p>
              <div className="bg-gray-50 border border-gray-100 p-4 flex gap-4 items-center">
                <span className="text-2xl">⚗</span>
                <div>
                  <p className="text-xs font-semibold tracking-wider">DOUBLE DISTILLATION PROTOCOL</p>
                  <p className="text-[10px] text-gray-500 mt-1">Purified without heat degradation to preserve volatile floral esters.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px]">
              <div className="absolute inset-0 bg-purple-50 rounded-[40px] rotate-3 scale-105"></div>
              <Image src="/images/storytelling_2.jpg" alt="Heart Notes" fill className="object-cover rounded-[30px] shadow-lg relative z-10" />
              <div className="absolute bottom-6 left-6 z-20 bg-white px-4 py-2 rounded-full text-[10px] font-semibold tracking-widest shadow-md">
                02 | HEART ESSENCE
              </div>
            </div>
          </motion.div>

          {/* Note 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 pr-0 md:pr-12">
              <h4 className="font-serif italic text-xl text-[#d4af37] mb-2">The Climax</h4>
              <h3 className="font-serif text-3xl mb-4">SMOKED BIRCH TAR & GREY AMBERGRIS</h3>
              <p className="text-xs tracking-widest text-gray-400 mb-6 uppercase">An indelible memory that outlives the night</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-8">
                A foundational paper forged from aged sea ambergris, Nordic smoked birchwood, and Indonesian patchouli heart. Designed to integrate intimately with the skin chemistry, radiating continuous warmth for over 16 hours.
              </p>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="bg-black text-white w-5 h-5 flex items-center justify-center text-[10px]">1</div>
                  <p className="text-xs text-gray-600">Depress the atomizer at 15cm across lateral pulse points.</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-black text-white w-5 h-5 flex items-center justify-center text-[10px]">2</div>
                  <p className="text-xs text-gray-600">Allow micro-droplets to settle naturally without rubbing.</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-black text-white w-5 h-5 flex items-center justify-center text-[10px]">3</div>
                  <p className="text-xs text-gray-600">Layer over cuffs or raw silk lapels for infinite sillage.</p>
                </div>
              </div>
              <Link href="/cart">
                <button className="mt-8 border-b-2 border-black pb-1 text-xs font-semibold tracking-widest hover:text-gray-500 hover:border-gray-500 transition-colors uppercase">
                  Acquire Orion 100ml Extrait →
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px]">
              <div className="absolute inset-0 bg-stone-100 rounded-[40px] -rotate-2 scale-105"></div>
              <Image src="/images/product_base_notes.jpg" alt="Base Notes" fill className="object-cover rounded-[30px] shadow-lg relative z-10" />
              <div className="absolute bottom-6 right-6 z-20 bg-white px-4 py-2 rounded-full text-[10px] font-semibold tracking-widest shadow-md">
                03 | THE RITUAL
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discovery CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto border border-gray-100 bg-[#fdfdfd] p-0 rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] group">
          <div className="w-full md:w-5/12 relative h-64 md:h-auto bg-gray-100 overflow-hidden">
            <Image 
              src="/images/shop_collection.jpg" 
              alt="Discovery Set" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="w-full md:w-7/12 p-12 md:p-16 flex flex-col justify-center">
            <p className="text-[9px] tracking-[0.25em] font-semibold text-gray-400 mb-4 uppercase">Personal Olfactory Guidance</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-4 text-gray-900 tracking-wide">Unsure if Orion suits your presence?</h3>
            <p className="text-sm text-gray-500 max-w-lg mb-8 leading-relaxed font-light">
              Request our 3x2ml Discovery Miniature vial set. Your investment is 100% redeemable against your future 100ml flacon purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
              <Link href="/product/cologne-discovery-collection" className="flex-1">
                <button className="w-full border border-gray-300 bg-white text-gray-900 px-6 py-4 text-[10px] tracking-[0.2em] font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm">
                  ORDER DISCOVERY SET
                </button>
              </Link>
              <Link href="/cart" className="flex-1">
                <button className="w-full bg-black text-white px-6 py-4 text-[10px] tracking-[0.2em] font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                  ORDER ORION NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer theme="light" />
    </main>
  );
}
