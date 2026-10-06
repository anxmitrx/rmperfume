"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-screen font-sans w-full text-[#1A1A1A] overflow-x-hidden flex flex-col selection:bg-[#FF3366] selection:text-white bg-[#FFF6F2]">
      
      {/* SECTION 1: Minimalist Navigation Bar */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 md:px-12 py-8 z-50">
        <div className="flex items-center gap-2 cursor-pointer group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#starburst-grad)" strokeWidth="2" className="group-hover:rotate-180 transition-transform duration-700">
            <defs>
              <linearGradient id="starburst-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB84D" />
                <stop offset="100%" stopColor="#FF3366" />
              </linearGradient>
            </defs>
            <path d="M12 2L15 10H22L16 15L18 22L12 18L6 22L8 15L2 10H9L12 2Z" />
          </svg>
          <span className="text-3xl font-serif font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-[#4A1A1A]">Amour</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 font-medium text-[13px] tracking-wide text-[#1A1A1A]">
          {['Perfume', 'Brand', 'Shop', 'Outfit', 'Guide'].map(item => (
             <Link key={item} href="#" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF5E8E] hover:to-[#9933FF] transition-all font-bold">
               {item}
             </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-6">
          <button className="text-[#1A1A1A] hover:text-[#FF3366] transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <div className="p-[2px] rounded-full bg-gradient-to-r from-[#FFB84D] via-[#FF3366] to-[#9933FF] hover:shadow-[0_0_15px_rgba(255,51,102,0.4)] transition-all">
            <Link href="/cart" className="flex items-center gap-3 bg-white/90 backdrop-blur-sm pl-5 pr-2 py-2 rounded-full group">
              <span className="text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E8E] to-[#9933FF]">Cart</span>
              <div className="w-7 h-7 bg-gradient-to-br from-[#1A1A1A] to-[#333] text-white rounded-full flex items-center justify-center text-[11px] font-bold shadow-md">0</div>
            </Link>
          </div>
        </div>
      </header>

      {/* SECTION 2: Editorial Hero Section */}
      <section className="relative w-full pt-32 pb-32 px-4 md:px-8 flex flex-col items-center overflow-hidden">
        {/* Cinematic Aurora Gradient Mesh */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#FF8F5E] via-[#FF3366] to-[#A233FF] blur-[100px] opacity-60 rounded-[100%] pointer-events-none z-0"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FFB84D] to-transparent blur-[90px] opacity-50 rounded-full pointer-events-none z-0"></div>
        
        <div className="w-full relative flex flex-col items-center mt-10 max-w-[1400px] mx-auto z-10">
          
          {/* Floating Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="absolute left-0 top-16 flex flex-col gap-8 w-48 hidden lg:flex z-20">
            <div className="w-[170px] h-[220px] rounded-t-[100px] rounded-b-2xl overflow-hidden relative shadow-[0_0_40px_rgba(255,102,153,0.3)] bg-white/40 backdrop-blur-md border border-white/60 p-2">
              <div className="w-full h-full relative rounded-t-[90px] rounded-b-xl overflow-hidden">
                 <Image src="/images/perfume_stay_a_little_longer.jpg" alt="Floral Fragrance" fill className="object-cover mix-blend-multiply" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#FF3366]/20 to-transparent"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4 pl-3">
              {[
                { name: "Fresh Fragrances", active: true },
                { name: "Floral Fragrances", active: false },
                { name: "Oceanic Fragrances", active: false }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[12px] font-bold text-[#1A1A1A]">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.active ? 'bg-gradient-to-br from-[#FFB84D] to-[#FF3366] shadow-lg shadow-[#FF3366]/30' : 'bg-white/60 border border-[#FF9EBA]'}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={item.active ? "white" : "#FF9EBA"} strokeWidth="2.5"><path d="M12 2C8 2 4 6 4 10C4 14.4 12 22 12 22C12 22 20 14.4 20 10C20 6 16 2 12 2Z"/></svg>
                  </div>
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Floating Right */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="absolute right-0 top-24 flex flex-col gap-10 w-48 hidden lg:flex items-end z-20">
            <div className="w-[170px] h-[220px] rounded-t-[100px] rounded-b-2xl overflow-hidden relative shadow-[0_0_40px_rgba(153,102,255,0.3)] bg-white/40 backdrop-blur-md border border-white/60 p-2">
               <div className="w-full h-full relative rounded-t-[90px] rounded-b-xl overflow-hidden">
                  <Image src="/images/perfume_off_the_grid.jpg" alt="Classic Fragrance" fill className="object-cover mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9933FF]/20 to-transparent"></div>
               </div>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl p-2 pr-5 rounded-full shadow-[0_10px_30px_rgba(153,102,255,0.2)] mr-4 border border-white/50">
              <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-md"><Image src="/images/perfume_stay_a_little_longer.jpg" fill alt="avatar" className="object-cover" /></div>
                 <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-md"><Image src="/images/perfume_better_in_person.jpg" fill alt="avatar" className="object-cover" /></div>
                 <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-md"><Image src="/images/perfume_main_character.jpg" fill alt="avatar" className="object-cover" /></div>
              </div>
              <div className="text-[10px] font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-[#9933FF]">
                500k+<br/>Reviews
              </div>
            </div>
          </motion.div>
          
          {/* Typography */}
          <div className="text-center flex flex-col items-center z-10 w-full max-w-4xl mx-auto mt-4">
            <h1 className="font-serif text-[80px] md:text-[130px] leading-[0.95] tracking-tight relative z-10 drop-shadow-[0_4px_20px_rgba(255,51,102,0.15)] text-[#1A1A1A]">
              The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFB84D] via-[#FF5E8E] to-[#9933FF]">Fragrance</span>
            </h1>
            <h1 className="font-serif text-[80px] md:text-[130px] leading-[0.95] text-[#1A1A1A] tracking-tight relative z-10 mt-2">
              of Life
            </h1>
            <p className="text-[#333] text-[13px] font-bold mt-10 tracking-widest uppercase bg-white/40 px-6 py-2 rounded-full backdrop-blur-sm border border-white/60 shadow-sm">
              Our Popular Colognes on 2023 at a discount
            </p>
            
            {/* Promotion Badge & Explore Button Group */}
            <div className="relative mt-16 z-30 flex flex-col items-center pb-12">
              <div className="bg-gradient-to-r from-[#FFD1FF] via-[#E0C3FC] to-[#8EC5FC] rounded-[100%] w-[320px] h-[120px] shadow-[0_10px_40px_rgba(153,102,255,0.3)] border-2 border-white flex flex-col items-center justify-start pt-6 relative z-20 overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                 <span className="text-white drop-shadow-md font-serif italic text-[42px] font-bold leading-none mb-1 relative z-10">25% Off</span>
                 <span className="text-[#1A1A1A] text-[11px] font-extrabold uppercase tracking-widest mt-1 relative z-10 bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm">on all New Arrivals</span>
              </div>
              <button className="w-[90px] h-[90px] bg-gradient-to-br from-[#1A1A1A] to-[#444] rounded-full text-white flex flex-col items-center justify-center absolute -bottom-2 z-30 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-all shadow-2xl group border-[4px] border-white">
                <span className="font-sans font-bold text-[10px] uppercase tracking-widest leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FFB84D] group-hover:to-[#FF3366]">Explore<br/>Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "Best Selling Product" Carousel */}
      <section className="w-full bg-white/60 backdrop-blur-lg pt-32 pb-24 border-t border-white/50 relative z-20 shadow-[0_-20px_50px_rgba(255,255,255,0.5)]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
           <h2 className="font-serif text-[42px] text-[#1A1A1A] flex items-start gap-1 relative tracking-tight">
             Best Selling Product
             <svg width="16" height="16" viewBox="0 0 24 24" fill="url(#star-grad)" className="absolute -top-1 -right-6"><defs><linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FFB84D" /><stop offset="100%" stopColor="#FF3366" /></linearGradient></defs><path d="M12 2L15 10H22L16 15L18 22L12 18L6 22L8 15L2 10H9L12 2Z"/></svg>
           </h2>
           <div className="flex gap-4">
             <button className="w-12 h-12 rounded-full border-2 border-[#EAEAEA] flex items-center justify-center text-[#1A1A1A] hover:border-[#FF3366] hover:text-[#FF3366] transition-colors bg-white">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M5 12L12 19M5 12L12 5"/></svg>
             </button>
             <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF5E8E] to-[#9933FF] flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(153,51,255,0.4)] hover:scale-105 transition-all">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12H19M19 12L12 19M19 12L12 5"/></svg>
             </button>
           </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-12">
           {bestSellers.map((product, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className={`bg-white border border-[#EAEAEA] rounded-[2rem] flex flex-col h-[480px] relative group transition-all duration-500 overflow-hidden ${product.glow}`}>
                 <button className="absolute top-6 right-6 z-20 p-2 bg-white/50 backdrop-blur-md rounded-full shadow-sm hover:scale-110 transition-transform">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill={idx === 0 ? "#FF3366" : "none"} stroke={idx === 0 ? "#FF3366" : "#CCC"} strokeWidth="2.5">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                   </svg>
                 </button>
                 <Link href={`/product/${product.slug}`} className="flex-1 w-full relative pt-12 px-8 flex items-center justify-center bg-gradient-to-b from-[#FDFDFD] to-[#F9F9F9]">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <Image src={product.image} alt={product.name} fill className="object-contain p-12 mix-blend-multiply group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-700 ease-out drop-shadow-xl" />
                 </Link>
                 <div className="w-full flex flex-col bg-white relative z-10">
                   <div className="p-6 text-center">
                     <h3 className="font-bold text-[#1A1A1A] text-[16px] tracking-wide">{product.name}</h3>
                   </div>
                   <div className="w-full flex border-t border-[#EAEAEA]">
                      <div className="w-1/2 py-4 text-center text-[14px] font-extrabold text-[#1A1A1A] border-r border-[#EAEAEA] bg-[#FAFAFA]">${product.price}.00</div>
                      <button className="w-1/2 py-4 text-center text-[12px] font-bold tracking-widest uppercase text-[#FF5E8E] bg-white group-hover:bg-gradient-to-r group-hover:from-[#FF5E8E] group-hover:to-[#9933FF] group-hover:text-white transition-all duration-500 relative overflow-hidden">
                        <span className="relative z-10">Add to cart</span>
                      </button>
                   </div>
                 </div>
              </motion.div>
           ))}
        </div>
      </section>

      {/* SECTION 4: "The Chromatic Vault" Grid */}
      <section className="w-full bg-white py-32 border-t border-[#EAEAEA]">
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
                 <button className={`bg-transparent border-2 border-white/60 ${item.textColor} px-6 py-3.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase hover:bg-white hover:text-[#1A1A1A] hover:border-white transition-all shadow-lg backdrop-blur-sm`}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Discovery Set Banner */}
      <section className="w-full bg-white py-32 px-8 lg:px-12">
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
             <button className="bg-gradient-to-r from-[#FF5E1A] to-[#D47A8F] text-white px-8 py-5 rounded-full text-[12px] font-extrabold tracking-widest uppercase w-full hover:shadow-[0_10px_30px_rgba(212,122,143,0.4)] hover:scale-[1.02] transition-all">
                Order Discovery Set - $39
             </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: "The 14-Hour Evaporation Curve" Analytics */}
      <section className="w-full bg-white py-32 px-8 lg:px-12 border-t border-[#EAEAEA]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#FFD1FF] to-[#8EC5FC] text-[10px] uppercase font-bold tracking-[0.3em] text-[#1A0A26] mb-6 shadow-sm border border-white">Experiment Portrait 04</div>
            <h2 className="font-serif text-[48px] md:text-[56px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A0A26] to-[#5A3E92] mb-6 leading-tight">The 14-Hour Evaporation Curve</h2>
            <p className="text-[#666] text-[15px] max-w-2xl mx-auto leading-relaxed font-medium">
              Mapped through mass spectrometry. Our pure extracts sustain a linear projection, bypassing traditional top-note burnout for a continuous emotional signature.
            </p>
          </div>
          
          {/* SVG Chart */}
          <div className="w-full h-[350px] relative mb-20 bg-white rounded-3xl border-2 border-[#F0F0F0] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
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
