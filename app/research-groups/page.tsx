// app/research-groups/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { researchAreas } from "@/data/researchAreas";
import { getAllResearchGroups } from "@/lib/markdown";
import ScrollReveal from "../components/ScrollReveal";

export default function ResearchGroupsPage() {
  const areas = researchAreas as any[];
  // Get all groups from markdown files
  const groups = getAllResearchGroups();

  return (
    <div className="relative overflow-hidden selection:bg-uva-red selection:text-white bg-academic-50 min-h-screen">
      <section className="relative pt-32 pb-24 border-b border-academic-200 overflow-hidden bg-gradient-to-br from-white via-academic-50 to-academic-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-uva-red mb-4 bg-uva-red/5 px-4 py-1.5 rounded-full border border-uva-red/10">
              Research groups
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-academic-900 leading-[1.1] mb-6">
              Research areas <span className="text-academic-400 font-light italic">and groups</span>
            </h1>
            <p className="text-lg md:text-xl text-academic-600 leading-relaxed max-w-3xl font-light">
              The Microbiology theme consists of multiple research groups organised
              into research areas, covering microbial food safety and microbiomes,
              bacterial physiology and cell biology, microbiome engineering and
              biomolecular mass spectrometry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 space-y-32">
        {areas.map((area: any, areaIdx: number) => {
          const areaGroups = groups.filter(
            (g: any) => g.areaSlug === area.slug
          );

          if (!areaGroups.length) return null;

          return (
            <div key={area.slug} id={area.slug}>
              <ScrollReveal direction="up" delay={0.2}>
                <div className="mb-12">
                  <h2 className="font-serif text-4xl font-bold text-academic-900 mb-4 group-hover:text-uva-red transition-colors">
                    {area.title}
                  </h2>
                  <p className="text-xl text-academic-600 leading-relaxed font-light max-w-4xl">
                    {area.description}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {areaGroups.map((group: any, idx: number) => {
                  return (
                    <ScrollReveal key={group.slug} direction="up" delay={0.1 * (idx % 3 + 1)}>
                      <article
                        className="group bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-academic-200 shadow-md hover:shadow-xl hover:bg-white transition-all duration-500 h-full flex flex-col hover:-translate-y-1 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-academic-300 group-hover:bg-uva-red transition-colors duration-500"></div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-academic-900 mb-2 group-hover:text-uva-red transition-colors">
                            <Link href={`/research-groups/${group.slug}`} className="before:absolute before:inset-0">
                              {group.name}
                            </Link>
                          </h3>

                          {group.pi && (
                            <p className="text-[13px] font-bold tracking-widest uppercase text-academic-500 mb-4">
                              <span className="text-academic-400">PI:</span> {group.pi}
                            </p>
                          )}

                          <p className="text-academic-700 font-medium leading-relaxed">
                            {group.shortDescription ||
                              group.description ||
                              "Research on microbiology and related themes at SILS."}
                          </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-academic-200/50">
                          <span
                            className="inline-flex items-center text-sm font-semibold text-academic-900 group-hover:text-uva-red transition-colors"
                          >
                            View group page
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                          </span>
                        </div>
                      </article>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
