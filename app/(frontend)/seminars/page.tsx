// app/seminars/page.tsx
import { getAllSeminars } from "@/lib/payload-data";

// Rendered on demand so edits made in /admin appear immediately.
export const dynamic = "force-dynamic";

export default async function SeminarsPage() {
  const seminars = await getAllSeminars();
  const now = new Date();
  const upcoming = seminars.filter(s => new Date(s.date) >= now);
  const past = seminars.filter(s => new Date(s.date) < now).reverse();

  return (
    <section className="section page-with-watermark">
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
                  <strong>Date:</strong> {new Date(seminar.date).toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
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
