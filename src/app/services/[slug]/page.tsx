"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const serviceContent: Record<string, any> = {
  "my-rm-perfumes": {
    title: "My RM Perfumes",
    subtitle: "A PERSONAL OLFACTORY JOURNEY",
    image: "/images/storytelling_1.jpg",
    desc: "Discover the perfect scent tailored to your unique aura. Our master perfumers work with you to understand your preferences, lifestyle, and the memories you wish to evoke, guiding you through an exclusive curation of our archives.",
    details: ["Personalised Consultations", "Scent Profiling", "Complimentary Discovery Vials"]
  },
  "complimentary-engraving": {
    title: "Complimentary Engraving",
    subtitle: "MAKE IT TRULY YOURS",
    image: "/images/flacon_noble.jpg",
    desc: "Personalise your bottle with bespoke monogramming. A timeless gesture for yourself or a loved one. Our artisans carefully engrave your initials or a meaningful date directly onto the heavy glass flacon, finishing it with a gold-leaf inlay.",
    details: ["Up to 3 Initials", "Gold or Silver Inlay", "Available on all 100ml Flacons"]
  },
  "in-store-appointments": {
    title: "In-Store Appointments",
    subtitle: "A PRIVATE CONSULTATION",
    image: "/images/storytelling_2.jpg",
    desc: "Book a private consultation with our olfactory experts at one of our flagship boutiques. Experience the full range of our Extraits de Parfum, explore our raw ingredient library, and enjoy complimentary refreshments in our private lounge.",
    details: ["1-on-1 Expert Guidance", "Private Lounge Access", "Exclusive Boutique-only Previews"]
  }
};

export default function Service() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop() || "my-rm-perfumes";
  const content = serviceContent[slug] || serviceContent["my-rm-perfumes"];

  return (
    <main className="bg-[#F9F8F3] min-h-screen text-[#1A1A1A] font-sans">
      <Navbar />
      
      <section className="pt-24 lg:pt-0 lg:min-h-screen flex flex-col lg:flex-row">
        {/* Left: Service Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[50vh] lg:min-h-screen relative overflow-hidden">
          <Image src={content.image} alt={content.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Right: Service Details */}
        <div className="w-full lg:w-1/2 flex items-center p-8 lg:p-24 bg-[#F9F8F3]">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="w-full max-w-lg">
            <h4 className="text-[10px] tracking-[0.25em] font-semibold text-[#555555] uppercase mb-4">{content.subtitle}</h4>
            <h1 className="font-serif text-5xl md:text-6xl mb-8 tracking-wide text-[#1A1A1A] leading-tight">{content.title}</h1>
            
            <p className="text-[#555555] leading-relaxed mb-10 font-light text-sm">
              {content.desc}
            </p>
            
            <div className="mb-12">
              <h3 className="font-serif text-xl mb-4 border-b border-[#E5E5E5] pb-2">The Experience Includes</h3>
              <ul className="space-y-3">
                {content.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-light text-[#555555]">
                    <span className="text-[#1A1A1A] text-xs">◆</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <form className="space-y-6 bg-white p-8 border border-[#E5E5E5] shadow-sm">
              <h3 className="font-serif text-2xl mb-6">Request this Service</h3>
              
              <div>
                <label className="block text-[10px] font-semibold tracking-widest text-[#555555] uppercase mb-2">Full Name</label>
                <input type="text" className="w-full border-b border-[#E5E5E5] bg-transparent py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors" placeholder="e.g. Jane Doe" />
              </div>
              
              <div>
                <label className="block text-[10px] font-semibold tracking-widest text-[#555555] uppercase mb-2">Email Address</label>
                <input type="email" className="w-full border-b border-[#E5E5E5] bg-transparent py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors" placeholder="jane@example.com" />
              </div>

              <button type="button" className="w-full bg-[#1A1A1A] text-white py-4 mt-4 text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-[#333333]">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
