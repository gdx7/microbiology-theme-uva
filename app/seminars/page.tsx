// app/seminars/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Seminar {
  title: string;
  date: string;
  time?: string;
  speaker: string;
  affiliation?: string;
  location?: string;
  description?: string;
  link?: string;
}

function getSeminars(): Seminar[] {
  const seminarsDirectory = path.join(process.cwd(), 'content/seminars');

  if (!fs.existsSync(seminarsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(seminarsDirectory);
  const seminars = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(seminarsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return data as Seminar;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return seminars;
}

export default function SeminarsPage() {
  const seminars = getSeminars();
  const now = new Date();
  const upcoming = seminars.filter(s => new Date(s.date) >= now);
  const past = seminars.filter(s => new Date(s.date) < now).reverse();

  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Seminars & Events</p>
        <h1 className="section-title">Upcoming Seminars</h1>
        <p className="lead">
          Join us for our seminar series featuring talks from leading researchers in microbiology, systems biology, and related fields.
        </p>

        {upcoming.length > 0 ? (
          <div className="grid" style={{ marginTop: "2rem" }}>
            {upcoming.map((seminar, index) => (
              <article key={index} className="card">
                <h3>{seminar.title}</h3>
                <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#64748b" }}>
                  <strong>Speaker:</strong> {seminar.speaker}
                  {seminar.affiliation && ` (${seminar.affiliation})`}
                </p>
                <p style={{ marginTop: "0.3rem", fontSize: "0.9rem", color: "#64748b" }}>
                  <strong>Date:</strong> {new Date(seminar.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  {seminar.time && ` at ${seminar.time}`}
                </p>
                {seminar.location && (
                  <p style={{ marginTop: "0.3rem", fontSize: "0.9rem", color: "#64748b" }}>
                    <strong>Location:</strong> {seminar.location}
                  </p>
                )}
                {seminar.description && (
                  <p style={{ marginTop: "0.8rem", fontSize: "0.95rem" }}>
                    {seminar.description}
                  </p>
                )}
                {seminar.link && (
                  <div style={{ marginTop: "1rem" }}>
                    <a href={seminar.link} target="_blank" rel="noreferrer" className="btn btn-outline">
                      More information →
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="card" style={{ marginTop: "2rem" }}>
            <p>No upcoming seminars scheduled at the moment. Check back soon!</p>
          </div>
        )}

        {past.length > 0 && (
          <>
            <h2 className="section-title" style={{ marginTop: "4rem", fontSize: "1.4rem" }}>
              Past Seminars
            </h2>
            <div className="grid" style={{ marginTop: "2rem" }}>
              {past.slice(0, 6).map((seminar, index) => (
                <article key={index} className="card">
                  <h3>{seminar.title}</h3>
                  <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#64748b" }}>
                    {seminar.speaker} • {new Date(seminar.date).toLocaleDateString()}
                  </p>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
