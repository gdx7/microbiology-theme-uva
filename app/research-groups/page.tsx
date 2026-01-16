// app/research-groups/page.tsx
import Link from "next/link";
import { researchAreas } from "@/data/researchAreas";
import { getAllResearchGroups } from "@/lib/markdown";

export default function ResearchGroupsPage() {
  const areas = researchAreas as any[];
  // Get all groups from markdown files
  const groups = getAllResearchGroups();

  return (
    <section className="section page-with-watermark">
      <div className="container">
        <p className="section-kicker">Research groups</p>
        <h1 className="section-title">Research areas and groups</h1>
        <p className="lead">
          The Microbiology theme consists of multiple research groups organised
          into research areas, covering microbial food safety and microbiomes,
          bacterial physiology and cell biology, microbiome engineering and
          biomolecular mass spectrometry.
        </p>

        {areas.map((area: any) => {
          const areaGroups = groups.filter(
            (g: any) => g.areaSlug === area.slug
          );

          if (!areaGroups.length) return null;

          return (
            <div key={area.slug} id={area.slug} style={{ marginTop: "4rem" }}>
              <h2 className="section-title">
                {area.title}
              </h2>
              <p className="lead">{area.description}</p>

              <div className="grid">
                {areaGroups.map((group: any) => {
                  // All groups now have internal pages via markdown
                  return (
                    <article
                      key={group.slug}
                      className="card research-group-card"
                    >
                      <div>
                        <h3>
                          <Link href={`/research-groups/${group.slug}`}>
                            {group.name}
                          </Link>
                        </h3>

                        {group.pi && (
                          <p style={{ marginBottom: "0.75rem", fontSize: "0.9375rem", color: "var(--text-muted)" }}>
                            <strong>Principal Investigator:</strong> {group.pi}
                          </p>
                        )}

                        <p>
                          {group.shortDescription ||
                            group.description ||
                            "Research on microbiology and related themes at SILS."}
                        </p>

                        {/* Link to internal page */}
                        <div style={{ marginTop: "1.5rem" }}>
                          <Link
                            href={`/research-groups/${group.slug}`}
                            className="card-link"
                          >
                            View group page →
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
