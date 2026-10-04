import Link from "next/link";
import Image from "next/image";

export default function Footer({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const isDark = theme === "dark";
  const bg = isDark ? "bg-[#0a0a0a]" : "bg-[#fafafa]";
  const text = isDark ? "text-gray-200" : "text-gray-900";
  const mutedText = isDark ? "text-gray-400" : "text-gray-500";
  const border = isDark ? "border-gray-800/50" : "border-gray-200";
  const highlight = isDark ? "text-gradient-gold" : "text-gray-900 font-semibold";
  const linkHover = isDark ? "hover:text-white" : "hover:text-black";

  return (
    <footer className={`${bg} ${text} pt-20 pb-10 px-6 border-t ${border} relative overflow-hidden`}>
      {isDark && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>}
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Banner */}
        <div className={`mb-24 relative overflow-hidden border ${border} bg-[#181818] rounded-xl flex flex-col md:flex-row items-center justify-between gap-10 group`}>
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/banner_texture.jpg"
              alt="Banner Background"
              fill
              className="object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="relative z-10 p-12 w-full flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h4 className="text-[#d4af37] text-[9px] font-bold tracking-[0.2em] mb-4 uppercase">From A Private Archive</h4>
              <h3 className="font-serif text-3xl md:text-4xl mb-4 text-white">BESPOKE FLACON ENGRAVING &<br/>DISCOVERY GUARANTEE</h3>
              <p className="text-[11px] md:text-xs text-gray-300 max-w-xl leading-loose font-light mb-6">
                Every "Throne Collection" arrives with a complimentary discovery vial. Experience the scent in private. Unseal the master flacon only when assured the essence aligns with your aura.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 text-[9px] text-gray-300 tracking-widest font-semibold uppercase">
                <div className="flex items-center gap-2"><span className="text-[#d4af37] text-sm">✓</span> COMPLIMENTARY MONOGRAM ENGRAVING</div>
                <div className="flex items-center gap-2"><span className="text-[#d4af37] text-sm">✓</span> INCLUDES 2X 2ML PRELUDE VIALS</div>
              </div>
            </div>
            <button className="bg-[#d4af37] text-black px-8 py-3.5 text-[9px] tracking-[0.2em] font-bold hover:bg-white transition-colors whitespace-nowrap">
              CONTACT CONCIERGE
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className={`font-serif text-2xl tracking-[0.25em] mb-6 ${highlight}`}>RM PERFUMES</h4>
            <p className={`text-sm ${mutedText} mb-8 leading-relaxed font-light`}>
              Enter our olfactory registry to receive confidential private blend releases, seasonal harvest monographs, and discovery invites.
            </p>
            <div className="flex items-center border-b border-gray-600/50 focus-within:border-[#d4af37] transition-colors pb-2">
              <input type="email" placeholder="Email Address" className={`bg-transparent py-2 px-0 w-full focus:outline-none text-sm placeholder:text-gray-600`} />
              <button className={`text-[10px] tracking-[0.2em] font-semibold ml-4 ${highlight}`}>SUBSCRIBE</button>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.25em] mb-8 uppercase text-gray-400">Maison Heritage</h4>
            <ul className={`space-y-4 text-sm ${mutedText} font-light`}>
              <li><Link href="/" className={`transition-all duration-300 ${linkHover}`}>Artisan Archives & Formulas</Link></li>
              <li><Link href="/" className={`transition-all duration-300 ${linkHover}`}>Grasse Flora & Distillates</Link></li>
              <li><Link href="/" className={`transition-all duration-300 ${linkHover}`}>Haute Flacon Glassmaking</Link></li>
              <li><Link href="/" className={`transition-all duration-300 ${linkHover}`}>The Parisian Atelier</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.25em] mb-8 uppercase text-gray-400">Client Concierge</h4>
            <ul className={`space-y-4 text-sm ${mutedText} font-light`}>
              <li><Link href="/" className={`transition-all duration-300 ${linkHover}`}>Private Olfactory Consultation</Link></li>
              <li><Link href="/" className={`transition-all duration-300 ${linkHover}`}>White Glove Courier & Returns</Link></li>
              <li><Link href="/" className={`transition-all duration-300 ${linkHover}`}>Bespoke Flacon Engraving</Link></li>
              <li><Link href="/" className={`transition-all duration-300 ${linkHover}`}>Authenticity & Traceability</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={`pt-8 border-t ${border} flex flex-col md:flex-row items-center justify-between text-[10px] ${mutedText} tracking-widest uppercase`}>
          <p>© 2024 RM PERFUMES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href="/" className={`transition-colors ${linkHover}`}>PRIVACY POLICY</Link>
            <Link href="/" className={`transition-colors ${linkHover}`}>TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
