"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CartPage() {
  return (
    <>


      <main className="w-full pt-32 pb-24 px-8 lg:px-12 max-w-6xl mx-auto min-h-[85vh] bg-surface text-on-surface">
        <div className="flex items-center gap-3 mb-12">
          <Link href="/" className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </Link>
          <h1 className="font-headline-lg text-4xl text-on-surface">Your Vault</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex gap-6 pb-8 border-b border-outline-variant/30 relative">
              <div className="w-32 h-40 relative bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm flex-shrink-0 flex items-center justify-center p-2">
                <Image src="/images/perfume_off_the_grid.jpg" alt="Off The Grid" fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-headline-sm text-2xl mb-1 text-on-surface uppercase tracking-wide">Off The Grid</h3>
                  <p className="text-[10px] text-on-surface-variant font-label-sm tracking-widest uppercase mb-4 font-bold">Solar Amber • 15ML Extrait</p>
                  <p className="font-body-md text-on-surface">£125.00</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="border border-outline-variant/50 bg-surface-container-low w-24 flex items-center justify-between px-4 py-1.5 rounded-full">
                    <button className="text-on-surface-variant hover:text-on-surface">-</button>
                    <span className="text-sm font-medium font-body-sm">1</span>
                    <button className="text-on-surface-variant hover:text-on-surface">+</button>
                  </div>
                  <button className="text-[10px] text-on-surface-variant font-label-sm tracking-widest uppercase hover:text-error hover:underline underline-offset-4 transition-colors font-bold">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 pb-8 border-b border-outline-variant/30">
              <div className="w-32 h-40 relative bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm flex-shrink-0 flex items-center justify-center p-2">
                <Image src="/images/flacon_2ml.jpg" alt="Sample" fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    <h3 className="font-headline-sm text-lg text-on-surface uppercase tracking-wide">Complimentary Extrait</h3>
                  </div>
                  <p className="text-[10px] text-on-surface-variant font-label-sm tracking-widest uppercase mb-4 font-bold">2ML Sample</p>
                  <p className="text-sm font-label-sm text-primary uppercase font-bold tracking-wider">Complimentary</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-sm font-bold bg-surface-container px-3 py-1 rounded-full">Applied Automatically</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30 h-fit sticky top-32 shadow-sm">
            <h3 className="font-headline-sm text-2xl mb-6 border-b border-outline-variant/30 pb-4 text-on-surface">Order Summary</h3>
            <div className="space-y-4 text-sm font-body-sm mb-6 text-on-surface-variant">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-on-surface font-semibold">£125.00</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="text-on-surface font-semibold">Complimentary</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <div className="flex justify-between text-xl font-headline-md mb-8 border-t border-outline-variant/30 pt-6 text-on-surface">
              <span>Total</span>
              <span>£125.00</span>
            </div>
            <Link href="#">
              <button className="w-full bg-primary text-on-primary rounded-full py-4 text-[10px] font-bold font-label-sm tracking-[0.2em] uppercase shadow-md hover:shadow-primary/30 hover:bg-primary-container transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">lock</span>
                Proceed to Secure Checkout
              </button>
            </Link>
            <div className="mt-6 flex flex-col gap-3">
              <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-widest font-label-sm flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">verified_user</span> Secure SSL Checkout
              </p>
              <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-widest font-label-sm flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">change_circle</span> Complimentary Returns
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer minimal */}
      <Footer />
    </>
  );
}
