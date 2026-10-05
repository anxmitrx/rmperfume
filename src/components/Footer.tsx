import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F3] text-[#1A1A1A] pt-16 pb-10 px-6 border-t border-[#E5E5E5] font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Email Signup & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="font-serif text-2xl tracking-[0.1em] mb-4 text-[#1A1A1A]">RM PERFUMES</h4>
            <p className="text-[11px] text-[#555555] mb-6 leading-relaxed font-light">
              Enter our olfactory registry to receive confidential private blend releases, seasonal harvest monographs, and discovery invites.
            </p>
            <div className="flex items-center border-b border-[#1A1A1A] pb-2">
              <Link href="/newsletter-signup">
                <button className="text-[10px] tracking-widest uppercase ml-4 text-[#1A1A1A] hover:text-[#555555]">Sign Up</button>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#1A1A1A]">Customer Care</h4>
            <ul className="space-y-4 text-[11px] tracking-wider text-[#555555] uppercase font-light">
              <li><Link href="/contact" className="hover:text-[#1A1A1A] transition-colors">Contact Us</Link></li>
              <li><Link href="/delivery" className="hover:text-[#1A1A1A] transition-colors">Delivery Information</Link></li>
              <li><Link href="/returns" className="hover:text-[#1A1A1A] transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/track-order" className="hover:text-[#1A1A1A] transition-colors">Track Your Order</Link></li>
              <li><Link href="/faq" className="hover:text-[#1A1A1A] transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#1A1A1A]">About Us</h4>
            <ul className="space-y-4 text-[11px] tracking-wider text-[#555555] uppercase font-light">
              <li><Link href="/our-story" className="hover:text-[#1A1A1A] transition-colors">Our Story</Link></li>
              <li><Link href="/ingredients" className="hover:text-[#1A1A1A] transition-colors">Ingredients & Sourcing</Link></li>
              <li><Link href="/careers" className="hover:text-[#1A1A1A] transition-colors">Careers</Link></li>
              <li><Link href="/corporate-gifting" className="hover:text-[#1A1A1A] transition-colors">Corporate Gifting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[#1A1A1A]">Legal</h4>
            <ul className="space-y-4 text-[11px] tracking-wider text-[#555555] uppercase font-light">
              <li><Link href="/terms" className="hover:text-[#1A1A1A] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#1A1A1A] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-[#1A1A1A] transition-colors">Cookie Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-[#1A1A1A] transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col items-center justify-center text-[9px] text-[#555555] tracking-widest uppercase">
          <p>© 2024 RM PERFUMES. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
