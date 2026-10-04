import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const isDark = theme === "dark";
  const textColor = isDark ? "text-[#e5e5e5]" : "text-gray-900";
  const bgColor = isDark ? "bg-[#0a0a0a]" : "bg-[#fafafa]";
  const borderColor = isDark ? "border-gray-800" : "border-gray-200";

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-black text-[#d4af37] text-[9px] tracking-widest text-center py-2 uppercase font-semibold border-b border-gray-900">
        FREE EXPRESS SHIPPING ON ALL DOMESTIC ORDERS • COMPLIMENTARY 2ML DISCOVERY WITH EVERY PURCHASE
      </div>

      <nav className={`${bgColor} border-b ${borderColor} transition-all duration-300`}>
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="flex-1">
            <button className={`${textColor} hover:opacity-70 transition-opacity`}>
              <Menu className="w-6 h-6" strokeWidth={1} />
            </button>
          </div>
          
          <Link href="/" className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
            <span className={`font-serif text-3xl tracking-[0.2em] ${textColor} leading-none`}>RM PERFUMES</span>
          </Link>

          <div className="flex items-center justify-end gap-6 flex-1">
            <Link href="/product" className={`hidden md:inline-block text-[10px] font-semibold tracking-widest border px-6 py-2 ${textColor} ${borderColor} hover:border-[#d4af37] transition-all`}>
              BUY NOW
            </Link>
            <button className={`${textColor} hover:opacity-70 transition-opacity flex items-center gap-1`}>
              <ShoppingBag className="w-5 h-5" strokeWidth={1} />
              <span className="text-[10px]">0</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
