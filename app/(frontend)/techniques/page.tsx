import ScrollReveal from "../components/ScrollReveal";
import { getAllTechniques } from "@/lib/payload-data";

// Rendered on demand so edits made in /admin appear immediately.
export const dynamic = "force-dynamic";

export default async function TechniquesPage() {
  const techniques = await getAllTechniques();

  return (
    <div className="relative overflow-hidden selection:bg-uva-red selection:text-white bg-academic-50 min-h-screen pb-24">
      <section className="relative pt-32 pb-24 border-b border-academic-200 overflow-hidden bg-gradient-to-br from-white via-academic-50 to-academic-100">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#102a43_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-uva-red mb-4 bg-uva-red/5 px-4 py-1.5 rounded-full border border-uva-red/10">
              Methods & Expertise
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-academic-900 leading-[1.1] mb-6">
              Techniques <span className="text-academic-400 font-light italic">& technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-academic-600 leading-relaxed max-w-3xl font-light">
              State-of-the-art methods developed and applied across the Microbiology theme — from RNA-centric sequencing to advanced imaging and mass spectrometry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16">
        {techniques.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((t, index) => (
              <ScrollReveal key={index} direction="up" delay={0.1 * (index % 3 + 1)}>
                <article className="group bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-academic-200 shadow-md hover:shadow-xl hover:bg-white transition-all duration-500 h-full flex flex-col hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-academic-300 group-hover:bg-uva-red transition-colors duration-500"></div>
                  {t.category && (
                    <span className="inline-flex self-start px-3 py-1 mb-4 text-xs font-bold tracking-[0.15em] uppercase text-academic-600 bg-academic-100 rounded-lg group-hover:bg-uva-red group-hover:text-white transition-colors">
                      {t.category}
                    </span>
                  )}
                  <h2 className="text-2xl font-bold text-academic-900 mb-3 group-hover:text-uva-red transition-colors">
                    {t.name}
                  </h2>
                  <p className="text-academic-700 font-light leading-relaxed whitespace-pre-wrap flex-grow">
                    {t.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-academic-200/50 flex items-center justify-between gap-4">
                    {t.group && (
                      <span className="text-[13px] font-bold tracking-widest uppercase text-academic-500">
                        {t.group}
                      </span>
                    )}
                    {t.link && (
                      <a
                        href={t.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-academic-900 group-hover:text-uva-red transition-colors ml-auto"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white/60 backdrop-blur rounded-3xl p-12 text-center border border-academic-200 shadow-inner">
              <p className="text-academic-600 text-lg font-light italic">
                Techniques will appear here as our groups add them.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
