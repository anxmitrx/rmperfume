"use client";


import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

type Note = {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
};

type Product = {
  name: string;
  size: string;
  tags: string[];
  mood: string;
  quote: string;
  price: string;
  originalPrice: string;
  image: string;
  desc: string;
  notes: Note[];
};

const productData: Record<string, Product> = {
  "off-the-grid": {
    name: "Off The Grid",
    size: "15ml Extrait",
    tags: ["SOLAR AMBER", "NOMAD", "EXTRAIT"],
    mood: "THE NOMAD EXTRACT",
    quote: "\"A radical synthesis of solar resins and wild amber.\"",
    price: "125",
    originalPrice: "145",
    image: "/images/perfume_off_the_grid.jpg",
    desc: "Crafted from rare solar amber and steeped in warm resins, offering a sense of complete disconnect.",
    notes: [
      {
        title: "The Prelude",
        subtitle: "BLOOD ORANGE",
        desc: "A rich opening of cold-pressed blood orange that delivers an immediate opulent impact.",
        image: "/images/flacon_2ml.jpg"
      },
      {
        title: "The Heart",
        subtitle: "AMBERGRIS",
        desc: "Resinous tear drops harvested and aged, adding a deep spiritual warmth and oceanic depth.",
        image: "/images/storytelling_2.jpg"
      },
      {
        title: "The Climax",
        subtitle: "SANDALWOOD",
        desc: "An enduring foundation of dry sandalwood layered with our proprietary accord for a 14-hour sillage.",
        image: "/images/product_base_notes.jpg"
      }
    ]
  },
  "main-character": {
    name: "Main Character",
    size: "15ml Extrait",
    tags: ["BURGUNDY PLUM", "NOCTURNAL", "EXTRAIT"],
    mood: "MAGNETIC DECADENCE",
    quote: "\"Commanding presence through dark florals.\"",
    price: "135",
    originalPrice: "160",
    image: "/images/perfume_main_character.jpg",
    desc: "A powerful combination of crushed plum and damask rose.",
    notes: [
      {
        title: "The Prelude",
        subtitle: "BLACK PLUM",
        desc: "Rich, syrupy dark fruit notes.",
        image: "/images/flacon_2ml.jpg"
      },
      {
        title: "The Heart",
        subtitle: "DAMASK ROSE",
        desc: "Velvety florals that bloom aggressively.",
        image: "/images/storytelling_2.jpg"
      },
      {
        title: "The Climax",
        subtitle: "INCENSE SMOKE",
        desc: "A lingering, mysterious smokiness.",
        image: "/images/product_base_notes.jpg"
      }
    ]
  },
  "stay-a-little-longer": {
    name: "Stay A Little Longer",
    size: "15ml Extrait",
    tags: ["POWDERY IRIS", "INTIMATE", "EXTRAIT"],
    mood: "INTIMATE SILLAGE",
    quote: "\"Like a memory that refuses to fade.\"",
    price: "130",
    originalPrice: "155",
    image: "/images/perfume_stay_a_little_longer.jpg",
    desc: "A delicate, hauntingly beautiful powdery floral.",
    notes: [
      {
        title: "The Prelude",
        subtitle: "FLORENTINE ORRIS",
        desc: "Powdery, buttery, and exceptionally rare.",
        image: "/images/flacon_2ml.jpg"
      },
      {
        title: "The Heart",
        subtitle: "CASHMERAN",
        desc: "A fuzzy, warm, and comforting embrace.",
        image: "/images/storytelling_2.jpg"
      },
      {
        title: "The Climax",
        subtitle: "WHITE MUSK",
        desc: "A clean, persistent second-skin effect.",
        image: "/images/product_base_notes.jpg"
      }
    ]
  },
  "better-than-yesterday": {
    name: "Better Than Yesterday",
    size: "15ml Extrait",
    tags: ["COASTAL AZURE", "AQUATIC", "EXTRAIT"],
    mood: "MINERAL RENAISSANCE",
    quote: "\"Cold driftwoods and the restorative power of the sea.\"",
    price: "120",
    originalPrice: "140",
    image: "/images/perfume_better_than_yesterday.jpg",
    desc: "An invigorating aquatic drift for total renewal.",
    notes: [
      {
        title: "The Prelude",
        subtitle: "SEA AIR",
        desc: "Sharp, salty, and instantly refreshing.",
        image: "/images/flacon_2ml.jpg"
      },
      {
        title: "The Heart",
        subtitle: "COLD DRIFTWOOD",
        desc: "Sun-bleached woods washed ashore.",
        image: "/images/storytelling_2.jpg"
      },
      {
        title: "The Climax",
        subtitle: "CARDAMOM",
        desc: "A cool spice that cuts through the salt.",
        image: "/images/product_base_notes.jpg"
      }
    ]
  },
  "better-in-person": {
    name: "Better In Person",
    size: "15ml Extrait",
    tags: ["SOLAR HONEY", "SPICE", "EXTRAIT"],
    mood: "GOLDEN RADIANCE",
    quote: "\"Warm, viscous, and unapologetically rich.\"",
    price: "128",
    originalPrice: "150",
    image: "/images/perfume_better_in_person.jpg",
    desc: "A golden elixir of honey and saffron.",
    notes: [
      {
        title: "The Prelude",
        subtitle: "WILD HONEY",
        desc: "Sweet, animalic, and incredibly sticky.",
        image: "/images/flacon_2ml.jpg"
      },
      {
        title: "The Heart",
        subtitle: "SAFFRON THREADS",
        desc: "Leather-like spice with a red-gold hue.",
        image: "/images/storytelling_2.jpg"
      },
      {
        title: "The Climax",
        subtitle: "BENZOIN TEAR",
        desc: "Vanilla-like warmth that anchors the sweetness.",
        image: "/images/product_base_notes.jpg"
      }
    ]
  },
  "bad-influence": {
    name: "Bad Influence",
    size: "15ml Extrait",
    tags: ["SMOKY GOURMAND", "TOBACCO", "EXTRAIT"],
    mood: "BLONDE TOBACCO & VANILLA",
    quote: "\"An intoxicating blend of bad habits.\"",
    price: "135",
    originalPrice: "165",
    image: "/images/perfume_bad_influence.jpg",
    desc: "Rich tobacco and toasted tonka for the unapologetic.",
    notes: [
      {
        title: "The Prelude",
        subtitle: "BLONDE TOBACCO",
        desc: "Dry, leafy, and inherently sophisticated.",
        image: "/images/flacon_2ml.jpg"
      },
      {
        title: "The Heart",
        subtitle: "BOURBON VANILLA",
        desc: "Deep, boozy, and dangerously sweet.",
        image: "/images/storytelling_2.jpg"
      },
      {
        title: "The Climax",
        subtitle: "TOASTED TONKA",
        desc: "Almond-like nuances with a smoky finish.",
        image: "/images/product_base_notes.jpg"
      }
    ]
  },
  "cologne-discovery-collection": {
    name: "DISCOVERY VAULT",
    size: "6x 2ML",
    tags: ["UNISEX", "DISCOVERY", "SET"],
    mood: "EXPLORATION - JOURNEYS - THE UNDECIDED",
    quote: "\"Six masterpieces waiting to be unlocked.\"",
    price: "38.00",
    originalPrice: "50.00",
    image: "/images/shop_collection.jpg",
    desc: "A curated wardrobe of our six iconic scents.",
    notes: [
      {
        title: "The Selection",
        subtitle: "CURATED MASTERPIECES",
        desc: "Contains 2ml miniature flacons of Off The Grid, Main Character, Stay A Little Longer, Better Than Yesterday, Better In Person, and Bad Influence.",
        image: "/images/shop_collection.jpg"
      },
      {
        title: "The Presentation",
        subtitle: "BESPOKE PACKAGING",
        desc: "Housed in a sustainable, hand-crafted presentation box.",
        image: "/images/storytelling_1.jpg"
      },
      {
        title: "The Guarantee",
        subtitle: "REDEEMABLE VALUE",
        desc: "The full value of this discovery set can be redeemed against your next 50ml full-size flacon purchase.",
        image: "/images/flacon_2ml.jpg"
      }
    ]
  }
};

