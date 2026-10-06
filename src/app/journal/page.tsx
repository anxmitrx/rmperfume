"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function JournalPage() {
  return (
    <>


      <main className="w-full pt-32 pb-24 px-8 lg:px-12 max-w-5xl mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center">
        <span className="px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-black uppercase tracking-widest mb-6 font-label-sm">Private Ledger</span>
        <h1 className="text-4xl lg:text-6xl text-on-surface font-medium tracking-tight mb-6 font-headline-lg">
          The Olfactive Journal
        </h1>
        <p className="text-base text-on-surface-variant max-w-2xl font-body-md leading-relaxed mb-10">
          Dispatches from our Grasse laboratory. Explore the visceral process of scent creation, ingredient provenance, and architectural design philosophy.
        </p>
        
        <div className="w-full bg-surface-container-low p-12 rounded-2xl border border-outline-variant/30 flex flex-col items-center justify-center">
           <span className="material-symbols-outlined text-4xl text-outline mb-4">edit_document</span>
           <h3 className="font-headline-sm text-2xl text-on-surface mb-2">Compendium in Progress</h3>
           <p className="text-on-surface-variant text-sm font-body-sm max-w-md">Our perfumers are currently transcribing the latest seasonal notes. The journal will be published shortly.</p>
           
           <Link href="/" className="mt-8 h-12 px-8 rounded-full bg-primary text-on-primary font-black text-xs uppercase tracking-widest hover:bg-primary-container transition-all flex items-center justify-center font-label-sm shadow-md">
             Return to Vault
           </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
