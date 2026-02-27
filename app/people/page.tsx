// app/people/page.tsx
import { researchGroups } from "@/data/researchGroups";
import ScrollReveal from "../components/ScrollReveal";

export default function PeoplePage() {
  const groups = researchGroups as any[];

  // Collect PIs from groups
  const pis = groups
    .filter((g: any) => g.pi)
    .map((g: any) => ({
      name: g.pi,
      group: g.name,
      role: g.role || "Principal Investigator",
      email: g.contactEmail,
    }))
    // optional: sort alphabetically by name
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="section page-with-watermark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pis.map((pi, idx) => (
            <ScrollReveal key={`${pi.name}-${idx}`} direction="up" delay={0.1 * (idx % 4 + 1)}>
              <article className="group bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-academic-200/60 shadow-md hover:shadow-xl hover:bg-white transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
                {/* Accent line instead of circle */}
                <div className="w-12 h-1 bg-academic-300 rounded-full mb-6 group-hover:bg-uva-red transition-colors duration-500"></div>

                <h3 className="text-2xl font-bold text-academic-900 mb-2 group-hover:text-uva-red transition-colors duration-300">
                  {pi.name}
                </h3>
                <p className="text-[13px] font-bold tracking-widest uppercase text-academic-500 mb-4">
                  {pi.role}
                </p>
                <p className="text-academic-700 font-medium mb-6 flex-grow leading-relaxed">
                  {pi.group}
                </p>

                {pi.email && (
                  <div className="mt-auto pt-4 border-t border-academic-200/50">
                    <a
                      href={`mailto:${pi.email}`}
                      className="inline-flex items-center text-sm font-semibold text-academic-600 hover:text-uva-red group/email transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 mr-2 text-academic-400 group-hover/email:text-uva-red transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {pi.email}
                    </a>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
