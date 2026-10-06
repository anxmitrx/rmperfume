"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLoading } from "@/components/LoadingScreen";

const bestSellers = [
  { slug: "valentino", name: "Valentino", price: 15, image: "/images/perfume_stay_a_little_longer.jpg", glow: "group-hover:shadow-[0_0_40px_rgba(255,102,153,0.3)]" },
  { slug: "chanel-n5", name: "Chanel N°5", price: 22, image: "/images/perfume_off_the_grid.jpg", glow: "group-hover:shadow-[0_0_40px_rgba(255,178,102,0.3)]" },
  { slug: "miss-dior", name: "Miss Dior", price: 20, image: "/images/perfume_better_in_person.jpg", glow: "group-hover:shadow-[0_0_40px_rgba(153,102,255,0.3)]" },
  { slug: "coco-chanel", name: "Coco Chanel Paris", price: 16, image: "/images/perfume_main_character.jpg", glow: "group-hover:shadow-[0_0_40px_rgba(102,204,255,0.3)]" }
];

const chromaticVault = [
  { name: "Off The Grid", color: "bg-gradient-to-br from-[#FF5E1A] to-[#FF8C00]", price: 135, image: "/images/perfume_off_the_grid.jpg", textColor: "text-white" },
  { name: "Better Than Yesterday", color: "bg-gradient-to-br from-[#7B1E29] to-[#A12B44]", price: 140, image: "/images/perfume_better_than_yesterday.jpg", textColor: "text-white" },
  { name: "Stay A Little Longer", color: "bg-gradient-to-br from-[#5A3E92] to-[#884DFF]", price: 155, image: "/images/perfume_stay_a_little_longer.jpg", textColor: "text-white" },
  { name: "Main Character", color: "bg-gradient-to-br from-[#3B82F6] to-[#00A3E0]", price: 125, image: "/images/perfume_main_character.jpg", textColor: "text-white" },
  { name: "Golden Hour", color: "bg-gradient-to-br from-[#E4A834] to-[#FFD166]", price: 160, image: "/images/perfume_better_in_person.jpg", textColor: "text-[#4A2E00]" },
  { name: "Bad Influence", color: "bg-gradient-to-br from-[#D47A8F] to-[#FF99B3]", price: 145, image: "/images/perfume_bad_influence.jpg", textColor: "text-white" }
];

