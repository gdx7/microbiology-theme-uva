// app/research-groups/page.tsx
import Link from "next/link";
import { researchAreas } from "@/data/researchAreas";
import { researchGroups } from "@/data/researchGroups";

export default function ResearchGroupsPage() {
  const areas = researchAreas as any[];
  const groups = researchGroups as any[];

  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research groups</p>
        <h1 className="section-title">Research areas and groups</h1>
        <p className="lead">
          The Microbiology theme consists of multiple research groups organised
          into four research areas. Each group has its own focus and
          expertise, ranging from microbial food safety and microbiomes to
          bacterial physiology, microbiome engineering and biomolecular mass
          spectrometry.
        </p>

        {areas.map((area: any) => {
          const areaGroups = groups.filter(
            (g: any) => g.areaSlug === area.slug
          );

          if (!areaGroups.length) return null;

          return (
            <div key={area.slug} style={{ marginTop: "1.8rem" }}>
              <h2 className="section-title" style={{ fontSize: "1.25rem" }}>
                {area.title}
              </h2>
              <p className="lead">{area.description}</p>

              <div className="grid" style={{ marginTop: "0.9rem" }}>
                {areaGroups.map((group: any) => (
                  <article key={group.slug} className="card">
                    <h3>
                      <Link href={`/research-groups/${group.slug}`}>
                        {group.name}
                      </Link>
                    </h3>
                    {group.pi && (
                      <p style={{ marginBottom: "0.25rem" }}>
                        <strong>PI:</strong> {group.pi}
                      </p>
                    )}
                    <p>
                      {group.highlight ||
                        group.description ||
                        "Research on microbiology and related themes at SILS."}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
