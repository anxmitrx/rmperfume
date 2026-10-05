"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <main className="bg-[#F9F8F3] min-h-screen text-[#1A1A1A] font-sans">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-[1200px] mx-auto min-h-[70vh]">
        <h1 className="font-serif text-4xl mb-12 border-b border-[#E5E5E5] pb-6">Your Shopping Bag</h1>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex gap-6 pb-8 border-b border-[#E5E5E5]">
              <div className="w-32 h-40 relative bg-white border border-[#E5E5E5] p-2">
                <Image src="/images/flacon_orion.jpg" alt="Orion" fill className="object-contain p-4 mix-blend-multiply" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl mb-1">ORION</h3>
                  <p className="text-[10px] text-[#555555] tracking-widest uppercase mb-4">Extrait de Parfum • 100ML</p>
                  <p className="text-sm font-light">₹1,499</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="border border-[#E5E5E5] bg-white w-24 flex items-center justify-between px-4 py-2">
                    <button className="text-[#555555] hover:text-[#1A1A1A]">-</button>
                    <span className="text-sm font-medium">1</span>
                    <button className="text-[#555555] hover:text-[#1A1A1A]">+</button>
                  </div>
                  <button className="text-[10px] text-[#555555] tracking-widest uppercase hover:text-red-500 hover:underline underline-offset-4 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 pb-8 border-b border-[#E5E5E5]">
              <div className="w-32 h-40 relative bg-white border border-[#E5E5E5] p-2">
                <Image src="/images/flacon_2ml.jpg" alt="Sample" fill className="object-contain p-4 mix-blend-multiply" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl mb-1">COMPLIMENTARY DISCOVERY</h3>
                  <p className="text-[10px] text-[#555555] tracking-widest uppercase mb-4">2ML Sample</p>
                  <p className="text-sm font-light text-green-700">FREE</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-[#555555]">Applied Automatically</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-white p-8 border border-[#E5E5E5] h-fit sticky top-32 shadow-sm">
            <h3 className="font-serif text-2xl mb-6 border-b border-[#E5E5E5] pb-4">Order Summary</h3>
            <div className="space-y-4 text-sm font-light mb-6">
              <div className="flex justify-between">
                <span className="text-[#555555]">Subtotal</span>
                <span>₹1,499</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#555555]">Estimated Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#555555]">Estimated Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-serif mb-8 border-t border-[#E5E5E5] pt-4">
              <span>Total</span>
              <span>₹1,499</span>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-[#1A1A1A] text-white py-4 text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-[#333333]">
                Proceed to Checkout
              </button>
            </Link>
            <p className="text-center text-[10px] text-[#555555] mt-4 uppercase tracking-wider">
              Secure Checkout • Complimentary Returns
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
