// app/research-groups/drna/page.tsx

import Link from "next/link";

export default function DRNALabPage() {
  return (
    <section className="section">
      <div className="container">
        {/* Intro / hero for the group */}
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">drna – DNA &amp; RNA Interaction lab</h1>
        <p className="lead">
          The drna lab studies how RNA and DNA
          interactions shape bacterial gene regulation. We are particularly
          interested in non-coding RNAs, RNA/DNA-binding proteins and how they
          jointly control protein synthesis and cellular decision-making.
        </p>

        <div
          className="grid"
          style={{
            marginTop: "1.6rem",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          }}
        >
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>
              What we do
            </h2>
            <p style={{ fontSize: "0.95rem", marginBottom: "0.6rem" }}>
              Our research focuses on the regulatory logic of RNA and DNA
              interactions in bacteria. We explore how non-coding RNAs,
              RNA-binding proteins and DNA-associated factors coordinate to
              control translation and other gene expression processes. A key aim
              is to uncover unexpected, &quot;non-canonical&quot; interactions
              that reveal new concepts in genome regulation.
            </p>
            <p style={{ fontSize: "0.95rem" }}>
              We are curious about how these regulatory layers help bacteria
              adapt to stress, infection and changing environments, and how this
              knowledge can eventually feed into biotechnology and medicine.
            </p>
          </div>

          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>
              How we do it
            </h2>
            <p style={{ fontSize: "0.95rem", marginBottom: "0.6rem" }}>
              We develop and apply methods to capture RNA–RNA, RNA–protein and
              RNA–DNA contacts directly inside bacterial cells. By combining
              these approaches with deep-sequencing and multi-omics readouts, we
              can map regulatory interactions at high resolution.
            </p>
            <p style={{ fontSize: "0.95rem" }}>
              We make extensive use of data-driven analysis. Unsupervised
              learning and other machine-learning methods help us detect
              structure in large, multidimensional datasets without imposing
              strong prior assumptions, allowing unusual or hidden regulatory
              patterns to emerge from the data.
            </p>
          </div>
        </div>

        {/* Team */}
        <div style={{ marginTop: "2.4rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Team
          </h2>

          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            {/* Current team – based on drna.nl/team */}
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
                PhD student (Oct 2024 – )
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
                Research technician (from 2025)
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
                Bachelor student (2025)
              </p>
            </article>
          </div>

          {/* Team philosophy & alumni summary */}
          <div style={{ marginTop: "1.6rem" }}>
            <h3
              className="section-title"
              style={{ fontSize: "1rem", marginBottom: "0.4rem" }}
            >
              Team philosophy
            </h3>
            <p style={{ fontSize: "0.95rem" }}>
              The lab places a strong emphasis on a kind, inclusive and
              collaborative environment. Supporting one another, being open
              about challenges and celebrating different backgrounds are seen as
              essential for both good science and personal growth.
            </p>
          </div>

          <div style={{ marginTop: "1.6rem" }}>
            <h3
              className="section-title"
              style={{ fontSize: "1rem", marginBottom: "0.4rem" }}
            >
              Alumni (selection)
            </h3>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "1.2rem",
                fontSize: "0.9rem",
              }}
            >
              <li>
                Dolça Serra Sallent – Erasmus Bachelor student
              </li>
              <li>
                Alberto Pavan – Master student (Bioinformatics)
              </li>
              <li>
                Selina Forrer – PhD student
              </li>
              <li>
                Irene Marco del Prado – Research assistant
              </li>
              <li>
                Several Bachelor and Master students contributing to projects
                on bacterial RNA biology and gene regulation.
              </li>
            </ul>
          </div>
        </div>

        {/* Publications */}
        <div style={{ marginTop: "2.6rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Selected publications
          </h2>
          <p className="lead" style={{ marginBottom: "0.9rem" }}>
            A full and regularly updated list of publications is maintained on
            the lab website. Below is a selection illustrating the scope of our
            work on gene regulation, CRISPR biology and bacterial physiology.
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
              al. (2025). Genetic adaptation to amoxicillin in{" "}
              <em>Escherichia coli</em>. <em>PLOS One</em>.
            </li>
            <li>
              Han Y, Wang B, Agnolin A, <strong>Dugar G</strong>, Hamoen LW
              (2025). Ribosome pausing in amylase-producing{" "}
              <em>Bacillus subtilis</em> during long fermentation.{" "}
              <em>Microbial Cell Factories</em>.
            </li>
            <li>
              Wang B, Kes MBMJ, van den Berg van Saparoea ACH,{" "}
              <strong>Dugar G</strong>, Hamoen LW (2024). Increasing enzyme
              production via LonA inactivation in <em>Bacillus subtilis</em>.{" "}
              <em>Microbial Cell Factories</em>.
            </li>
            <li>
              <strong>Dugar G</strong>, Hofmann A, Heermann DW, Hamoen LW
              (2022). A chromosomal loop anchor mediating bacterial genome
              organization. <em>Nature Genetics</em>.
            </li>
            <li>
              Jiao C, Sharma S, <strong>Dugar G</strong>, et al. (2021).
              Noncanonical crRNAs enabling multiplexable RNA detection by Cas9.{" "}
              <em>Science</em>.
            </li>
            <li>
              Saha C, Mohanraju P, Stubbs A, <strong>Dugar G</strong>, et al.
              (2020). Guide-free Cas9 from pathogenic{" "}
              <em>Campylobacter jejuni</em> causes severe DNA damage.{" "}
              <em>Science Advances</em>.
            </li>
          </ul>

          <p style={{ marginTop: "0.8rem", fontSize: "0.9rem" }}>
            For more publications, including earlier work on CRISPR RNA
            biogenesis and bacterial transcriptomics, please refer to the full
            list on the lab website.
          </p>
        </div>

        {/* Lab website link & back link */}
        <div
          style={{
            marginTop: "2.6rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
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
          <Link href="/research-groups" className="btn btn-outline">
            Back to all research groups
          </Link>
        </div>
      </div>
    </section>
  );
}
