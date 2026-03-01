import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden selection:bg-uva-red selection:text-white bg-academic-50 min-h-screen">
      <section className="relative pt-12 pb-12 border-b border-academic-200 overflow-hidden bg-gradient-to-br from-white via-academic-50 to-academic-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-uva-red mb-4 bg-uva-red/5 px-4 py-1.5 rounded-full border border-uva-red/10">
              Contact
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-academic-900 leading-[1.1] mb-6">
              Contact <span className="text-academic-400 font-light italic">& location</span>
            </h1>
            <p className="text-lg md:text-xl text-academic-600 leading-relaxed max-w-3xl font-light">
              The Microbiology theme is hosted at the Swammerdam Institute of Life
              Sciences (SILS), on the Science Park campus of the University of
              Amsterdam.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 space-y-24">
        {/* Contact Info Section */}
        <section className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
          <ScrollReveal direction="up" delay={0.2} className="w-full">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-academic-200 shadow-sm flex items-center justify-center w-full h-[280px] group hover:shadow-lg transition-all duration-500">
              <Image
                src="/logo.png"
                alt="Microbiology theme logo"
                width={180}
                height={180}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <article className="bg-[#102a43] text-white rounded-3xl p-10 md:p-12 border border-academic-800 shadow-xl h-full relative overflow-hidden group">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-uva-red/20 blur-3xl rounded-full -mr-10 -mt-10"></div>
                <h3 className="font-serif text-3xl font-bold mb-6 text-white group-hover:text-uva-red/90 transition-colors">General enquiries</h3>
                <p className="text-academic-100 font-light leading-relaxed mb-8 text-lg">
                  For questions about the Microbiology theme, research collaborations or student projects, please contact one of the principal investigators.
                </p>
                <div className="mt-auto pt-6 border-t border-academic-700/50">
                  <p className="text-sm font-bold tracking-widest uppercase text-academic-400 mb-2">Email</p>
                  <a href="mailto:microbiology-theme@sils.uva.nl" className="inline-flex items-center text-lg font-medium text-white hover:text-uva-red transition-colors">
                    <svg className="w-5 h-5 mr-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    microbiology@sils.uva.nl
                  </a>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="h-full">
              <article className="bg-white/60 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-academic-200 shadow-sm hover:shadow-lg transition-all duration-500 h-full group hover:-translate-y-1">
                <h3 className="font-serif text-3xl font-bold text-academic-900 mb-6 group-hover:text-academic-500 transition-colors">Postal & visiting address</h3>
                <div className="text-academic-600 font-light leading-relaxed text-lg space-y-2">
                  <p className="font-medium text-academic-800">Swammerdam Institute of Life Sciences (SILS)</p>
                  <p>University of Amsterdam</p>
                  <p>Science Park 904</p>
                  <p>1098 XH Amsterdam</p>
                  <p>The Netherlands</p>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* Map Section */}
        <section>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl font-bold text-academic-900 mb-6">
                Map & directions
              </h2>
              <p className="text-xl text-academic-600 font-light leading-relaxed">
                SILS is located in the Faculty of Science building at Amsterdam Science Park 904. The campus is easily reachable by train, bus and bicycle.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="relative w-full overflow-hidden rounded-3xl border border-academic-200 shadow-lg bg-academic-100/50 backdrop-blur-md aspect-video md:aspect-[21/9] group">
              <div className="absolute inset-0 bg-academic-900/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
              <iframe
                title="SILS, Science Park 904, Amsterdam"
                src="https://www.google.com/maps?q=Science%20Park%20904,%201098%20XH%20Amsterdam&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
