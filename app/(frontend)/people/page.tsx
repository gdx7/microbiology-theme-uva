// app/people/page.tsx
import ScrollReveal from "../components/ScrollReveal";
import {
  getAllResearchGroups,
  getAllPeople,
  categorizeRole,
  type PersonData,
  type PersonCategory,
} from "@/lib/payload-data";

// Rendered on demand so edits made in /admin appear immediately.
export const dynamic = "force-dynamic";

const SECTIONS: { key: PersonCategory; title: string }[] = [
  { key: "leaders", title: "Group Leaders" },
  { key: "staff", title: "Staff" },
  { key: "postdocs", title: "Postdocs" },
  { key: "phd", title: "PhD Students" },
  { key: "interns", title: "Interns" },
];

// Strip academic titles AND middle initials so e.g.
// "Prof. Dr. Leendert W. Hamoen" and "Leendert Hamoen" merge into one person.
function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[.,]/g, "")
    .split(/\s+/)
    .filter((t) => !["dr", "prof", "ir", "mr", "mrs", "ms", "msc", "bsc", "phd"].includes(t))
    .filter((t) => t.length > 1) // drop middle initials like "w"
    .join(" ")
    .trim();
}

function initials(name: string): string {
  return name
    .replace(/\b(dr|prof|ir|mr|mrs|ms)\b\.?/gi, "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default async function PeoplePage() {
  const [groups, standalone] = await Promise.all([getAllResearchGroups(), getAllPeople()]);

  // Merge people from group PIs, group team members, and standalone entries,
  // deduplicating by (title-stripped) name.
  const byName = new Map<string, PersonData>();
  const add = (p: PersonData) => {
    if (!p.name) return;
    const key = normalizeName(p.name);
    const existing = byName.get(key);
    if (existing) {
      existing.photo = existing.photo || p.photo;
      existing.email = existing.email || p.email;
      existing.bio = existing.bio || p.bio;
      existing.group = existing.group || p.group;
      existing.role = existing.role || p.role;
      // A leader designation always wins.
      if (p.category === "leaders") existing.category = "leaders";
      return;
    }
    byName.set(key, { ...p });
  };

  for (const g of groups) {
    if (g.pi) {
      add({ name: g.pi, role: g.role || "Group leader", category: "leaders", group: g.name, email: g.contactEmail });
    }
    for (const m of g.teamMembers ?? []) {
      add({
        name: m.name,
        role: m.role,
        category: categorizeRole(m.role),
        group: g.name,
        email: m.email,
        photo: m.photo,
        bio: m.bio,
      });
    }
  }
  for (const s of standalone) add(s);

  const all = Array.from(byName.values()).sort((a, b) => {
    const ao = a.order ?? 999;
    const bo = b.order ?? 999;
    if (ao !== bo) return ao - bo;
    return a.name.localeCompare(b.name);
  });

  const sections = SECTIONS.map((s) => ({ ...s, people: all.filter((p) => p.category === s.key) })).filter(
    (s) => s.people.length > 0,
  );

  return (
    <div className="relative overflow-hidden selection:bg-uva-red selection:text-white bg-academic-50 min-h-screen pb-24">
      <section className="relative pt-32 pb-20 border-b border-academic-200 overflow-hidden bg-gradient-to-br from-white via-academic-50 to-academic-100">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#102a43_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-uva-red mb-4 bg-uva-red/5 px-4 py-1.5 rounded-full border border-uva-red/10">
              Our people
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-academic-900 leading-[1.1] mb-6">
              People <span className="text-academic-400 font-light italic">of the theme</span>
            </h1>
            <p className="text-lg md:text-xl text-academic-600 leading-relaxed max-w-3xl font-light">
              The group leaders, postdocs, PhD students and staff who make up the Microbiology theme at SILS.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 space-y-20">
        {sections.map((section) => (
          <section key={section.key}>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl font-bold text-academic-900 mb-8 flex items-center gap-4">
                <span className="w-8 h-1 bg-uva-red rounded-full"></span>
                {section.title}
                <span className="text-base font-sans font-normal text-academic-400">{section.people.length}</span>
              </h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {section.people.map((p, idx) => (
                <ScrollReveal key={`${p.name}-${idx}`} direction="up" delay={0.05 * (idx % 4 + 1)}>
                  <article className="group bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-academic-200/60 shadow-md hover:shadow-xl hover:bg-white transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
                    {p.photo ? (
                      <div className="mb-5 overflow-hidden rounded-2xl bg-academic-100/50 aspect-square">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.photo}
                          alt={p.name}
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="mb-5 flex items-center justify-center rounded-2xl bg-academic-100/60 aspect-square">
                        <span className="font-serif text-4xl font-bold text-academic-300 group-hover:text-uva-red transition-colors duration-500">
                          {initials(p.name)}
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-academic-900 mb-1 group-hover:text-uva-red transition-colors">
                      {p.name}
                    </h3>
                    {p.role && (
                      <p className="text-[13px] font-bold tracking-widest uppercase text-academic-500 mb-3">{p.role}</p>
                    )}
                    {p.group && <p className="text-academic-600 text-sm leading-relaxed mb-4 flex-grow">{p.group}</p>}

                    {p.email && (
                      <div className="mt-auto pt-4 border-t border-academic-200/50">
                        <a
                          href={`mailto:${p.email}`}
                          className="inline-flex items-center text-sm font-semibold text-academic-600 hover:text-uva-red transition-colors duration-300 break-all"
                        >
                          <svg className="w-4 h-4 mr-2 flex-shrink-0 text-academic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          {p.email}
                        </a>
                      </div>
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
