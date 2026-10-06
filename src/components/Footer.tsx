import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A101D] text-[#FCFCFA] pt-24 pb-12 px-8 lg:px-12 border-t border-[#1A2235]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 border-b border-[#1A2235] pb-24">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            <Link href="/" className="flex flex-col items-start group cursor-pointer mb-8">
              <span className="text-3xl font-headline-md font-bold uppercase tracking-[0.2em] text-[#FCFCFA] group-hover:text-[#C4A45C] transition-colors">One of None</span>
              <span className="text-[9px] font-bold tracking-[0.4em] text-[#C4A45C] uppercase mt-1">Haute Parfumerie</span>
            </Link>
            
            <p className="text-[#8B95A5] text-[13px] leading-relaxed mb-10 font-body-sm max-w-sm">
              Subscribe to the Inner Circle ledger. Receive exclusive invitations to private vault releases and olfactory dispatches from our Grasse atelier.
            </p>
            
            <form className="w-full max-w-md relative flex items-center border-b border-[#3A455C] pb-3 group focus-within:border-[#C4A45C] transition-colors">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="w-full bg-transparent outline-none text-[10px] tracking-[0.2em] uppercase font-bold text-[#FCFCFA] placeholder:text-[#5A657C]"
                required
              />
              <button type="submit" className="absolute right-0 text-[#8B95A5] group-focus-within:text-[#C4A45C] hover:text-[#FCFCFA] transition-colors">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </form>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8 pt-4">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C4A45C] mb-2 font-label-sm">The Vault</h4>
              <Link href="/#chromatic-vault" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">All Extraits</Link>
              <Link href="/product/cologne-discovery-collection" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Discovery Set</Link>
              <Link href="/atelier" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Bespoke Flacons</Link>
              <Link href="/cart" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Your Bag</Link>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C4A45C] mb-2 font-label-sm">Exploration</h4>
              <Link href="/journal" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Olfactive Journal</Link>
              <Link href="/atelier" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Our Atelier</Link>
              <Link href="#" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Rare Resins</Link>
              <Link href="#" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Grasse Laboratory</Link>
            </div>
            
            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C4A45C] mb-2 font-label-sm">Assistance</h4>
              <Link href="#" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Client Care</Link>
              <Link href="#" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Shipping & Returns</Link>
              <Link href="#" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Terms of Service</Link>
              <Link href="#" className="text-[#8B95A5] text-[11px] font-bold tracking-[0.1em] uppercase hover:text-[#FCFCFA] transition-colors">Privacy Policy</Link>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 gap-6">
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#8B95A5] hover:text-[#FCFCFA] transition-colors">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Instagram</span>
            </Link>
            <Link href="#" className="text-[#8B95A5] hover:text-[#FCFCFA] transition-colors">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase">TikTok</span>
            </Link>
            <Link href="#" className="text-[#8B95A5] hover:text-[#FCFCFA] transition-colors">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Pinterest</span>
            </Link>
          </div>
          <p className="text-[10px] text-[#5A657C] font-bold tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} ONE OF NONE. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
