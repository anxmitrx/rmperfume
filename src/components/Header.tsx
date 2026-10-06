"use client";

import Link from "next/link";
import Image from "next/image";
import { useLoading } from "@/components/LoadingScreen";

export function Header() {
  const { triggerLoading } = useLoading();

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 md:px-12 py-4 z-[100] bg-white/50 backdrop-blur-lg border-b border-white/50 shadow-sm transition-all duration-300">
      <Link href="/" onClick={() => triggerLoading()} className="flex items-center cursor-pointer relative w-[200px] h-[25px] md:h-[35px] lg:w-[280px] lg:h-[40px] z-10">
         <Image src="/images/logo2.png" alt="ONE OF NONE" fill className="object-contain object-left mix-blend-multiply" priority />
      </Link>
      
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-10 font-medium text-[13px] tracking-wide text-[#1A1A1A] z-10">
        {['Perfume', 'Brand', 'Shop', 'Outfit', 'Guide'].map(item => (
           <Link key={item} href="#" onClick={() => triggerLoading()} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF5E8E] hover:to-[#9933FF] transition-all font-bold">
             {item}
           </Link>
        ))}
      </nav>
      
      <div className="flex items-center gap-6 z-10">
        <button className="text-[#1A1A1A] hover:text-[#FF3366] transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#FFB84D] via-[#FF3366] to-[#9933FF] hover:shadow-[0_0_15px_rgba(255,51,102,0.4)] transition-all">
          <Link href="/cart" onClick={() => triggerLoading()} className="flex items-center gap-3 bg-white/90 backdrop-blur-sm pl-5 pr-2 py-2 rounded-full group">
            <span className="text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E8E] to-[#9933FF]">Cart</span>
            <div className="w-7 h-7 bg-gradient-to-br from-[#1A1A1A] to-[#333] text-white rounded-full flex items-center justify-center text-[11px] font-bold shadow-md">0</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
