// app/research-groups/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { getResearchGroupBySlug, getAllResearchGroups } from "@/lib/markdown";
import { researchGroups } from "@/data/researchGroups";
import ScrollReveal from "../../components/ScrollReveal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Get all markdown files
  const markdownGroups = getAllResearchGroups();

  return markdownGroups.map((group) => ({
    slug: group.slug,
  }));
}

export default async function ResearchGroupPage({ params }: PageProps) {
  const { slug } = await params;

  // Try to get group from markdown first
  let group = getResearchGroupBySlug(slug);

  // Fallback to data array if no markdown file
  if (!group) {
    const dataGroup = researchGroups.find((g) => g.slug === slug);
    if (!dataGroup) {
      return notFound();
    }
    // Convert data group to expected format
    group = dataGroup as any;
  }

  if (!group) {
    return notFound();
  }

  // Check if this is a rich content page (has extended fields)
  const hasRichContent = group.whatWeDo || group.howWeDoItExperimental || group.teamMembers;

  return (
    <div className="min-h-screen bg-academic-50 selection:bg-uva-red selection:text-white">

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 border-b border-academic-200 overflow-hidden bg-gradient-to-br from-white via-academic-50 to-academic-100">
        {/* Subtle background patterns */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#102a43_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex gap-4 items-center mb-6">
              <Link href="/research-groups" className="text-academic-500 hover:text-uva-red text-sm font-semibold tracking-widest uppercase transition-colors flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Research Groups
              </Link>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-academic-900 leading-[1.1] mb-6">
              {group.name}
            </h1>

            {group.description && (
              <p className="text-lg md:text-xl text-academic-700 leading-relaxed max-w-4xl font-light whitespace-pre-wrap">
                {group.description}
              </p>
            )}

            {/* Sub-navigation for rich content pages */}
            {hasRichContent && (
              <nav
                aria-label="Group sections"
                className="mt-10 flex flex-wrap gap-3"
              >
                {[
                  group.whatWeDo && { href: "#what-we-do", label: "What we do" },
                  (group.howWeDoItExperimental || group.howWeDoItComputational) && { href: "#how-we-do-it", label: "How we do it" },
                  group.teamMembers && group.teamMembers.length > 0 && { href: "#team", label: "Team" },
                  group.publications && group.publications.length > 0 && { href: "#publications", label: "Publications" },
                  group.externalUrl && { href: "#links", label: "Links & opportunities" },
                ]
                  .filter(Boolean)
                  .map((item: any) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="px-5 py-2.5 rounded-xl border border-academic-200 bg-white/50 backdrop-blur text-sm font-bold tracking-widest uppercase text-academic-900 hover:bg-academic-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {item.label}
                    </a>
                  ))}
              </nav>
            )}
          </ScrollReveal>
        </div>
      </section >

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 space-y-24">
        {/* What we do */}
        {group.whatWeDo && (
          <ScrollReveal direction="up" delay={0.2}>
            <div id="what-we-do" className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-academic-200 shadow-sm hover:shadow-lg transition-shadow duration-500 scroll-mt-32">
              <h2 className="font-serif text-3xl font-bold text-academic-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-uva-red rounded-full"></span>
                What we do
              </h2>
              <div className="text-lg text-academic-700 font-light leading-relaxed whitespace-pre-wrap">
                {group.whatWeDo}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* How we do it */}
        {(group.howWeDoItExperimental || group.howWeDoItComputational) && (
          <ScrollReveal direction="up" delay={0.2}>
            <div id="how-we-do-it" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-bold text-academic-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-1 bg-academic-900 rounded-full"></span>
                How we do it
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {group.howWeDoItExperimental && (
                  <article className="bg-[#102a43] text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 blur-xl pointer-events-none">
                      <div className="w-40 h-40 rounded-full bg-white"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-6 text-academic-50">Experimental approaches</h3>
                    <div className="text-academic-100 font-light leading-relaxed whitespace-pre-wrap text-lg">
                      {group.howWeDoItExperimental}
                    </div>
                  </article>
                )}

                {group.howWeDoItComputational && (
                  <article className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-academic-200 shadow-sm hover:shadow-xl transition-shadow duration-500">
                    <h3 className="text-xl font-bold text-academic-900 mb-6">Data-driven analysis</h3>
                    <div className="text-academic-700 font-light leading-relaxed whitespace-pre-wrap text-lg">
                      {group.howWeDoItComputational}
                    </div>
                  </article>
                )}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Team */}
        {group.teamMembers && group.teamMembers.length > 0 && (
          <ScrollReveal direction="up" delay={0.2}>
            <div id="team" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-bold text-academic-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-1 bg-academic-400 rounded-full"></span>
                Team
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.teamMembers.map((member: any, index: number) => (
                  <article key={index} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-academic-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group">
                    {member.photo && (
                      <div className="mb-6 overflow-hidden rounded-xl bg-academic-100/50 aspect-square">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-academic-900 mb-1 group-hover:text-uva-red transition-colors">{member.name}</h3>
                    <p className="text-[13px] font-bold tracking-widest uppercase text-academic-500 mb-4">{member.role}</p>

                    {member.bio && (
                      <p className="text-academic-600 font-light text-sm leading-relaxed mb-4 flex-grow">
                        {member.bio}
                      </p>
                    )}

                    {member.email && (
                      <div className="mt-auto pt-4 border-t border-academic-100">
                        <a href={`mailto:${member.email}`} className="inline-flex items-center text-sm font-semibold text-academic-600 hover:text-uva-red transition-colors">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          {member.email}
                        </a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Publications */}
        {group.publications && group.publications.length > 0 && (
          <ScrollReveal direction="up" delay={0.2}>
            <div id="publications" className="scroll-mt-32 bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-academic-200 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <h2 className="font-serif text-3xl font-bold text-academic-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-1 bg-academic-900 rounded-full"></span>
                Selected publications
              </h2>

              <ul className="space-y-4">
                {group.publications.map((pub: any, index: number) => (
                  <li key={index} className="pl-6 relative">
                    <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-academic-300"></span>
                    <p className="text-lg text-academic-700 font-light leading-relaxed">
                      <span className="font-medium text-academic-900">{pub.authors}</span>. {pub.title}. <em className="text-academic-900">{pub.journal}</em> ({pub.year}).
                      {pub.link && (
                        <a href={pub.link} target="_blank" rel="noreferrer" className="ml-3 inline-flex items-center text-sm font-bold tracking-widest uppercase text-uva-red hover:text-academic-900 transition-colors">
                          Link <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* Links & opportunities */}
        {(group.externalUrl || group.contactEmail) && (
          <ScrollReveal direction="up" delay={0.2}>
            <div id="links" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-bold text-academic-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-uva-red rounded-full"></span>
                Links & opportunities
              </h2>

              <div className="flex flex-wrap gap-4 mt-8">
                {group.externalUrl && (
                  <a
                    href={group.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#102a43] shadow-lg hover:shadow-xl hover:bg-[#243b53] transition-all duration-300 rounded-xl group hover:-translate-y-0.5"
                  >
                    Visit lab website
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                )}

                {group.contactEmail && (
                  <a
                    href={`mailto:${group.contactEmail}`}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-academic-900 bg-white border border-academic-200 shadow-sm hover:shadow-md hover:bg-academic-50 transition-all duration-300 rounded-xl group hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5 mr-3 text-uva-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email the group
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div >
  );
}