export default function Home() {
  const [selectedDiscovery, setSelectedDiscovery] = useState(0);
  const { triggerLoading } = useLoading();

  return (
    <div className="min-h-screen font-sans w-full text-[#1A1A1A] overflow-x-hidden flex flex-col selection:bg-[#FF3366] selection:text-white bg-[#F5F0E6]">

      {/* SECTION 2: Editorial Hero Section */}
      <section className="relative w-full pt-32 pb-32 px-4 md:px-8 flex flex-col items-center overflow-hidden bg-[#FFFBF7]">
        {/* Cinematic Aurora Gradient Mesh */}
        <div className="absolute top-[45%] left-1/2 -translate-x-[70%] -translate-y-1/2 w-[400px] h-[300px] bg-[#FFB84D] blur-[100px] opacity-60 rounded-full pointer-events-none z-0"></div>
        <div className="absolute top-[45%] left-1/2 -translate-x-[20%] -translate-y-1/2 w-[450px] h-[350px] bg-[#FFC0CB] blur-[100px] opacity-50 rounded-full pointer-events-none z-0"></div>
        
        <div className="w-full relative flex flex-col items-center mt-8 max-w-[1400px] mx-auto z-10">
          
          {/* Floating Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="absolute left-0 top-8 flex flex-col gap-6 w-48 hidden lg:flex z-20">
            {/* Decorative arcs */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#EAEAEA] rounded-tl-full opacity-60"></div>
            <div className="absolute -top-3 -left-3 w-32 h-32 border-t border-l border-[#EAEAEA] rounded-tl-full opacity-60"></div>
            
            <div className="w-[170px] h-[190px] rounded-t-full rounded-b-[2rem] overflow-hidden relative bg-white shadow-sm p-0 z-10">
              <div className="w-full h-full relative rounded-t-full rounded-b-[1.8rem] overflow-hidden">
                 <Image src="/images/perfume_stay_a_little_longer.jpg" alt="Floral Fragrance" fill className="object-cover mix-blend-multiply" />
              </div>
            </div>
            <div className="flex flex-col gap-3 pl-2 mt-4">
              {[
                { name: "Fresh Fragrances", active: true },
                { name: "Floral Fragrances", active: false },
                { name: "Oceanic Fragrances", active: false }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[11px] text-[#1A1A1A] font-medium">
                  <div className={`w-3.5 h-3.5 rounded-full border border-[#D0D0D0] flex items-center justify-center bg-white`}>
                    {item.active && <div className="w-2 h-2 rounded-full bg-[#FFB8C6]"></div>}
                  </div>
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Floating Right */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="absolute right-0 top-16 flex flex-col gap-8 w-48 hidden lg:flex items-start z-20">
            <div className="w-[170px] h-[190px] rounded-t-full rounded-b-[2rem] overflow-hidden relative bg-[#EAEAEA]/30 p-4 flex items-center justify-center">
               <div className="w-full h-full relative mix-blend-multiply">
                  <Image src="/images/perfume_off_the_grid.jpg" alt="Classic Fragrance" fill className="object-contain" />
               </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex -space-x-2">
                 <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative"><Image src="/images/perfume_stay_a_little_longer.jpg" fill alt="avatar" className="object-cover" /></div>
                 <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative"><Image src="/images/perfume_better_in_person.jpg" fill alt="avatar" className="object-cover" /></div>
                 <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative"><Image src="/images/perfume_main_character.jpg" fill alt="avatar" className="object-cover" /></div>
              </div>
              <div className="text-[10px] font-medium leading-tight text-[#1A1A1A]">
                150+ Well<br/>Reviews
              </div>
            </div>
          </motion.div>
          
          {/* Typography */}
          <div className="text-center flex flex-col items-center z-10 w-full max-w-4xl mx-auto mt-4">
            <h1 className="font-serif text-[80px] md:text-[130px] leading-[0.9] tracking-tight relative z-10 text-[#1A1A1A]">
              The Fragranc<span className="relative">e
                <svg width="36" height="36" viewBox="0 0 24 24" fill="white" stroke="#1A1A1A" strokeWidth="1" className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-4 rotate-[10deg] z-20">
                  <path d="M4 4l16 5.333L12 12l-2.667 8L4 4z" />
                </svg>
              </span>
            </h1>
            <h1 className="font-serif text-[80px] md:text-[130px] leading-[0.9] text-[#1A1A1A] tracking-tight relative z-10 mt-2">
              of Lif<span className="relative">e
                <svg viewBox="0 0 100 100" className="absolute -top-12 -right-24 w-[160px] h-[160px] overflow-visible pointer-events-none transform rotate-[20deg] origin-center">
                  <path id="circle-path" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                  <text className="text-[9px] tracking-[0.2em] font-sans fill-[#1A1A1A]">
                    <textPath href="#circle-path" startOffset="30%">the perfume world.</textPath>
                  </text>
                </svg>
              </span>
            </h1>
            <p className="text-[#1A1A1A] text-[13px] font-medium mt-12 tracking-wide">
              Buy Popular Colognes on Sale at a Discount
            </p>
            
            {/* Promotion Badge & Explore Button Group */}
            <div className="relative mt-20 z-30 flex flex-col items-center pb-12">
              <div className="bg-white rounded-[100%] border border-[#EAEAEA] flex flex-col items-center justify-center relative z-20 shadow-sm w-[280px] h-[90px]">
                 <span className="text-[#8DA4F7] text-[38px] leading-none mb-1" style={{ fontFamily: 'cursive' }}>25% Off</span>
                 <span className="text-[#1A1A1A] text-[11px] font-bold">on all New Arrivals</span>
              </div>
              <button onClick={() => triggerLoading()} className="w-[64px] h-[64px] bg-[#1A1A1A] rounded-full text-white flex flex-col items-center justify-center absolute -bottom-6 z-30 hover:scale-105 transition-transform shadow-lg">
                <span className="text-[14px] leading-tight" style={{ fontFamily: 'cursive' }}>Explore<br/>Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "Best Selling Product" Carousel */}
      <section className="w-full bg-white pt-24 pb-24 relative z-20">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex flex-col md:flex-row justify-between items-end mb-6">
           <h2 className="font-serif text-[42px] text-[#1A1A1A] flex items-start gap-1 relative tracking-tight">
             Best Selling Product
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="absolute -top-2 -right-6 text-[#1A1A1A]">
                <path d="M12 3L20 18H4L12 3Z"/>
             </svg>
           </h2>
           <div className="flex gap-2 mb-2">
             <button className="w-12 h-10 flex items-center justify-center text-[#666] hover:text-[#1A1A1A] transition-colors">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
             </button>
             <button className="w-12 h-10 flex items-center justify-center text-[#666] hover:text-[#1A1A1A] transition-colors">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12H19M19 12L12 19M19 12L12 5"/></svg>
             </button>
           </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full border-t border-b border-[#EAEAEA]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
             {bestSellers.map((product, idx) => (
                <div key={idx} className={`bg-white border-r border-[#EAEAEA] flex flex-col h-[480px] relative group ${idx === bestSellers.length - 1 ? 'border-r-0 lg:border-r' : ''} ${idx === 0 ? 'lg:border-l' : ''}`}>
                   <button onClick={() => triggerLoading()} className="absolute top-4 right-4 z-20 p-2 text-center">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill={idx === 0 ? "#FF3366" : "#E0E0E0"} stroke="none">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                     </svg>
                   </button>
                   <Link href={`/product/${product.slug}`} onClick={() => triggerLoading()} className="flex-1 w-full relative pt-12 px-8 flex items-center justify-center bg-white">
                     <Image src={product.image} alt={product.name} fill className="object-contain p-10 mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out" />
                   </Link>
                   <div className="w-full flex flex-col bg-white relative z-10 px-8 pb-8">
                     <div className="text-center mb-4">
                       <h3 className="font-bold text-[#1A1A1A] text-[13px] tracking-wide">{product.name}</h3>
                     </div>
                     <div className="w-full flex border border-[#EAEAEA]">
                        <div className="w-1/2 py-2 text-center text-[12px] font-medium text-[#1A1A1A] border-r border-[#EAEAEA]">${product.price}.00</div>
                        <button onClick={() => triggerLoading()} className="w-1/2 py-2 text-center text-[11px] font-medium text-[#1A1A1A] hover:bg-[#FAFAFA] transition-colors">
                          Add to cart
                        </button>
                     </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3.5: High Quality Core Value */}
      <section className="w-full bg-white py-32 px-8 lg:px-12 border-t border-[#EAEAEA]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-xl">
            <h2 className="font-serif text-[42px] md:text-[46px] leading-[1.2] text-[#1A1A1A] mb-6">
              High quality is the only <span className="whitespace-nowrap">c<span className="relative inline-block">o
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#1A1A1A]">
                  <path d="M12 3L20 18H4L12 3Z"/>
                </svg>
              </span>re</span><br />value for us.
            </h2>
            <p className="text-[#666] text-[13px] leading-[2] mb-12 font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button onClick={() => triggerLoading()} className="bg-[#FDB560] text-white px-8 py-3.5 rounded-full text-[13px] font-medium hover:bg-[#FCA036] hover:shadow-[0_10px_20px_rgba(253,181,96,0.3)] transition-all">
              Explore More
            </button>
          </div>
          
          {/* Right Images Collage */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px]">
            {/* Left tall image */}
            <div className="absolute left-0 top-[10%] w-[48%] h-[90%] overflow-hidden bg-[#FAFAFA] shadow-sm">
               <Image src="/images/storytelling_1.jpg" alt="Quality Perfume" fill className="object-cover" />
            </div>
            
            {/* Top right square image */}
            <div className="absolute right-0 top-0 w-[48%] h-[55%] overflow-hidden bg-[#FAFAFA] shadow-sm">
               <Image src="/images/storytelling_2.jpg" alt="Elegant Fragrance" fill className="object-cover" />
            </div>
            
            {/* Bottom right wide image */}
            <div className="absolute right-0 bottom-0 w-[48%] h-[30%] overflow-hidden bg-[#FAFAFA] shadow-sm">
               <Image src="/images/product_base_notes.jpg" alt="Botanical Ingredients" fill className="object-cover" />
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 4: "The Chromatic Vault" Grid */}
      <section className="w-full bg-[#F5F0E6] py-32 border-t border-[#EAEAEA]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <h2 className="font-serif text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-[#666] tracking-tight">
             The Chromatic Vault
           </h2>
           <p className="text-[#555] text-[13px] max-w-sm text-right leading-relaxed font-bold bg-[#F9F9F9] p-4 rounded-xl border border-[#EAEAEA]">
             Six unapologetic pure perfume extracts. Formulated at an intense 35% essence concentration.
           </p>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {chromaticVault.map((item, i) => (
            <div key={i} className={`${item.color} ${item.textColor} rounded-[2.5rem] p-8 flex flex-col h-[420px] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group`}>
              {/* Glass Glare */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent transform -skew-y-12 -translate-y-10 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="text-[10px] uppercase font-bold tracking-widest opacity-90 mb-2 drop-shadow-md">Collection</div>
              <div className="font-serif text-[32px] mb-8 relative z-10 drop-shadow-lg leading-tight font-medium">{item.name}</div>
              
              <div className="bg-white/20 backdrop-blur-xl rounded-full w-full flex-1 flex justify-center items-center mb-6 relative overflow-hidden group-hover:bg-white/30 border border-white/40 transition-colors shadow-inner">
                 <div className="relative w-[90px] h-[140px]">
                    <Image src={item.image} alt={item.name} fill className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700" />
                 </div>
              </div>
              
              <div className="flex justify-between items-center relative z-10 mt-2">
                 <span className="font-bold text-2xl drop-shadow-md">${item.price}</span>
                 <button onClick={() => triggerLoading()} className={`bg-transparent border-2 border-white/60 ${item.textColor} px-6 py-3.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase hover:bg-white hover:text-[#1A1A1A] hover:border-white transition-all shadow-lg backdrop-blur-sm`}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Discovery Set Banner */}
      <section className="w-full bg-[#F5F0E6] py-32 px-8 lg:px-12">
        <div className="bg-gradient-to-r from-[#FFE8D6] via-[#FFD6E8] to-[#D6E0FF] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row max-w-[1300px] mx-auto shadow-2xl border border-white p-2">
          <div className="w-full lg:w-[45%] relative min-h-[450px] lg:min-h-auto rounded-[2.5rem] overflow-hidden shadow-inner">
             <Image src="/images/shop_collection.jpg" fill alt="Discovery Set" className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A26]/80 to-transparent"></div>
          </div>
          <div className="w-full lg:w-[55%] p-10 md:p-16 flex flex-col justify-center bg-white/60 backdrop-blur-xl rounded-[2.5rem] ml-0 lg:-ml-6 relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] border border-white/80">
             <h2 className="font-serif text-5xl text-[#1A0A26] mb-6 leading-tight">Can't Decide on <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E1A] to-[#D47A8F]">One Signature?</span></h2>
             <p className="text-[#444] text-sm mb-10 leading-relaxed font-medium">
               Experience our entire olfactory library with the 3x2ml Discovery Miniature vial set. Your investment is 100% redeemable against any future 100ml flacon purchase.
             </p>
             <div className="flex flex-col gap-5 mb-10">
                <label className="border-2 border-[#FF5E1A] p-5 rounded-2xl flex items-center gap-5 cursor-pointer bg-white shadow-[0_5px_20px_rgba(255,94,26,0.15)] transform hover:-translate-y-1 transition-all">
                  <div className="w-6 h-6 rounded-full border-4 border-[#FF5E1A] bg-white shadow-inner"></div>
                  <div>
                    <div className="font-extrabold text-[15px] text-[#1A1A1A]">The Complete Archive</div>
                    <div className="text-[12px] text-[#FF5E1A] font-bold mt-0.5">All 6 distinct extract profiles</div>
                  </div>
                </label>
                <label className="border-2 border-white p-5 rounded-2xl flex items-center gap-5 cursor-pointer hover:border-[#D47A8F] bg-white/80 backdrop-blur-md shadow-sm transform hover:-translate-y-1 transition-all">
                  <div className="w-6 h-6 rounded-full border-2 border-[#CCC] bg-white"></div>
                  <div>
                    <div className="font-bold text-[15px] text-[#555]">Floral & Oceanic Set</div>
                    <div className="text-[12px] text-[#777] mt-0.5">3 fresh and botanical profiles</div>
                  </div>
                </label>
             </div>
             <button onClick={() => triggerLoading()} className="bg-gradient-to-r from-[#FF5E1A] to-[#D47A8F] text-white px-8 py-5 rounded-full text-[12px] font-extrabold tracking-widest uppercase w-full hover:shadow-[0_10px_30px_rgba(212,122,143,0.4)] hover:scale-[1.02] transition-all">
                Order Discovery Set - $39
             </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: "The 14-Hour Evaporation Curve" Analytics */}
      <section className="w-full bg-[#F5F0E6] py-32 px-8 lg:px-12 border-t border-[#EAEAEA]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#FFD1FF] to-[#8EC5FC] text-[10px] uppercase font-bold tracking-[0.3em] text-[#1A0A26] mb-6 shadow-sm border border-white">Experiment Portrait 04</div>
            <h2 className="font-serif text-[48px] md:text-[56px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A0A26] to-[#5A3E92] mb-6 leading-tight">The 14-Hour Evaporation Curve</h2>
            <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed font-medium">
              Mapped through mass spectrometry. Our pure extracts sustain a linear projection, bypassing traditional top-note burnout for a continuous emotional signature.
            </p>
          </div>
          
          {/* SVG Chart */}
          <div className="w-full h-[350px] relative mb-20 bg-[#FAF7F2] rounded-3xl border-2 border-[#F0F0F0] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <svg viewBox="0 0 800 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="180" x2="800" y2="180" stroke="#EAEAEA" strokeWidth="2" />
              <line x1="0" y1="90" x2="800" y2="90" stroke="#F5F5F5" strokeWidth="2" strokeDasharray="8,8" />
              {/* The Curve */}
              <path d="M 0,180 C 100,50 200,20 300,40 C 500,80 650,150 800,160" fill="none" stroke="url(#curve-grad)" strokeWidth="6" strokeLinecap="round" />
              <path d="M 0,180 C 100,50 200,20 300,40 C 500,80 650,150 800,160 L 800,180 L 0,180 Z" fill="url(#area-grad)" opacity="0.4" />
              <defs>
                <linearGradient id="curve-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF5E1A" />
                  <stop offset="50%" stopColor="#FF3366" />
                  <stop offset="100%" stopColor="#9933FF" />
                </linearGradient>
                <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF3366" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>
              {/* Points */}
              <circle cx="200" cy="28" r="8" fill="#FF5E1A" stroke="#FFF" strokeWidth="3" className="filter drop-shadow-[0_0_10px_#FF5E1A]" />
              <circle cx="500" cy="94" r="8" fill="#FF3366" stroke="#FFF" strokeWidth="3" className="filter drop-shadow-[0_0_10px_#FF3366]" />
              <circle cx="750" cy="158" r="8" fill="#9933FF" stroke="#FFF" strokeWidth="3" className="filter drop-shadow-[0_0_10px_#9933FF]" />
            </svg>
            <div className="flex justify-between text-[11px] font-extrabold text-[#999] uppercase tracking-widest mt-6">
               <span>0H</span>
               <span>4H</span>
               <span>8H</span>
               <span>14H</span>
            </div>
          </div>
          
          {/* 3 Data Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFF0EB] p-10 rounded-[2rem] border border-white shadow-[0_10px_30px_rgba(255,94,26,0.05)] hover:-translate-y-2 transition-transform duration-500">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5E1A] to-[#FF8C00] text-white flex items-center justify-center text-[12px] font-bold mb-6 shadow-md">01</div>
               <h3 className="font-serif text-2xl text-[#4A1A0A] mb-4">The Atmospheric Opening</h3>
               <p className="text-[#7A3E2A] text-[13px] leading-relaxed font-medium">Volatile esters expand rapidly, piercing the immediate 2-meter radius with pure clarity.</p>
            </div>
            <div className="bg-[#FFF0F5] p-10 rounded-[2rem] border border-white shadow-[0_10px_30px_rgba(255,51,102,0.05)] hover:-translate-y-2 transition-transform duration-500">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF3366] to-[#FF5E8E] text-white flex items-center justify-center text-[12px] font-bold mb-6 shadow-md">02</div>
               <h3 className="font-serif text-2xl text-[#4A0A20] mb-4">The Emotional Signature</h3>
               <p className="text-[#7A2A44] text-[13px] leading-relaxed font-medium">The heavy heart notes mature, bonding with skin chemistry to create a bespoke sillage.</p>
            </div>
            <div className="bg-[#F0F5FF] p-10 rounded-[2rem] border border-white shadow-[0_10px_30px_rgba(59,130,246,0.05)] hover:-translate-y-2 transition-transform duration-500">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#00A3E0] text-white flex items-center justify-center text-[12px] font-bold mb-6 shadow-md">03</div>
               <h3 className="font-serif text-2xl text-[#0A204A] mb-4">The Symbiotic Anchor</h3>
               <p className="text-[#2A447A] text-[13px] leading-relaxed font-medium">Resins and woods form a molecular anchor, remaining perceptible on fabric for 48+ hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Quote & Footer */}
      <section className="w-full bg-[#1A0A26] pt-32 text-center text-white flex flex-col items-center relative overflow-hidden">
        {/* Colorful Glowing Backdrops in Footer */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#9933FF] blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF3366] blur-[150px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-[900px] mx-auto px-8 mb-32 relative z-10">
           <div className="flex justify-center gap-2 mb-10 text-[#FFB84D]">
             {[1,2,3,4,5].map(i => <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="url(#star-grad-2)"><defs><linearGradient id="star-grad-2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFD166" /><stop offset="100%" stopColor="#FFB84D" /></linearGradient></defs><path d="M12 2L15 10H22L16 15L18 22L12 18L6 22L8 15L2 10H9L12 2Z"/></svg>)}
           </div>
           <blockquote className="font-serif italic text-4xl md:text-[46px] text-transparent bg-clip-text bg-gradient-to-br from-white via-[#FFE8D6] to-[#D6E0FF] leading-tight mb-12">
             "ONE OF NONE has achieved what few luxury houses dare: uncompromised aesthetic vibrancy paired with masterclass fragrance sillage."
           </blockquote>
           <div className="flex justify-center gap-6 text-[12px] font-bold tracking-widest uppercase text-[#A288C1]">
             <Link href="#" className="hover:text-white transition-colors">Vogue</Link>
             <span>•</span>
             <Link href="#" className="hover:text-white transition-colors">Wallpaper*</Link>
             <span>•</span>
             <Link href="#" className="hover:text-white transition-colors">GQ</Link>
           </div>
        </div>
        
        {/* Footer Data */}
        <footer className="w-full border-t border-white/10 pt-24 pb-12 px-8 md:px-16 text-left relative z-10 bg-[#1A0A26]/50 backdrop-blur-3xl">
           <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
              <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-16">
                 <div className="text-4xl font-serif font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A288C1] mb-8">One of None</div>
                 <p className="text-[#C8B8E0] text-[14px] leading-relaxed mb-10 max-w-sm font-medium">
                   Architectural curations of rare olfactory matter. Hand-poured in Grasse, sculpted in monolithic flacons designed for perpetuity.
                 </p>
                 <div className="flex items-center border-b-2 border-[#5A3E92] pb-3 max-w-sm focus-within:border-[#FF5E8E] transition-colors group">
                    <input type="email" placeholder="JOIN THE INNER CIRCLE" className="bg-transparent w-full outline-none text-[11px] font-bold tracking-widest uppercase text-white placeholder-[#886BAA]" />
                    <button className="text-[#A288C1] group-focus-within:text-[#FF5E8E] transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 19M19 12L12 5"/></svg></button>
                 </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
                 <div className="flex flex-col gap-5">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB84D] to-[#FF3366] text-[11px] font-extrabold tracking-widest uppercase mb-3">Our World</h4>
                    <Link href="#" className="text-[#A288C1] text-[13px] font-bold hover:text-white transition-colors">The Extract Process</Link>
                    <Link href="#" className="text-[#A288C1] text-[13px] font-bold hover:text-white transition-colors">Bespoke Flacons</Link>
                    <Link href="#" className="text-[#A288C1] text-[13px] font-bold hover:text-white transition-colors">Grasse Laboratory</Link>
                 </div>
                 <div className="flex flex-col gap-5">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB84D] to-[#FF3366] text-[11px] font-extrabold tracking-widest uppercase mb-3">Resources</h4>
                    <Link href="#" className="text-[#A288C1] text-[13px] font-bold hover:text-white transition-colors">Shipping & Returns</Link>
                    <Link href="#" className="text-[#A288C1] text-[13px] font-bold hover:text-white transition-colors">Track Order</Link>
                    <Link href="#" className="text-[#A288C1] text-[13px] font-bold hover:text-white transition-colors">Client Care</Link>
                 </div>
                 <div className="flex flex-col gap-5">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB84D] to-[#FF3366] text-[11px] font-extrabold tracking-widest uppercase mb-3">Socials</h4>
                    <Link href="#" className="text-[#A288C1] text-[13px] font-bold hover:text-white transition-colors">Instagram</Link>
                    <Link href="#" className="text-[#A288C1] text-[13px] font-bold hover:text-white transition-colors">TikTok</Link>
                    <Link href="#" className="text-[#A288C1] text-[13px] font-bold hover:text-white transition-colors">Pinterest</Link>
                 </div>
              </div>
           </div>
           
           <div className="max-w-[1400px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#886BAA] text-[11px] font-bold tracking-widest uppercase">
              <div>© 2026 ONE OF NONE</div>
              <div className="flex gap-8">
                 <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                 <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
           </div>
        </footer>
      </section>

    </div>
  );
}
