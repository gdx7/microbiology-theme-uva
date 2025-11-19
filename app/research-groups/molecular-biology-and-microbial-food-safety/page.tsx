import { researchGroups } from "../../../data/researchGroups";

export default function MBMFSPage() {
  const group = researchGroups.find((g) => g.slug === "molecular-biology-and-microbial-food-safety");
  if (!group) return <section className="container"><h1>Group not found</h1></section>;

  return (
    <section className="container">
      <p className="kicker">Research group</p>
      <h1>{group.name}</h1>
      <p className="meta">PI: {group.pi} · {group.email ? <a href={`mailto:${group.email}`}>{group.email}</a> : null}</p>

      <div className="card" style={{ padding: "1rem", marginBottom: "1rem" }}>
        <img src="/images/groups/molecular-biology-and-microbial-food-safety.jpg" alt="MBMFS banner" style={{ width: "100%", borderRadius: 12, border: "1px solid var(--border)" }}/>
        <p style={{ marginTop: ".9rem" }}>{group.shortDescription}</p>
        <p style={{ color: "var(--muted)" }}>
          Focus areas include gut/oral microbiomes, AMR, stress responses and spore biology. (Summary from SILS page.)
        </p>
        <p><a href={group.website!} target="_blank" rel="noreferrer">Visit MBMFS on sils.uva.nl ↗</a></p>
      </div>
    </section>
  );
}
