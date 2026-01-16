// app/publications/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  link?: string;
  abstract?: string;
  groupSlug?: string;
  featured?: boolean;
}

function getPublications(): Publication[] {
  const publicationsDirectory = path.join(process.cwd(), 'content/publications');

  if (!fs.existsSync(publicationsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(publicationsDirectory);
  const publications = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(publicationsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return data as Publication;
    })
    .sort((a, b) => b.year - a.year);

  return publications;
}

export default function PublicationsPage() {
  const publications = getPublications();
  const featured = publications.filter(p => p.featured);
  const recent = publications.slice(0, 20);

  return (
    <section className="section page-with-watermark">
      <div className="container">
        <p className="section-kicker">Research Output</p>
        <h1 className="section-title">Latest Publications</h1>
        <p className="lead">
          Recent publications from the Microbiology theme research groups, showcasing our contributions to microbiology, systems biology, and related fields.
        </p>

        {featured.length > 0 && (
          <>
            <h2 className="section-title" style={{ marginTop: "3rem", fontSize: "1.4rem" }}>
              Featured Publications
            </h2>
            <div style={{ marginTop: "1.5rem" }}>
              {featured.map((pub, index) => (
                <article key={index} className="card" style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.1rem" }}>{pub.title}</h3>
                  <p style={{ marginTop: "0.5rem", fontSize: "0.95rem", color: "#64748b" }}>
                    {pub.authors}
                  </p>
                  <p style={{ marginTop: "0.3rem", fontSize: "0.9rem", color: "#64748b" }}>
                    <em>{pub.journal}</em> ({pub.year})
                  </p>
                  {pub.abstract && (
                    <p style={{ marginTop: "0.8rem", fontSize: "0.95rem" }}>
                      {pub.abstract}
                    </p>
                  )}
                  {(pub.link || pub.doi) && (
                    <div style={{ marginTop: "1rem" }}>
                      <a
                        href={pub.link || `https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline"
                      >
                        Read paper →
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </>
        )}

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
                {(pub.link || pub.doi) && (
                  <>
                    {" · "}
                    <a
                      href={pub.link || `https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noreferrer"
                    >
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
