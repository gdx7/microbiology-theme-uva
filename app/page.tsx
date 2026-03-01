// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import NewsRotator from "./components/NewsRotator";
import HeroParticles from "./components/HeroParticles";
import ScrollReveal from "./components/ScrollReveal";
import { researchAreas } from "@/data/researchAreas";

export default function Home() {
  const areas = researchAreas as { slug: string; title: string; description: string }[];

  const stats = [
    { label: "News", value: "", href: "/news" },
    { label: "Upcoming seminars", value: "", href: "/seminars" },
    { label: "Latest publications", value: "", href: "/publications" },
  ];

  return (
    <div className="relative overflow-hidden selection:bg-uva-red selection:text-white">
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-32 border-b border-academic-200 overflow-hidden bg-gradient-to-br from-academic-50 via-white to-academic-100">
        <HeroParticles />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-uva-red mb-2 bg-uva-red/5 px-4 py-1.5 rounded-full border border-uva-red/10">
                  <span>Swammerdam Institute for Life Sciences</span>
                  <span className="text-academic-400">•</span>
                  <span>University of Amsterdam</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-academic-900 leading-[1.1]">
                  Microbiology Theme <br />
                  <span className="text-academic-400 font-light italic">at SILS</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-lg md:text-xl text-academic-600 leading-relaxed max-w-2xl font-light">
                  Microorganisms shape our health, food and environment. The Microbiology theme at SILS studies how microbes grow, communicate and interact with hosts, and translates this knowledge into applications for health, industry and sustainability.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/research-groups" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-academic-900 bg-white shadow-lg hover:shadow-xl hover:bg-academic-50 transition-all duration-300 rounded-xl group hover:-translate-y-0.5">
                    Explore research groups
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-uva-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                  <Link href="/about" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-academic-900 bg-white/90 backdrop-blur-sm border border-white/40 shadow-sm hover:bg-white transition-all duration-300 rounded-xl hover:-translate-y-0.5">
                    About the theme
                  </Link>
                </div>
              </ScrollReveal>

              {/* Stats / Quick Links */}
              <ScrollReveal direction="up" delay={0.5}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                  {stats.map((s) => (
                    <Link key={s.label} href={s.href} className="group relative overflow-hidden bg-white/80 backdrop-blur-md border border-academic-200 p-5 rounded-xl hover:border-academic-400 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                      <div className="absolute top-0 left-0 w-1 h-full bg-academic-300 group-hover:bg-uva-red transition-colors duration-300"></div>
                      <div className="text-xs font-bold uppercase tracking-wider text-academic-500 mb-1">{s.label}</div>
                      <div className="flex items-center text-academic-900 font-medium group-hover:text-uva-red transition-colors">
                        View details
                        <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Illustration/Image Content */}
            <div className="lg:col-span-5 relative hidden md:block">
              <ScrollReveal direction="left" delay={0.3} className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden bg-white p-2 border border-academic-100 shadow-2xl transition-transform duration-500 ease-out group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-uva-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-xl"></div>
                  <Image
                    src="/homepage.png"
                    alt="Microbiology theme at SILS"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover rounded-xl"
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(circle,rgba(208,13,23,0.1)_0%,transparent_70%)] blur-xl"></div>
              </ScrollReveal>
            </div>

          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* NEWS & CONTEXT SECTION */}
      <section id="news" className="relative py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-6 sticky top-32">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="text-sm font-bold tracking-widest uppercase text-academic-500">News & Context</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-academic-900 mt-2 mb-4 leading-tight">Microbiology across Amsterdam</h2>
                <div className="w-12 h-1 bg-uva-red mb-6 rounded-full"></div>
                <p className="text-academic-600 text-lg leading-relaxed">
                  The theme is connected to Research Priority Areas on Personal Microbiome Health and Systems Biology, and to the Amsterdam Microbiome Expertise Center (AMEC) and AMSA seminar series.
                </p>
                <div className="mt-8">
                  <a href="/news" className="text-academic-900 font-semibold hover:text-uva-red inline-flex items-center group transition-colors">
                    View all news
                    <span className="w-8 h-px bg-academic-300 ml-4 group-hover:bg-uva-red group-hover:w-12 transition-all duration-300"></span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="bg-academic-50/80 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-academic-200 shadow-lg hover:shadow-xl transition-shadow duration-500">
                  <NewsRotator />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS SECTION */}
      <section id="research" className="relative py-24 bg-academic-900 text-white overflow-hidden">
        {/* Subtle dark pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="max-w-3xl mb-16">
              <span className="text-sm font-bold tracking-widest uppercase text-academic-300">Research Ecosystem</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">How microbiology at SILS is organised</h2>
              <p className="text-academic-200 text-lg md:text-xl leading-relaxed font-light">
                The Microbiology theme at SILS consists of research groups on microbial food safety and microbiomes, bacterial cell biology and physiology, microbiome engineering, and mass spectrometry of biomolecules, complemented by additional PIs embedded in these areas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area: { slug: string; title: string; description: string }, index: number) => {
              const getIcon = (slug: string) => {
                switch (slug) {
                  case 'molecular-biology-microbial-food-safety':
                    return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" /><path d="M8.5 2h7" /><path d="M7 16h10" /></svg>;
                  case 'bacterial-cell-biology':
                    return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="7" ry="10" /><path d="M12 2v20" /><path d="M5.5 9c1.5-1 4-1.5 6.5-1.5s5 .5 6.5 1.5" /><path d="M5.5 15c1.5 1 4 1.5 6.5 1.5s5-.5 6.5-1.5" /></svg>;
                  case 'microbiome-engineering':
                    return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="7" cy="17" r="3" /><circle cx="17" cy="17" r="3" /><circle cx="12" cy="12" r="2" /><path d="M9.5 8.5l2 2" /><path d="M14.5 8.5l-2 2" /><path d="M9.5 15.5l2-2" /><path d="M14.5 15.5l-2-2" /></svg>;
                  case 'cross-theme-expertise':
                    return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>;
                  case 'core-facilities':
                    return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>;
                  default:
                    return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>;
                }
              };

              return (
                <ScrollReveal key={area.slug} direction="up" delay={0.1 * (index + 2)}>
                  <Link
                    href={`/research-groups#${area.slug}`}
                    className="block group h-full bg-transparent border-t border-academic-700 py-8 hover:border-white transition-colors duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-academic-400 mb-6 group-hover:text-white transition-colors duration-300">
                      {getIcon(area.slug)}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-academic-300 transition-colors">{area.title}</h3>
                    <p className="text-academic-400 leading-relaxed font-light mb-8 line-clamp-3">
                      {area.description}
                    </p>
                    <div className="inline-flex items-center text-sm font-semibold tracking-wide text-academic-300 group-hover:text-white transition-colors mt-auto">
                      View groups
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
