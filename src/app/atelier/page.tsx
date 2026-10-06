"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
export default function AtelierPage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl border-b border-surface-dim shadow-[0_1px_12px_rgba(27,28,26,0.03)]">
        <div className="h-20 w-full px-8 md:px-10 flex items-center justify-between">
          <nav className="w-1/3 flex items-center justify-start gap-6 whitespace-nowrap">
            <Link href="/#chromatic-vault" className="text-xs uppercase tracking-[0.14em] font-medium text-neutral-700 hover:text-neutral-900 transition-colors">The Flacons</Link>
            <Link href="/product/cologne-discovery-collection" className="text-xs uppercase tracking-[0.14em] font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Discovery Vault</Link>
            <Link href="/journal" className="text-xs uppercase tracking-[0.14em] font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Olfactive Journal</Link>
            <Link href="/atelier" className="text-xs uppercase tracking-[0.14em] font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Atelier</Link>
          </nav>
          <div className="w-1/3 flex flex-col items-center justify-center text-center">
            <Link href="/" className="flex flex-col items-center group cursor-pointer">
              <span className="text-2xl font-semibold uppercase tracking-[0.24em] text-neutral-950 transition-colors group-hover:text-primary font-headline-md">One of None</span>
              <span className="text-[9px] font-bold tracking-[0.4em] text-primary font-sans uppercase mt-0.5 whitespace-nowrap">Haute Parfumerie</span>
            </Link>
          </div>
          <div className="w-1/3 flex items-center justify-end gap-6 text-xs uppercase tracking-wider text-neutral-700 whitespace-nowrap">
            <button className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors" type="button">
              <span className="material-symbols-outlined text-[19px]">search</span>
              <span className="hidden xl:inline">Search</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors" type="button">
              <span className="material-symbols-outlined text-[19px]">shopping_bag</span>
              <span>Bag</span>
            </button>
          </div>
        </div>
      </header>

      <main className="w-full pt-32 pb-24 px-8 lg:px-12 max-w-5xl mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center">
        <span className="px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-black uppercase tracking-widest mb-6 font-label-sm">Bespoke Consultations</span>
        <h1 className="text-4xl lg:text-6xl text-on-surface font-medium tracking-tight mb-6 font-headline-lg">
          The Atelier
        </h1>
        <p className="text-base text-on-surface-variant max-w-2xl font-body-md leading-relaxed mb-10">
          Step into our flagship sanctuaries in Mayfair, Le Marais, and Ginza. Experience a private olfactory consultation to uncover the flacon that aligns with your essence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
           <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 flex flex-col items-start text-left">
             <div className="w-full h-48 bg-surface-container-highest rounded-xl mb-6 relative overflow-hidden">
                <Image src="/images/storytelling_2.jpg" alt="Mayfair Boutique" fill className="object-cover" />
             </div>
             <span className="font-label-sm text-primary uppercase tracking-widest text-[10px] mb-2 font-bold">London</span>
             <h3 className="font-headline-sm text-2xl text-on-surface mb-2">Mayfair Sanctuary</h3>
             <p className="text-on-surface-variant text-sm font-body-sm mb-6">45 Mount Street, London<br/>W1K 2RZ</p>
             <button className="h-10 px-6 rounded-full border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all font-label-sm mt-auto">Book Appointment</button>
           </div>
           
           <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 flex flex-col items-start text-left">
             <div className="w-full h-48 bg-surface-container-highest rounded-xl mb-6 relative overflow-hidden">
                <Image src="/images/storytelling_1.jpg" alt="Le Marais Boutique" fill className="object-cover" />
             </div>
             <span className="font-label-sm text-primary uppercase tracking-widest text-[10px] mb-2 font-bold">Paris</span>
             <h3 className="font-headline-sm text-2xl text-on-surface mb-2">Le Marais Archive</h3>
             <p className="text-on-surface-variant text-sm font-body-sm mb-6">14 Rue de Bretagne, Paris<br/>75003</p>
             <button className="h-10 px-6 rounded-full border border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all font-label-sm mt-auto">Book Appointment</button>
           </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
