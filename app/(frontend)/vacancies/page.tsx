import ScrollReveal from "../components/ScrollReveal";
import { getAllVacancies, POSITION_TYPE_LABELS } from "@/lib/payload-data";

// Rendered on demand so edits made in /admin appear immediately.
export const dynamic = "force-dynamic";

export default async function VacanciesPage() {
  const vacancies = await getAllVacancies();

  return (
    <div className="relative overflow-hidden selection:bg-uva-red selection:text-white bg-academic-50 min-h-screen pb-24">
      <section className="relative pt-32 pb-24 border-b border-academic-200 overflow-hidden bg-gradient-to-br from-white via-academic-50 to-academic-100">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#102a43_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-uva-red mb-4 bg-uva-red/5 px-4 py-1.5 rounded-full border border-uva-red/10">
              Join us
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-academic-900 leading-[1.1] mb-6">
              Vacancies <span className="text-academic-400 font-light italic">& open positions</span>
            </h1>
            <p className="text-lg md:text-xl text-academic-600 leading-relaxed max-w-3xl font-light">
              PhD, postdoc, technician and student opportunities across the Microbiology theme research groups at SILS.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16">
        {vacancies.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {vacancies.map((v, index) => (
              <ScrollReveal key={index} direction="up" delay={0.1 * (index % 2 + 1)}>
                <article className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-academic-200 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col hover:-translate-y-1">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    {v.positionType && (
                      <span className="inline-flex px-3 py-1 text-xs font-bold tracking-[0.15em] uppercase text-white bg-uva-red rounded-lg">
                        {POSITION_TYPE_LABELS[v.positionType] || v.positionType}
                      </span>
                    )}
                    {v.group && (
                      <span className="text-[13px] font-bold tracking-widest uppercase text-academic-500">
                        {v.group}
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-academic-900 mb-4 leading-snug">
                    {v.title}
                  </h2>

                  <p className="text-academic-700 font-light leading-relaxed whitespace-pre-wrap flex-grow">
                    {v.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-academic-200/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-academic-600">
                    {v.location && (
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 text-academic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {v.location}
                      </span>
                    )}
                    {v.deadline && (
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 text-academic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Deadline: {new Date(v.deadline).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                    )}
                  </div>

                  {(v.applyLink || v.contactEmail) && (
                    <div className="mt-6">
                      <a
                        href={v.applyLink || `mailto:${v.contactEmail}`}
                        target={v.applyLink ? "_blank" : undefined}
                        rel={v.applyLink ? "noreferrer" : undefined}
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-widest uppercase text-white bg-academic-900 shadow-md hover:shadow-lg hover:bg-academic-700 transition-all duration-300 rounded-xl hover:-translate-y-0.5"
                      >
                        {v.applyLink ? "Apply / more info" : "Contact us"}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white/60 backdrop-blur rounded-3xl p-12 text-center border border-academic-200 shadow-inner">
              <p className="text-academic-600 text-lg font-light italic">
                No open positions at the moment. Please check back soon, or contact a research group directly.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
