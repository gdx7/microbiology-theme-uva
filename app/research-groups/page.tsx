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
          into research areas, covering microbial food safety and microbiomes,
          bacterial physiology and cell biology, microbiome engineering and
          biomolecular mass spectrometry.
        </p>

        {areas.map((area: any) => {
          const areaGroups = groups.filter((g: any) => g.areaSlug === area.slug);
          if (!areaGroups.length) return null;

          return (
            <div key={area.slug} id={area.slug} style={{ marginTop: "1.8rem" }}>
              <h2 className="section-title" style={{ fontSize: "1.25rem" }}>
                {area.title}
              </h2>
              <p className="lead">{area.description}</p>

              <div className="grid" style={{ marginTop: "0.9rem" }}>
                {areaGroups.map((group: any) => (
                  <article key={group.slug} className="card research-group-card">
                    <div>
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
                        {group.shortDescription ||
                          group.description ||
                          "Research on microbiology and related themes at SILS."}
                      </p>

                      <div
                        style={{
                          marginTop: "0.6rem",
                          display: "flex",
                          gap: "0.6rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <Link
                          href={`/research-groups/${group.slug}`}
                          className="card-link"
                        >
                          View group page →
                        </Link>
                        {group.externalUrl && (
                          <a
                            href={group.externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="card-link"
                          >
                            External site →
                          </a>
                        )}
                      </div>
                    </div>
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
