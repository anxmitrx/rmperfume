import { Menu, ShoppingBag, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar({ theme }: { theme?: string }) {
  return (
    <div className="fixed top-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-[#F9F8F3] text-[#1A1A1A] text-[9px] tracking-widest text-center py-2 uppercase border-b border-[#E5E5E5] font-light">
        FREE EXPRESS SHIPPING ON ALL DOMESTIC ORDERS • COMPLIMENTARY 2ML DISCOVERY WITH EVERY PURCHASE
      </div>

      <nav className="bg-[#F9F8F3] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="flex-1 flex gap-4">
            <Link href="/shop" className="text-[#1A1A1A] hover:opacity-70 transition-opacity">
              <Menu className="w-5 h-5" strokeWidth={1} />
            </Link>
            <Link href="/search" className="text-[#1A1A1A] hover:opacity-70 transition-opacity hidden md:block">
              <Search className="w-5 h-5" strokeWidth={1} />
            </Link>
          </div>
          
          <Link href="/" className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-3xl tracking-[0.1em] text-[#1A1A1A] leading-none whitespace-nowrap">RM PERFUMES</span>
          </Link>

          <div className="flex items-center justify-end gap-6 flex-1">
            <Link href="/signin" className="hidden md:inline-block text-[10px] tracking-widest text-[#1A1A1A] uppercase hover:underline underline-offset-4">
              Sign In
            </Link>
            <Link href="/cart" className="text-[#1A1A1A] hover:opacity-70 transition-opacity flex items-center gap-1">
              <ShoppingBag className="w-5 h-5" strokeWidth={1} />
              <span className="text-[10px]">(0)</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
