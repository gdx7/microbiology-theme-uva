// app/research-groups/drna/page.tsx

import Link from "next/link";

export default function DRNALabPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">DNA &amp; RNA Interaction Lab (DRL)</h1>
        <p className="lead">
          The DNA &amp; RNA Interaction Lab (d.r.n.a) studies how RNA and DNA
          interactions shape bacterial gene regulation and chromosome
          organisation. We combine new experimental methods with data-driven
          analysis to uncover non-canonical regulatory mechanisms in bacteria.
        </p>

        {/* Local sub-navigation */}
        <nav
          aria-label="DRNA lab sections"
          style={{
            marginTop: "1.4rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
          }}
        >
          {[
            { href: "#what-we-do", label: "What we do" },
            { href: "#how-we-do-it", label: "How we do it" },
            { href: "#team", label: "Team" },
            { href: "#publications", label: "Publications" },
            { href: "#links", label: "Links & opportunities" },
          ].map((item) => (
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

        {/* What we do */}
        <div id="what-we-do" style={{ marginTop: "2.4rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            What we do
          </h2>
          <p style={{ fontSize: "0.95rem" }}>
            We are interested in how RNA and DNA interactions control bacterial
            gene expression and cell physiology. Our focus is on non-coding
            RNAs, RNA-binding proteins and DNA-associated factors that together
            orchestrate translation, stress responses and cellular decisions.
          </p>
          <p style={{ fontSize: "0.95rem", marginTop: "0.6rem" }}>
            We study these processes in a range of bacterial systems, with
            relevance for infection biology, microbiome function and microbial
            biotechnology.
          </p>
        </div>

        {/* How we do it */}
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
            <article className="card">
              <h3>Experimental approaches</h3>
              <p style={{ fontSize: "0.9rem" }}>
                We develop and use methods to capture RNA–RNA, RNA–protein and
                RNA–DNA contacts directly inside cells, and combine these with
                deep sequencing and multi-omics readouts. This allows us to map
                regulatory interactions at high resolution.
              </p>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Our work includes bacterial genetics, physiology, stress
                responses and infection-relevant models.
              </p>
            </article>

            <article className="card">
              <h3>Data-driven analysis</h3>
              <p style={{ fontSize: "0.9rem" }}>
                We use unsupervised learning and other machine-learning
                approaches to detect structure in large, multidimensional
                datasets without strong prior assumptions. This helps us
                identify unexpected regulatory modules and chromosomal
                organisations.
              </p>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                The lab values open, reproducible analysis workflows and close
                collaboration between experimental and computational team
                members.
              </p>
            </article>
          </div>
        </div>

        {/* Team */}
        <div id="team" style={{ marginTop: "2.6rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Team
          </h2>

          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Gaurav Dugar</h3>
              <p
                style={{
                  marginTop: "0.2rem",
                  fontSize: "0.9rem",
                  color: "#64748b",
                }}
              >
                Group leader
              </p>
            </article>

            <article className="card">
              <h3>Vera van Melis</h3>
              <p
                style={{
                  marginTop: "0.2rem",
                  fontSize: "0.9rem",
                  color: "#64748b",
                }}
              >
                PhD candidate
              </p>
            </article>

            <article className="card">
              <h3>Daphne Denaijere</h3>
              <p
                style={{
                  marginTop: "0.2rem",
                  fontSize: "0.9rem",
                  color: "#64748b",
                }}
              >
                Research technician
              </p>
            </article>

            <article className="card">
              <h3>Dogukan Türk</h3>
              <p
                style={{
                  marginTop: "0.2rem",
                  fontSize: "0.9rem",
                  color: "#64748b",
                }}
              >
                Bachelor student
              </p>
            </article>
          </div>

          <div style={{ marginTop: "1.6rem" }}>
            <h3
              className="section-title"
              style={{ fontSize: "1rem", marginBottom: "0.4rem" }}
            >
              Lab culture
            </h3>
            <p style={{ fontSize: "0.95rem" }}>
              We aim to create a kind, inclusive and collaborative environment
              where people feel safe to ask questions, share ideas and discuss
              challenges. We value diversity of backgrounds and perspectives as
              essential for both good science and personal development.
            </p>
          </div>
        </div>

        {/* Publications */}
        <div id="publications" style={{ marginTop: "2.6rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Selected publications
          </h2>
          <p className="lead" style={{ marginBottom: "0.9rem" }}>
            A selection of recent work illustrating our interests in gene
            regulation, chromosome organisation, CRISPR biology and bacterial
            physiology.
          </p>

          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "1.2rem",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            <li>
              Teichmann L, Wenne M, Luitwieler S, <strong>Dugar G</strong>, et
              al. Genetic adaptation to amoxicillin in{" "}
              <em>Escherichia coli</em>. <em>PLOS One</em> (2025).
            </li>
            <li>
              Han Y, Wang B, Agnolin A, <strong>Dugar G</strong>, Hamoen LW.
              Ribosome pausing in amylase-producing <em>Bacillus subtilis</em>{" "}
              during long fermentation. <em>Microbial Cell Factories</em>{" "}
              (2025).
            </li>
            <li>
              Wang B, Kes MBMJ, van den Berg van Saparoea ACH,{" "}
              <strong>Dugar G</strong>, Hamoen LW. Increasing enzyme production
              via LonA inactivation in <em>Bacillus subtilis</em>.{" "}
              <em>Microbial Cell Factories</em> (2024).
            </li>
            <li>
              <strong>Dugar G</strong>, Hofmann A, Heermann DW, Hamoen LW. A
              chromosomal loop anchor mediating bacterial genome organisation.{" "}
              <em>Nature Genetics</em> (2022).
            </li>
            <li>
              Jiao C, Sharma S, <strong>Dugar G</strong>, et al. Noncanonical
              crRNAs enabling multiplexable RNA detection by Cas9.{" "}
              <em>Science</em> (2021).
            </li>
          </ul>
          <p style={{ marginTop: "0.8rem", fontSize: "0.9rem" }}>
            For a complete and up-to-date list of publications, please refer to
            the lab website.
          </p>
        </div>

        {/* Links & opportunities */}
        <div id="links" style={{ marginTop: "2.6rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Links &amp; opportunities
          </h2>
          <p style={{ fontSize: "0.95rem" }}>
            We welcome enquiries from students and researchers interested in
            bacterial RNA biology, chromosome organisation and data-driven
            microbiology.
          </p>

          <div
            style={{
              marginTop: "1.2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.8rem",
            }}
          >
            <a
              href="https://drna.nl"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit lab website (drna.nl)
            </a>
            <a href="mailto:G.Dugar@uva.nl" className="btn btn-outline">
              Email the group
            </a>
            <Link href="/people" className="btn btn-outline">
              View all PIs in the Theme
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
