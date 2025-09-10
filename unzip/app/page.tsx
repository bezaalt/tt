import Image from "next/image";
import InstagramEmbed from "@/components/InstagramEmbed";

export default function Page() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black text-white font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-red-600 inline-flex items-center justify-center font-bold">🦈</span>
            <span className="font-semibold tracking-wide">Shark Wraps</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3"><a href="#contact" className="px-4 py-2 bg-red-600 rounded-xl hover:bg-red-700 transition text-sm">Get a Quote</a><a href="tel:16149625969" className="hidden md:inline text-sm text-gray-300 hover:text-white">Call/Text: 614-962-5969</a></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-black via-gray-900 to-red-900 overflow-hidden">
        <Image
          src="/images/sclass-hood.jpg"
          alt="Wrapped S-Class Hood"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-red-500 drop-shadow-lg">
            Shark Wraps
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto text-gray-100">
            Columbus’ Premium Car Wrap & Customization Shop · Call/Text: 614-962-5969
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="px-6 py-3 bg-red-600 text-white rounded-2xl shadow-lg hover:bg-red-700 transition">Get a Quote</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 md:px-16 bg-black">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-12">
          Our Services
        </h2>
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-8">
          {[
            { title: "Vinyl Wraps", desc: "Color change, chrome deletes, hoods, roofs" },
            { title: "Paint Protection Film", desc: "Premium PPF installation for lasting shine" },
            { title: "Wheel Painting", desc: "Custom wheels & brake caliper color" },
            { title: "Starlight Headliners", desc: "Luxury fiber optic roof installs" },
            { title: "Detailing & Ceramic Coating", desc: "Deep cleaning & long-lasting protection" },
            { title: "Tint (Add‑On)", desc: "Pro window tinting for a complete look" },
          ].map((service, idx) => (
            <div key={idx} className="bg-gray-900/70 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition border border-white/5">
              <h3 className="text-2xl font-semibold mb-2 text-red-400">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.desc}</p>
              <a href="#contact" className="inline-block px-4 py-2 bg-red-600 rounded-xl hover:bg-red-700 transition">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 px-6 md:px-16 bg-gray-950">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-12">
          Portfolio
        </h2>
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "/images/charger-hood.jpg", alt: "Widebody Charger Hood Wrap" },
            { src: "/images/camaro-ss.jpg", alt: "Camaro SS Stealth Camo Wrap" },
            { src: "/images/tesla-modely.jpg", alt: "Tesla Model Y Front Wrap" },
            { src: "/images/bmw-f10.jpg", alt: "BMW F10 Satin Blue Wrap" },
          ].map((img, i) => (
            <div key={i} className="relative h-40 md:h-56 w-full rounded-2xl overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl mt-10">
          <InstagramEmbed />
        </div>
      </section>

      {/* Pricing */}
      

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 md:px-16 bg-gray-950">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-12">FAQ</h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {[
            { q: "How long does a full wrap take?", a: "Typically 2–4 days depending on vehicle size and complexity." },
            { q: "What brands do you use?", a: "Premium cast vinyl and TPU/PPF from trusted suppliers. Color‑flip and stealth finishes available." },
            { q: "Is there a warranty?", a: "Yes—material warranty by brand plus our installation guarantee." },
          ].map((f, i) => (
            <details key={i} className="group rounded-xl border border-white/10 bg-black/60 p-4">
              <summary className="cursor-pointer list-none flex justify-between items-center">
                <span className="font-medium">{f.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-gray-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 md:px-16 bg-black text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">Get a Quote</h2>
        <form className="max-w-2xl mx-auto grid gap-4" method="POST" action="/api/contact">
          <input name="name" required type="text" placeholder="Name" className="p-3 rounded-xl bg-gray-900 text-white" />
          <input name="phone" required type="tel" placeholder="Phone" className="p-3 rounded-xl bg-gray-900 text-white" />
          <input name="car" required type="text" placeholder="Car Model" className="p-3 rounded-xl bg-gray-900 text-white" />
          <textarea name="message" required placeholder="Services you want + preferred date" className="p-3 rounded-xl bg-gray-900 text-white"></textarea>
          <button className="px-6 py-3 bg-red-600 rounded-2xl hover:bg-red-700 transition">
            Submit
          </button>
        </form>
        <div className="mt-6 text-gray-400">
          <p>📍 Columbus, Ohio</p>
          <p>📱 (614) 962-5969</p>
          <p>📸 @sharkwraps_</p>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-4 left-0 right-0 mx-auto w-[90%] md:hidden space-y-2">
  <a href="#contact" className="block text-center w-full px-6 py-3 bg-red-600 text-white rounded-2xl shadow-xl">Get a Quote</a>
  <a href="tel:16149625969" className="block text-center w-full px-6 py-3 bg-gray-900 text-white rounded-2xl border border-white/10">Call/Text: 614-962-5969</a>
</div>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-10 border-t border-white/10 bg-black/80 text-sm text-gray-400">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© {year} Shark Wraps. All rights reserved.</span>
          <span>Built with ❤️ for Columbus car culture.</span>
        </div>
      </footer>
    </div>
  );
}
