// app/research-groups/microbial-genomics-unit/page.tsx
import { researchGroups } from "../../../data/researchGroups";

export default function MicrobialGenomicsUnitPage() {
  // Find this specific group by its slug
  const group = researchGroups.find(
    (g) => g.slug === "microbial-genomics-unit"
  );

  if (!group) {
    return (
      <section style={{ padding: "2rem" }}>
        <h1>Group not found</h1>
        <p>Something is wrong with the data for this group.</p>
      </section>
    );
  }

  return (
    <section style={{ padding: "2rem" }}>
      <h1>{group.name}</h1>
      <p>
        <strong>Principal investigator:</strong> {group.pi}
        <br />
        <strong>Email:</strong>{" "}
        <a href={`mailto:${group.email}`}>{group.email}</a>
      </p>

      <h2>Research theme</h2>
      <p>{group.theme}</p>

      <h2>Group members</h2>
      <ul>
        {group.members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>

      <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
        This is placeholder text for a prototype. In a real site, each group
        would be able to edit their own description, projects and publications.
      </p>
    </section>
  );
}
