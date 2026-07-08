// app/publications/page.tsx
import { getAllPublications } from "@/lib/payload-data";

// Rendered on demand so edits made in /admin appear immediately.
export const dynamic = "force-dynamic";

export default async function PublicationsPage() {
  // Aggregated from each research group's publications in the CMS.
  const publications = await getAllPublications();
  const recent = publications.slice(0, 40);

  return (
    <section className="section page-with-watermark">
      <div className="container">
        <p className="section-kicker">Research Output</p>
        <h1 className="section-title">Latest Publications</h1>
        <p className="lead">
          Selected publications from the Microbiology theme research groups, showcasing our contributions to microbiology, systems biology, and related fields.
        </p>

        <h2 className="section-title" style={{ marginTop: "3rem", fontSize: "1.4rem" }}>
          Recent Publications
        </h2>

        {recent.length > 0 ? (
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "1.2rem",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              marginTop: "1.5rem",
            }}
          >
            {recent.map((pub, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>
                <strong>{pub.title}</strong>
                <br />
                {pub.authors}
                <br />
                <em>{pub.journal}</em> ({pub.year})
                {pub.group && (
                  <span style={{ color: "#64748b" }}> · {pub.group}</span>
                )}
                {pub.link && (
                  <>
                    {" · "}
                    <a href={pub.link} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="card" style={{ marginTop: "2rem" }}>
            <p>Publications will appear here once added via the CMS.</p>
          </div>
        )}
      </div>
    </section>
  );
}
