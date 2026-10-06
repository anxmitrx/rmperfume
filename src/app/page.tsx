"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterProducts = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl border-b border-surface-dim shadow-[0_1px_12px_rgba(27,28,26,0.03)]">
        <div className="bg-surface-container-high px-8 md:px-10 py-space-xs text-center flex items-center justify-center gap-space-sm">
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">Complimentary Extrait Duo with Orders Exceeding £240</span>
          <span className="text-on-surface-variant font-body-sm text-body-sm">·</span>
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">Code: ARCHIVE</span>
        </div>
        <div className="h-20 w-full px-8 md:px-10 flex items-center justify-between">
          <nav className="w-1/3 flex items-center justify-start gap-6 whitespace-nowrap">
            <Link href="#chromatic-vault" className="text-xs uppercase tracking-[0.14em] font-medium text-neutral-700 hover:text-neutral-900 transition-colors">The Flacons</Link>
            <Link href="/product/cologne-discovery-collection" className="text-xs uppercase tracking-[0.14em] font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Discovery Vault</Link>
            <Link href="/journal" className="text-xs uppercase tracking-[0.14em] font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Olfactive Journal</Link>
            <Link href="/atelier" className="text-xs uppercase tracking-[0.14em] font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Atelier</Link>
          </nav>
          <div className="w-1/3 flex flex-col items-center justify-center text-center">
            <Link href="#" className="flex flex-col items-center group cursor-pointer">
              <span className="text-2xl font-semibold uppercase tracking-[0.24em] text-neutral-950 transition-colors group-hover:text-primary font-headline-md">One of None</span>
              <span className="text-[9px] font-bold tracking-[0.4em] text-primary font-sans uppercase mt-0.5 whitespace-nowrap">Haute Parfumerie</span>
            </Link>
          </div>
          <div className="w-1/3 flex items-center justify-end gap-6 text-xs uppercase tracking-wider text-neutral-700 whitespace-nowrap">
            <button className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors" type="button">
              <span className="material-symbols-outlined text-[19px]">search</span>
              <span className="hidden xl:inline">Search</span>
            </button>
            <div className="flex items-center tracking-wider gap-1">
              <span className="text-neutral-900 font-semibold">GBP</span>
              <span className="text-neutral-400">/</span>
              <span className="hover:text-neutral-900 cursor-pointer transition-colors">USD</span>
            </div>
            <button className="flex items-center gap-1 hover:text-neutral-900 transition-colors relative" type="button">
              <span className="material-symbols-outlined text-[19px]">favorite</span>
              <span className="w-4 h-4 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[9px] flex items-center justify-center font-bold">1</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors" type="button">
              <span className="material-symbols-outlined text-[19px]">shopping_bag</span>
              <span>Bag [2]</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-primary-container transition-colors shadow-sm">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-28 bg-surface">
        <div className="flex flex-col w-full">
          {/* SECTION 1: EDITORIAL SPLIT HERO */}
          <section className="w-full px-8 lg:px-12 py-12 relative overflow-hidden max-w-[1360px] mx-auto">
            <div className="absolute -top-32 -left-20 w-[550px] h-[550px] rounded-full pointer-events-none -z-10" style={{ background: 'radial-gradient(circle, rgba(255,177,193,0.4) 0%, transparent 70%)' }}></div>
            <div className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full pointer-events-none -z-10" style={{ background: 'radial-gradient(circle, rgba(255,180,161,0.45) 0%, transparent 70%)' }}></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high mb-6 shadow-sm border border-outline-variant/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-semibold text-[11px] text-on-surface uppercase tracking-[0.22em] font-body-sm">The Sensory Spectrum • Pure Perfume Extracts</span>
                </div>
                <h1 className="text-4xl lg:text-[54px] text-on-surface tracking-tight leading-[1.12] mb-6 font-medium font-headline-lg">
                  Wear Your Mood In<br />
                  <span className="inline-block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#F05A28] to-secondary italic font-normal tracking-wide drop-shadow-sm font-headline-lg">High Definition.</span>
                </h1>
                <p className="font-body-md text-base text-on-surface-variant max-w-xl mb-8 leading-relaxed font-normal">
                  Haute parfumerie meets sculptural color. Six unapologetic pure perfume extracts formulated at an intense 35% essence concentration—each encased in monolithic color-blocked flacons inspired by architectural pigments and visceral human emotion.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <a href="#chromatic-vault" className="h-12 px-8 rounded-full bg-inverse-surface text-inverse-on-surface hover:bg-primary transition-all duration-300 flex items-center justify-center font-semibold text-xs tracking-widest uppercase group shadow-lg hover:shadow-primary/30">
                    <span className="font-body-sm">Explore 6 Extracts</span>
                    <span className="material-symbols-outlined ml-2 text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                  <button type="button" onClick={() => document.getElementById('evaporation-curve')?.scrollIntoView({behavior:'smooth'})} className="h-12 px-6 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center font-semibold text-xs tracking-widest uppercase shadow-sm border border-surface-dim">
                    <span className="material-symbols-outlined mr-2 text-[18px] text-primary">neurology</span>
                    <span className="font-body-sm">Take Olfactive Quiz</span>
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-6 w-full max-w-lg bg-surface-container-low/80 backdrop-blur-md p-4 rounded-xl border border-outline-variant/20">
                  <div>
                    <span className="text-3xl text-on-surface block font-medium font-headline-md">35%</span>
                    <span className="text-[10px] font-semibold text-on-surface-variant tracking-wider uppercase font-body-sm">Pure Extrait Oil</span>
                  </div>
                  <div>
                    <span className="text-3xl text-on-surface block font-medium font-headline-md">14 hrs+</span>
                    <span className="text-[10px] font-semibold text-on-surface-variant tracking-wider uppercase font-body-sm">Linear Projection</span>
                  </div>
                  <div>
                    <span className="text-3xl text-on-surface block font-medium font-headline-md">Grasse</span>
                    <span className="text-[10px] font-semibold text-on-surface-variant tracking-wider uppercase font-body-sm">Artisanal Foundry</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                <div className="absolute -inset-3 rounded-2xl bg-secondary-fixed-dim/40 -rotate-1 transform-gpu -z-10"></div>
                <div className="relative bg-surface-container-lowest p-6 rounded-2xl shadow-xl overflow-hidden border border-outline-variant/30">
                  <div className="w-full h-72 rounded-xl overflow-hidden relative group bg-surface-container-high mb-4">
                    <Image src="/images/perfume_off_the_grid.jpg" alt="Sculptural luxury amber glass perfume flacon" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-black text-[10px] uppercase tracking-widest shadow-sm font-label-sm">Limited Edition No. 01</span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-inverse-surface/90 backdrop-blur-md text-inverse-on-surface font-bold text-xs tracking-wider">£135 · 50ml</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] block font-label-sm">Signature Premiere</span>
                      <h2 className="text-2xl text-on-surface font-semibold tracking-wide font-headline-md">The Flacon Sextet</h2>
                    </div>
                    <div className="flex items-center gap-1 bg-surface-container-low px-2.5 py-1 rounded-full border border-surface-dim">
                      <span className="material-symbols-outlined text-primary text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold text-on-surface">4.96</span>
                      <span className="text-[11px] text-on-surface-variant">(2.4k)</span>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-4 leading-relaxed font-body-sm">
                    A radical synthesis of solar resins, nocturnal black plum, and hyper-modern aquatic drift. Sculpted for discerning collectors who wear scent as psychological armor.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-bold tracking-wider uppercase font-label-sm">Solar Amber</span>
                    <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold tracking-wider uppercase font-label-sm">Burgundy Plum</span>
                    <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-wider uppercase font-label-sm">Magnetic Violet</span>
                  </div>
                  <Link href="/product/off-the-grid" className="w-full h-11 rounded-full bg-primary text-on-primary font-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-primary/30 font-label-sm">
                    <span className="material-symbols-outlined text-[17px]">local_mall</span>
                    <span>Reserve Vault Batch · £135</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: OLFACTIVE MOOD FILTER BAR */}
          <section className="w-full px-margin-desktop py-space-md sticky top-20 z-30">
            <div className="max-w-5xl mx-auto bg-surface-container-lowest/85 backdrop-blur-xl p-space-xs rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between gap-space-xs overflow-x-auto">
              <button 
                type="button" 
                onClick={() => filterProducts('all')}
                className={`px-space-lg py-2.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-all whitespace-nowrap ${activeFilter === 'all' ? 'bg-inverse-surface text-inverse-on-surface active' : 'hover:bg-surface-container text-on-surface-variant hover:text-on-surface'}`}
              >
                All Profiles (6)
              </button>
              <button 
                type="button"
                onClick={() => filterProducts('solar')}
                className={`px-space-md py-2.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-all whitespace-nowrap ${activeFilter === 'solar' ? 'bg-inverse-surface text-inverse-on-surface active' : 'hover:bg-surface-container text-on-surface-variant hover:text-on-surface'}`}
              >
                Solar Amber
              </button>
              <button 
                type="button"
                onClick={() => filterProducts('plum')}
                className={`px-space-md py-2.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-all whitespace-nowrap ${activeFilter === 'plum' ? 'bg-inverse-surface text-inverse-on-surface active' : 'hover:bg-surface-container text-on-surface-variant hover:text-on-surface'}`}
              >
                Dark Floral Plum
              </button>
              <button 
                type="button"
                onClick={() => filterProducts('violet')}
                className={`px-space-md py-2.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-all whitespace-nowrap ${activeFilter === 'violet' ? 'bg-inverse-surface text-inverse-on-surface active' : 'hover:bg-surface-container text-on-surface-variant hover:text-on-surface'}`}
              >
                Powdery Iris
              </button>
              <button 
                type="button"
                onClick={() => filterProducts('aquatic')}
                className={`px-space-md py-2.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-all whitespace-nowrap ${activeFilter === 'aquatic' ? 'bg-inverse-surface text-inverse-on-surface active' : 'hover:bg-surface-container text-on-surface-variant hover:text-on-surface'}`}
              >
                Aquatic Drift
              </button>
              <button 
                type="button"
                onClick={() => filterProducts('gourmand')}
                className={`px-space-md py-2.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-all whitespace-nowrap ${activeFilter === 'gourmand' ? 'bg-inverse-surface text-inverse-on-surface active' : 'hover:bg-surface-container text-on-surface-variant hover:text-on-surface'}`}
              >
                Smoky Gourmand
              </button>
              <div className="hidden md:flex items-center pr-space-md pl-space-xs text-outline">
                <span className="material-symbols-outlined text-[18px]">tune</span>
              </div>
            </div>
          </section>

          {/* SECTION 3: THE CHROMATIC VAULT */}
          <section className="w-full px-margin-desktop py-space-xl" id="chromatic-vault">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
              <div>
                <span className="text-xs text-primary font-black uppercase tracking-[0.25em] block mb-1 font-label-sm">The Packaging & Scent Spectrum</span>
                <h2 className="text-3xl lg:text-4xl text-on-surface font-medium tracking-tight font-headline-lg">The Chromatic Vault</h2>
              </div>
              <p className="text-sm text-on-surface-variant max-w-md mt-2 md:mt-0 font-medium font-body-sm">
                Directly drawn from our iconic custom packaging blocks. Six pure perfume extracts engineered to evoke singular states of human presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
              {/* CARD 1: OFF THE GRID */}
              <div className={`group chroma-orange arch-leaf-tl p-6 transition-all duration-500 glow-orange flex-col justify-between shadow-lg ${activeFilter !== 'all' && activeFilter !== 'solar' ? 'hidden' : 'flex'}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] bg-white/20 px-3 py-1 rounded-full text-white backdrop-blur-sm font-label-sm">01 • Solar Amber</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 font-label-sm">15ml Extrait</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase block text-white/80 font-label-sm">The Nomad Extract</span>
                    <h3 className="text-2xl font-semibold tracking-wide text-white mt-0.5 font-headline-md">Off The Grid</h3>
                  </div>
                  <div className="w-full h-56 rounded-xl bg-surface-container-lowest p-4 flex flex-col items-center justify-center relative overflow-hidden mb-5 shadow-inner">
                    <Image src="/images/perfume_off_the_grid.jpg" alt="Off The Grid" width={160} height={160} className="h-40 w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Blood Orange</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Ambergris</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Sandalwood</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block font-label-sm">Standard Flacon</span>
                    <span className="text-2xl text-white font-medium font-headline-md">£125</span>
                  </div>
                  <Link href="/product/off-the-grid" className="h-10 px-5 flex items-center rounded-full bg-white text-[#F05A28] font-black text-xs uppercase tracking-wider hover:bg-surface-container-lowest hover:scale-105 transition-all shadow-md font-label-sm">Acquire Scent</Link>
                </div>
              </div>

              {/* CARD 2: MAIN CHARACTER */}
              <div className={`group chroma-burgundy arch-leaf-tr p-6 transition-all duration-500 glow-burgundy flex-col justify-between shadow-lg ${activeFilter !== 'all' && activeFilter !== 'plum' ? 'hidden' : 'flex'}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] bg-white/20 px-3 py-1 rounded-full text-white backdrop-blur-sm font-label-sm">02 • Nocturnal Floral</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 font-label-sm">15ml Extrait</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase block text-white/80 font-label-sm">Magnetic Decadence</span>
                    <h3 className="text-2xl font-semibold tracking-wide text-white mt-0.5 font-headline-md">Main Character</h3>
                  </div>
                  <div className="w-full h-56 rounded-xl bg-surface-container-lowest p-4 flex flex-col items-center justify-center relative overflow-hidden mb-5 shadow-inner">
                    <Image src="/images/perfume_main_character.jpg" alt="Main Character" width={160} height={160} className="h-40 w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Black Plum</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Damask Rose</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Incense Smoke</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block font-label-sm">Standard Flacon</span>
                    <span className="text-2xl text-white font-medium font-headline-md">£135</span>
                  </div>
                  <Link href="/product/main-character" className="h-10 px-5 flex items-center rounded-full bg-white text-[#581825] font-black text-xs uppercase tracking-wider hover:bg-surface-container-lowest hover:scale-105 transition-all shadow-md font-label-sm">Acquire Scent</Link>
                </div>
              </div>

              {/* CARD 3: STAY A LITTLE LONGER */}
              <div className={`group chroma-violet arch-leaf-br p-6 transition-all duration-500 glow-violet flex-col justify-between shadow-lg ${activeFilter !== 'all' && activeFilter !== 'violet' ? 'hidden' : 'flex'}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] bg-white/20 px-3 py-1 rounded-full text-white backdrop-blur-sm font-label-sm">03 • Powdery Iris</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 font-label-sm">15ml Extrait</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase block text-white/80 font-label-sm">Intimate Sillage</span>
                    <h3 className="text-2xl font-semibold tracking-wide text-white mt-0.5 font-headline-md">Stay A Little Longer</h3>
                  </div>
                  <div className="w-full h-56 rounded-xl bg-surface-container-lowest p-4 flex flex-col items-center justify-center relative overflow-hidden mb-5 shadow-inner">
                    <Image src="/images/perfume_stay_a_little_longer.jpg" alt="Stay A Little Longer" width={160} height={160} className="h-40 w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Florentine Orris</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Cashmeran</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">White Musk</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block font-label-sm">Standard Flacon</span>
                    <span className="text-2xl text-white font-medium font-headline-md">£130</span>
                  </div>
                  <Link href="/product/stay-a-little-longer" className="h-10 px-5 flex items-center rounded-full bg-white text-[#7C4D8E] font-black text-xs uppercase tracking-wider hover:bg-surface-container-lowest hover:scale-105 transition-all shadow-md font-label-sm">Acquire Scent</Link>
                </div>
              </div>

              {/* CARD 4: BETTER THAN YESTERDAY */}
              <div className={`group chroma-azure arch-leaf-tr p-6 transition-all duration-500 glow-azure flex-col justify-between shadow-lg ${activeFilter !== 'all' && activeFilter !== 'aquatic' ? 'hidden' : 'flex'}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] bg-black/10 px-3 py-1 rounded-full text-[#0E2833] backdrop-blur-sm font-label-sm">04 • Coastal Azure</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E2833]/80 font-label-sm">15ml Extrait</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase block text-[#0E2833]/80 font-label-sm">Mineral Renaissance</span>
                    <h3 className="text-2xl font-semibold tracking-wide text-[#0E2833] mt-0.5 font-headline-md">Better Than Yesterday</h3>
                  </div>
                  <div className="w-full h-56 rounded-xl bg-surface-container-lowest p-4 flex flex-col items-center justify-center relative overflow-hidden mb-5 shadow-inner">
                    <Image src="/images/perfume_better_than_yesterday.jpg" alt="Better Than Yesterday" width={160} height={160} className="h-40 w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Sea Air</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Cold Driftwood</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Cardamom</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E2833]/80 block font-label-sm">Standard Flacon</span>
                    <span className="text-2xl text-[#0E2833] font-medium font-headline-md">£120</span>
                  </div>
                  <Link href="/product/better-than-yesterday" className="h-10 px-5 flex items-center rounded-full bg-[#0E2833] text-white font-black text-xs uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all shadow-md font-label-sm">Acquire Scent</Link>
                </div>
              </div>

              {/* CARD 5: BETTER IN PERSON */}
              <div className={`group chroma-amber arch-leaf-tl p-6 transition-all duration-500 glow-amber flex-col justify-between shadow-lg ${activeFilter !== 'all' && activeFilter !== 'solar' ? 'hidden' : 'flex'}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] bg-black/10 px-3 py-1 rounded-full text-[#1F1404] backdrop-blur-sm font-label-sm">05 • Solar Honey Spice</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F1404]/80 font-label-sm">15ml Extrait</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase block text-[#1F1404]/80 font-label-sm">Golden Radiance</span>
                    <h3 className="text-2xl font-semibold tracking-wide text-[#1F1404] mt-0.5 font-headline-md">Better In Person</h3>
                  </div>
                  <div className="w-full h-56 rounded-xl bg-surface-container-lowest p-4 flex flex-col items-center justify-center relative overflow-hidden mb-5 shadow-inner">
                    <Image src="/images/perfume_better_in_person.jpg" alt="Better In Person" width={160} height={160} className="h-40 w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Wild Honey</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Saffron Threads</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Benzoin Tear</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F1404]/80 block font-label-sm">Standard Flacon</span>
                    <span className="text-2xl text-[#1F1404] font-medium font-headline-md">£128</span>
                  </div>
                  <Link href="/product/better-in-person" className="h-10 px-5 flex items-center rounded-full bg-[#1F1404] text-[#D4973B] font-black text-xs uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all shadow-md font-label-sm">Acquire Scent</Link>
                </div>
              </div>

              {/* CARD 6: BAD INFLUENCE */}
              <div className={`group chroma-taupe arch-leaf-br p-6 transition-all duration-500 glow-taupe flex-col justify-between shadow-lg ${activeFilter !== 'all' && activeFilter !== 'gourmand' ? 'hidden' : 'flex'}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] bg-black/10 px-3 py-1 rounded-full text-[#2B1610] backdrop-blur-sm font-label-sm">06 • Smoky Gourmand</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2B1610]/80 font-label-sm">15ml Extrait</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase block text-[#2B1610]/80 font-label-sm">Blonde Tobacco & Vanilla</span>
                    <h3 className="text-2xl font-semibold tracking-wide text-[#2B1610] mt-0.5 font-headline-md">Bad Influence</h3>
                  </div>
                  <div className="w-full h-56 rounded-xl bg-surface-container-lowest p-4 flex flex-col items-center justify-center relative overflow-hidden mb-5 shadow-inner">
                    <Image src="/images/perfume_bad_influence.jpg" alt="Bad Influence" width={160} height={160} className="h-40 w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Blonde Tobacco</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Bourbon Vanilla</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold text-[9px] uppercase tracking-wider font-label-sm">Toasted Tonka</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2B1610]/80 block font-label-sm">Standard Flacon</span>
                    <span className="text-2xl text-[#2B1610] font-medium font-headline-md">£135</span>
                  </div>
                  <Link href="/product/bad-influence" className="h-10 px-5 flex items-center rounded-full bg-[#2B1610] text-[#B88B7D] font-black text-xs uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all shadow-md font-label-sm">Acquire Scent</Link>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: THE ATELIER TASTING SET */}
          <section className="w-full px-margin-desktop py-space-xl">
            <div className="w-full bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl overflow-hidden relative shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                <div className="lg:col-span-6 relative">
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-surface-container-highest">
                    <Image src="/images/shop_collection.jpg" alt="Complete bespoke discovery set showcase" fill className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between text-white">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest">6 × 2ml Pure Extracts Vial Flight</span>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest bg-white/20 px-space-sm py-0.5 rounded-full backdrop-blur-sm">Grasse Hand-Filled</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 flex flex-col items-start pl-0 lg:pl-space-lg">
                  <span className="px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-black uppercase tracking-widest mb-3 font-label-sm">100% Redeemable Investment</span>
                  <h2 className="text-3xl lg:text-4xl text-on-surface font-medium tracking-tight mb-3 font-headline-lg">Can’t Decide on One Signature?</h2>
                  <p className="text-sm text-on-surface-variant mb-6 leading-relaxed font-body-sm">
                    Experience all six extrait formulations in your own rhythm. The complete Discovery Vault delivers 6 × 2ml laboratory vials accompanied by our olfactory blotter journal. The £38 cost is 100% credited toward your first full 50ml flacon purchase.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full mb-8">
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/30">
                      <span className="text-xs text-primary font-bold tracking-wider block mb-1 font-label-sm">01. WEAR ALL 6</span>
                      <p className="text-xs text-on-surface-variant font-medium font-body-sm">Test skin chemistry evaporation over 48 hours.</p>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/30">
                      <span className="text-xs text-primary font-bold tracking-wider block mb-1 font-label-sm">02. FIND RESONANCE</span>
                      <p className="text-xs text-on-surface-variant font-medium font-body-sm">Identify the hue that mirrors your present mood.</p>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/30">
                      <span className="text-xs text-primary font-bold tracking-wider block mb-1 font-label-sm">03. REDEEM £38</span>
                      <p className="text-xs text-on-surface-variant font-medium font-body-sm">Voucher automatically applied upon checkout.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                    <Link href="/product/cologne-discovery-collection" className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary text-on-primary font-black text-xs uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 font-label-sm">
                      <span className="material-symbols-outlined text-[19px]">inventory_2</span>
                      <span>Order Discovery Set • £38</span>
                    </Link>
                    <span className="text-xs font-semibold text-on-surface-variant flex items-center gap-1.5 font-label-sm">
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                      Complimentary carbon-neutral courier
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: THE 14-HOUR EVAPORATION CURVE */}
          <section className="w-full px-margin-desktop py-space-xl" id="evaporation-curve">
            <div className="text-center max-w-2xl mx-auto mb-space-xl">
              <span className="text-xs text-primary font-black uppercase tracking-[0.25em] block mb-2 font-label-sm">Proprietary Formulation</span>
              <h2 className="text-3xl lg:text-4xl text-on-surface font-medium tracking-tight mb-2 font-headline-lg">The 14-Hour Evaporation Curve</h2>
              <p className="text-sm text-on-surface-variant max-w-xl mx-auto font-medium font-body-sm">
                Traditional perfumes disintegrate after 3 hours. Our 35% pure oil formulation unfurls in three staggered dimensional stages over 14 hours.
              </p>
            </div>
            
            <div className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-md max-w-5xl mx-auto">
              <div className="w-full mb-space-xl">
                <svg className="w-full h-auto text-primary" fill="none" viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg">
                  <line stroke="#E4E2DE" strokeDasharray="4 4" strokeWidth="1.5" x1="50" x2="850" y1="30" y2="30"></line>
                  <line stroke="#E4E2DE" strokeDasharray="4 4" strokeWidth="1.5" x1="50" x2="850" y1="100" y2="100"></line>
                  <line stroke="#E4E2DE" strokeDasharray="4 4" strokeWidth="1.5" x1="50" x2="850" y1="170" y2="170"></line>
                  <path d="M 50 170 Q 150 20, 250 35 T 500 70 T 700 110 T 850 160 L 850 190 L 50 190 Z" fill="currentColor" fillOpacity="0.08"></path>
                  <path d="M 50 170 Q 150 20, 250 35 T 500 70 T 700 110 T 850 160" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5"></path>
                  <circle cx="150" cy="30" fill="#F05A28" r="7" stroke="#FFFFFF" strokeWidth="2"></circle>
                  <circle cx="450" cy="65" fill="#7C4D8E" r="7" stroke="#FFFFFF" strokeWidth="2"></circle>
                  <circle cx="750" cy="130" fill="#581825" r="7" stroke="#FFFFFF" strokeWidth="2"></circle>
                  <text fill="#1b1c1a" fontFamily="var(--font-jakarta)" fontSize="11" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="150" y="15">TOP ACCORDS</text>
                  <text fill="#1b1c1a" fontFamily="var(--font-jakarta)" fontSize="11" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="450" y="50">HEART MATRIX</text>
                  <text fill="#1b1c1a" fontFamily="var(--font-jakarta)" fontSize="11" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" x="750" y="115">BASE MOLECULES</text>
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
                <div className="bg-surface-container-low p-space-md rounded-lg relative overflow-hidden">
                  <div className="w-1.5 h-full bg-[#F05A28] absolute top-0 left-0"></div>
                  <div className="pl-space-xs">
                    <span className="font-label-sm text-label-sm text-[#F05A28] uppercase font-bold tracking-widest block mb-1">0 to 2 Hours • High Volatility</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">The Atmospheric Opening</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                      Cold-pressed Blood Orange, Mineral Sea Breeze, Wild Saffron, and Sicilian Bergamot. Radiates up to 6 feet in sillage.
                    </p>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px]">Projection: Immediate</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-lg relative overflow-hidden">
                  <div className="w-1.5 h-full bg-[#7C4D8E] absolute top-0 left-0"></div>
                  <div className="pl-space-xs">
                    <span className="font-label-sm text-label-sm text-[#7C4D8E] uppercase font-bold tracking-widest block mb-1">2 to 7 Hours • Steady Heart</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">The Emotional Signature</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                      Florentine Orris root, Midnight Damask Rose, and Crushed Black Plum fusing seamlessly with organic skin temperature.
                    </p>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px]">Projection: Intimate Aura</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-lg relative overflow-hidden">
                  <div className="w-1.5 h-full bg-[#581825] absolute top-0 left-0"></div>
                  <div className="pl-space-xs">
                    <span className="font-label-sm text-label-sm text-[#581825] uppercase font-bold tracking-widest block mb-1">7 to 14+ Hours • Resinous Base</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">The Perpetuity Anchors</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                      Sun-drenched Ambergris, Cured Blonde Tobacco, Vintage Tonka, and Himalayan Cedar lingering on garments for days.
                    </p>
                    <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px]">Projection: Personal Skin-Scent</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: PRESS ACCOLADES */}
          <section className="w-full px-margin-desktop py-space-xl bg-surface-container-low/50">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-1 text-primary mb-space-md">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <blockquote className="font-headline-lg text-headline-lg italic text-on-surface font-light leading-snug mb-space-lg">
                “ONE OF NONE has achieved what few luxury houses dare: uncompromised aesthetic vibrancy paired with masterclass fragrance sillage. These aren’t mere scents—they are chromatic identities for the skin.”
              </blockquote>
              <cite className="font-label-lg text-label-lg tracking-[0.2em] uppercase text-on-surface-variant not-italic block mb-space-xl">
                — Olfactory Gazette International · Autumn Issue
              </cite>
              <div className="flex flex-wrap items-center justify-center gap-space-xl opacity-60">
                <span className="font-headline-sm text-headline-sm uppercase tracking-widest text-on-surface">Vogue Living</span>
                <span className="font-body-sm text-body-sm text-outline">•</span>
                <span className="font-headline-sm text-headline-sm uppercase tracking-widest text-on-surface">Wallpaper*</span>
                <span className="font-body-sm text-body-sm text-outline">•</span>
                <span className="font-headline-sm text-headline-sm uppercase tracking-widest text-on-surface">Dazed & Confused</span>
                <span className="font-body-sm text-body-sm text-outline">•</span>
                <span className="font-headline-sm text-headline-sm uppercase tracking-widest text-on-surface">Monocle Fragrance</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      {/* FOOTER */}
      <Footer />
    </>
  );
}