export default function ProductPage() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop() || "off-the-grid";
  const product = productData[slug] || productData["off-the-grid"];
  
  return (
    <main className="bg-[#FCFCFA] min-h-screen text-[#1A1A1A] selection:bg-[#B3441B] selection:text-white">


      {/* Product Hero */}
      <section className="pt-24 lg:pt-20 lg:min-h-screen flex flex-col lg:flex-row bg-[#FCFCFA]">
        {/* Left: Product Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-10 min-h-[50vh] lg:min-h-screen relative">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-white border border-[#F0EFEA]/60">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
            <div className="absolute bottom-6 left-6 font-label-sm text-[9px] tracking-[0.25em] font-bold text-[#1A1A1A] uppercase bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
              {product.size}
            </div>
          </motion.div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 bg-[#FCFCFA]">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="w-full max-w-lg">
            <span className="inline-block px-3 py-1 bg-[#F3F2EC] text-[#555] text-[9px] font-bold tracking-[0.25em] uppercase font-label-sm mb-6 rounded-full">
              {product.mood}
            </span>
            
            <h1 className="font-headline-lg text-5xl md:text-[64px] mb-4 tracking-tight text-[#1A1A1A] leading-none">
              {product.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-2 text-[9px] tracking-[0.2em] font-bold text-[#555] mb-8 uppercase font-label-sm">
              {product.tags.map((tag: string, i: number) => (
                <span key={i} className="bg-white border border-[#EBEAE5] px-3 py-1.5 rounded-full shadow-sm">{tag}</span>
              ))}
            </div>
            
            <p className="font-headline-sm italic mb-10 border-b border-[#EBEAE5] pb-8 text-xl text-[#333] font-light">
              {product.quote}
            </p>
            
            <div className="mb-10">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-3xl font-headline-md text-[#1A1A1A]">£{product.price}</span>
                <span className="text-sm text-[#888] line-through mb-1">£{product.originalPrice}</span>
              </div>
              <p className="text-[11px] text-[#666] font-body-sm tracking-wide">Incl. of all taxes. Free express shipping on orders over £100.</p>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="border border-[#EBEAE5] bg-white rounded-full w-28 flex items-center justify-between px-5 shadow-sm">
                <button className="text-[#888] hover:text-[#1A1A1A] transition-colors">-</button>
                <span className="text-sm font-medium font-body-sm text-[#1A1A1A]">1</span>
                <button className="text-[#888] hover:text-[#1A1A1A] transition-colors">+</button>
              </div>
              <Link href="/cart" className="flex-1">
                <button className="w-full rounded-full bg-[#A83D16] text-white py-4 text-[11px] font-bold tracking-[0.2em] hover:bg-[#8B3212] transition-colors uppercase font-label-sm shadow-lg shadow-[#A83D16]/20 flex justify-center items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">local_mall</span> Add to Vault
                </button>
              </Link>
            </div>
            <p className="text-[11px] text-[#555] mb-10 font-body-sm flex items-center gap-2 font-medium tracking-wide">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span> 
              Ships securely within 24 hours.
            </p>

            {/* Promos */}
            <div className="border border-[#EBEAE5] rounded-xl bg-white flex items-stretch overflow-hidden shadow-sm">
              <div className="bg-[#A83D16] text-white text-[9px] w-8 flex items-center justify-center shrink-0">
                <div className="-rotate-90 whitespace-nowrap tracking-widest uppercase font-bold">Complimentary</div>
              </div>
              <div className="p-5 py-4">
                <div className="text-[10px] font-bold mb-1.5 font-label-sm text-[#1A1A1A] uppercase tracking-widest">A Mini Surprise</div>
                <p className="text-[11px] text-[#666] leading-relaxed font-body-sm">Get a complimentary 2ml Extrait vial with every order to test before opening the seal.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture of the Scent */}
      <section className="py-32 px-8 lg:px-12 max-w-6xl mx-auto bg-[#FCFCFA] relative z-10">
        <div className="text-center mb-24">
          <h4 className="text-[10px] font-bold tracking-[0.3em] text-[#999] mb-4 uppercase font-label-sm">Sensorial Cartography</h4>
          <h2 className="font-headline-lg text-4xl md:text-[52px] mb-6 text-[#0A101D]">Architecture of the Scent</h2>
          <p className="text-[#777] max-w-2xl mx-auto text-[13px] leading-relaxed font-body-sm">
            Crafted in limited seasonal yields. Each flacon captures botanical extractions formulated with patience, matured in French oak to realize peak harmonic resonance.
          </p>
        </div>

        <div className="space-y-40">
          {product.notes.map((note: Note, index: number) => {
            const isEven = index % 2 === 0;
            const blobColors = ["bg-[#FFF5ED]", "bg-[#F7F2FA]", "bg-[#F4F4F4]"];
            const blobClass = blobColors[index % blobColors.length];
            const pillTexts = ["01 | TOP NOTES", "02 | HEART ESSENCE", "03 | THE RITUAL"];
            const pillText = pillTexts[index % pillTexts.length];
            const pillPosition = isEven ? "bottom-4 right-4" : "bottom-4 left-4";

            return (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 lg:gap-24`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 1 ? 'pl-0 md:pl-8' : 'pr-0 md:pr-8'} flex flex-col justify-center`}>
                  <h4 className="font-headline-sm italic text-2xl text-[#C4A45C] mb-3">{note.title}</h4>
                  <h3 className="font-headline-md text-3xl mb-4 text-[#0A101D] uppercase tracking-wide">{note.subtitle}</h3>
                  <p className="text-[10px] tracking-[0.25em] text-[#888] uppercase font-bold mb-6">{index === 0 ? 'A LUMINOUS PUNCTURE THROUGH MORNING FOG' : index === 1 ? 'VELVETEEN GREEN SHADOWS ON WET STONE' : 'AN INDELIBLE MEMORY THAT OUTLIVES THE NIGHT'}</p>
                  <p className="text-[#555] leading-relaxed text-[13px] font-body-sm">
                    {note.desc}
                  </p>
                  
                  {/* Conditional Bespoke Blocks */}
                  {index === 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-[#EBEAE5]">
                      <div>
                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#999] uppercase mb-1">Sillage</p>
                        <p className="text-xs font-semibold text-[#1A1A1A]">0 to 45m</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#999] uppercase mb-1">Extraction</p>
                        <p className="text-xs font-semibold text-[#1A1A1A]">CO₂ Pure</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#999] uppercase mb-1">Concentration</p>
                        <p className="text-xs font-semibold text-[#1A1A1A]">30% Extrait</p>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="mt-8 bg-[#F9F9F9] p-5 rounded-lg flex gap-4 items-start border border-[#F0F0F0]">
                      <span className="material-symbols-outlined text-[#1A1A1A] mt-0.5 text-[20px]">science</span>
                      <div>
                        <h5 className="text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase mb-1">Double Distillation Protocol</h5>
                        <p className="text-[11px] text-[#666] leading-relaxed">Purified without heat degradation to preserve volatile floral esters.</p>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="mt-8 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-[#0A101D] text-white flex items-center justify-center text-[9px] font-bold rounded-sm mt-0.5 shrink-0">1</div>
                        <p className="text-[11px] text-[#555]">Depress the atomizer at 15cm across lateral pulse points.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-[#0A101D] text-white flex items-center justify-center text-[9px] font-bold rounded-sm mt-0.5 shrink-0">2</div>
                        <p className="text-[11px] text-[#555]">Allow micro-droplets to settle naturally without rubbing.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-[#0A101D] text-white flex items-center justify-center text-[9px] font-bold rounded-sm mt-0.5 shrink-0">3</div>
                        <p className="text-[11px] text-[#555]">Layer over cuffs or raw silk lapels for infinite sillage.</p>
                      </div>
                      <Link href="#" className="inline-block mt-6 text-[10px] font-bold tracking-[0.2em] text-[#0A101D] uppercase border-b border-[#0A101D] pb-1 hover:text-[#A83D16] hover:border-[#A83D16] transition-colors w-max">
                        ACQUIRE {product.name.toUpperCase()} 100ML EXTRAIT →
                      </Link>
                    </div>
                  )}
                </div>
                
                <div className="w-full md:w-7/12 relative">
                   <div className={`absolute -inset-5 md:-inset-8 rounded-[2.5rem] ${blobClass} -z-10 ${isEven ? 'translate-x-4' : '-translate-x-4'} translate-y-4`}></div>
                   <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                     <Image src={note.image} alt={note.title} fill className="object-cover" />
                     <div className={`absolute ${pillPosition} bg-white text-[#1A1A1A] text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-md`}>
                       {pillText}
                     </div>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Discovery Set Cross-Sell */}
      <section className="py-24 px-8 lg:px-12 max-w-[1400px] mx-auto bg-[#FCFCFA]">
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-[#EBEAE5] flex flex-col md:flex-row">
          <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-[450px]">
            <Image src="/images/shop_collection.jpg" alt="Discovery Set" fill className="object-cover" />
          </div>
          <div className="w-full md:w-7/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
            <span className="text-[9px] font-bold tracking-[0.3em] text-[#999] uppercase mb-5 font-label-sm">Personal Olfactory Guidance</span>
            <h2 className="font-headline-lg text-3xl md:text-[42px] mb-6 text-[#0A101D] leading-tight">Unsure if {product.name} suits your presence?</h2>
            <p className="text-[#666] font-body-sm text-[13px] leading-relaxed mb-10 max-w-lg">
              Request our 3×2ml Discovery Miniature vial set. Your investment is 100% redeemable against your future 100ml flacon purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/product/cologne-discovery-collection" className="h-12 px-8 flex items-center justify-center border border-[#EBEAE5] text-[#1A1A1A] font-bold text-[9px] tracking-[0.2em] uppercase hover:bg-[#F9F9F9] transition-colors rounded-sm">
                Order Discovery Set
              </Link>
              <button className="h-12 px-8 flex items-center justify-center bg-[#0A101D] text-white font-bold text-[9px] tracking-[0.2em] uppercase shadow-lg hover:bg-[#222] transition-colors rounded-sm">
                Order {product.name} Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <Footer />
    </main>
  );
}
