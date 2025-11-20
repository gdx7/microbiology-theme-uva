// app/research-groups/[slug]/page.tsx
import { notFound } from "next/navigation";
import { researchGroups } from "@/data/researchGroups";
import { researchAreas } from "@/data/researchAreas";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ResearchGroupPage({ params }: PageProps) {
  const groups = researchGroups as any[];
  const areas = researchAreas as any[];

  const group = groups.find((g: any) => g.slug === params.slug);

  if (!group) {
    return notFound();
  }

  const area =
    areas.find((a: any) => a.slug === group.areaSlug) ??
    areas.find((a: any) => a.title === group.area);

  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">{group.name}</h1>

        <p className="lead">
          {group.pi && (
            <>
              Principal investigator: <strong>{group.pi}</strong>.
            </>
          )}{" "}
          {area && (
            <>
              &nbsp;Part of the research area{" "}
              <strong>{area.title}</strong>.
            </>
          )}{" "}
          {group.shortSummary ||
            "This group contributes to the Microbiology theme at SILS, working on microbial systems relevant to health, food and the environment."}
        </p>

        <div className="grid" style={{ marginTop: "1.4rem" }}>
          <article className="card">
            <h3>Research focus</h3>
            <p>
              {group.description ||
                group.highlight ||
                "Research topics, approaches and model systems are being consolidated here."}
            </p>
          </article>

          <article className="card">
            <h3>Approaches & techniques</h3>
            <p>
              {group.methods ||
                "The group combines microbiology with quantitative and systems-level approaches, including omics, genetics, imaging and computational analysis."}
            </p>
          </article>

          <article className="card">
            <h3>People & collaborations</h3>
            <p>
              {group.peopleSummary ||
                "The team includes PhD candidates, postdocs and students, and works closely with other microbiology and systems biology groups in Amsterdam."}
            </p>
          </article>
        </div>

        <div style={{ marginTop: "1.6rem" }}>
          {group.website && (
            <p>
              External group website:&nbsp;
              <a href={group.website} target="_blank" rel="noreferrer">
                {group.website}
              </a>
            </p>
          )}
          {group.contactEmail && (
            <p>
              Contact:&nbsp;
              <a href={`mailto:${group.contactEmail}`}>
                {group.contactEmail}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
