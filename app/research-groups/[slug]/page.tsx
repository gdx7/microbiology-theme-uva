// app/research-groups/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { getResearchGroupBySlug, getAllResearchGroups } from "@/lib/markdown";
import { researchGroups } from "@/data/researchGroups";

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
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">{group.name}</h1>

        {group.description && (
          <p className="lead" style={{ whiteSpace: "pre-wrap" }}>
            {group.description}
          </p>
        )}

        {/* Sub-navigation for rich content pages */}
        {hasRichContent && (
          <nav
            aria-label="Group sections"
            style={{
              marginTop: "1.4rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
            }}
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
                  className="btn btn-outline"
                  style={{ fontSize: "0.8rem", textTransform: "uppercase" }}
                >
                  {item.label}
                </a>
              ))}
          </nav>
        )}

        {/* What we do */}
        {group.whatWeDo && (
          <div id="what-we-do" style={{ marginTop: "2.4rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
              What we do
            </h2>
            <div style={{ fontSize: "0.95rem", whiteSpace: "pre-wrap" }}>
              {group.whatWeDo}
            </div>
          </div>
        )}

        {/* How we do it */}
        {(group.howWeDoItExperimental || group.howWeDoItComputational) && (
          <div id="how-we-do-it" style={{ marginTop: "2.4rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
              How we do it
            </h2>
            <div
              className="grid"
              style={{
                marginTop: "1rem",
                gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1.2fr)",
              }}
            >
              {group.howWeDoItExperimental && (
                <article className="card">
                  <h3>Experimental approaches</h3>
                  <div style={{ fontSize: "0.9rem", whiteSpace: "pre-wrap" }}>
                    {group.howWeDoItExperimental}
                  </div>
                </article>
              )}

              {group.howWeDoItComputational && (
                <article className="card">
                  <h3>Data-driven analysis</h3>
                  <div style={{ fontSize: "0.9rem", whiteSpace: "pre-wrap" }}>
                    {group.howWeDoItComputational}
                  </div>
                </article>
              )}
            </div>
          </div>
        )}

        {/* Team */}
        {group.teamMembers && group.teamMembers.length > 0 && (
          <div id="team" style={{ marginTop: "2.6rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
              Team
            </h2>

            <div className="grid people-grid" style={{ marginTop: "1rem" }}>
              {group.teamMembers.map((member, index) => (
                <article key={index} className="card">
                  <h3>{member.name}</h3>
                  <p
                    style={{
                      marginTop: "0.2rem",
                      fontSize: "0.9rem",
                      color: "#64748b",
                    }}
                  >
                    {member.role}
                  </p>
                  {member.email && (
                    <p style={{ marginTop: "0.4rem", fontSize: "0.85rem" }}>
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </p>
                  )}
                  {member.bio && (
                    <p style={{ marginTop: "0.4rem", fontSize: "0.85rem" }}>
                      {member.bio}
                    </p>
                  )}
                </article>
              ))}
            </div>

            {group.labCulture && (
              <div style={{ marginTop: "1.6rem" }}>
                <h3
                  className="section-title"
                  style={{ fontSize: "1rem", marginBottom: "0.4rem" }}
                >
                  Lab culture
                </h3>
                <p style={{ fontSize: "0.95rem", whiteSpace: "pre-wrap" }}>
                  {group.labCulture}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Publications */}
        {group.publications && group.publications.length > 0 && (
          <div id="publications" style={{ marginTop: "2.6rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
              Selected publications
            </h2>

            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "1.2rem",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginTop: "0.9rem",
              }}
            >
              {group.publications.map((pub, index) => (
                <li key={index}>
                  {pub.authors}. {pub.title}. <em>{pub.journal}</em> ({pub.year}).
                  {pub.link && (
                    <>
                      {" "}
                      <a href={pub.link} target="_blank" rel="noreferrer">
                        Link
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links & opportunities */}
        {(group.externalUrl || group.contactEmail) && (
          <div id="links" style={{ marginTop: "2.6rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
              Links &amp; opportunities
            </h2>

            <div
              style={{
                marginTop: "1.2rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
              }}
            >
              {group.externalUrl && (
                <a
                  href={group.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Visit lab website
                </a>
              )}
              {group.contactEmail && (
                <a href={`mailto:${group.contactEmail}`} className="btn btn-outline">
                  Email the group
                </a>
              )}
              <Link href="/people" className="btn btn-outline">
                View all PIs in the Theme
              </Link>
            </div>
          </div>
        )}

        {/* Fallback simple display for groups without rich content */}
        {!hasRichContent && (
          <div className="grid" style={{ marginTop: "1.4rem" }}>
            <article className="card">
              <h3>Research focus</h3>
              <p>{group.shortDescription || "Research information coming soon."}</p>
            </article>

            {group.contactEmail && (
              <article className="card">
                <h3>Contact</h3>
                <p>
                  <a href={`mailto:${group.contactEmail}`}>{group.contactEmail}</a>
                </p>
              </article>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
