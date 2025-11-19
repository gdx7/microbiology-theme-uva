// app/research-groups/page.tsx
import { researchGroups } from "../../data/researchGroups";

export default function ResearchGroupsPage() {
  return (
    <section className="group-list">
      <h1>Research groups</h1>
      <p className="meta" style={{ marginBottom: "1rem" }}>
        The Microbiology Theme at SILS (UvA) comprises the groups below. Each entry links to the group’s page and external site where available.
      </p>

      <div className="card" style={{ padding: 0 }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {researchGroups.map((g) => (
            <li key={g.slug} style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="group-item" style={{ padding: "0.9rem 0.9rem" }}>
                <img
                  src={g.logo || "/images/logo-placeholder.svg"}
                  alt={`${g.name} logo`}
                />
                <div>
                  <div style={{ fontWeight: 600 }}>{g.name}</div>
                  <div className="meta">
                    PI: {g.pi} · {g.theme}
                  </div>
                </div>
                <div style={{ display: "flex", gap: ".6rem" }}>
                  {g.website && (
                    <a className="more" href={g.website} target="_blank" rel="noreferrer">Website ↗</a>
                  )}
                  <a className="more" href={`/research-groups/${g.slug}`}>Group page →</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
