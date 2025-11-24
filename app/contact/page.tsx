// app/contact/page.tsx
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Contact</p>
        <h1 className="section-title">Contact &amp; location</h1>
        <p className="lead">
          The Microbiology theme is hosted at the Swammerdam Institute of Life
          Sciences (SILS), on the Science Park campus of the University of
          Amsterdam.
        </p>

        {/* Logo next to the contact boxes */}
        <div
          style={{
            marginTop: "1.4rem",
            display: "flex",
            alignItems: "stretch",
            gap: "1.4rem",
            flexWrap: "wrap",
          }}
        >
          <div
            className="card"
            style={{
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 1.4rem",
              maxWidth: "220px",
            }}
          >
            <Image
              src="/logo.png"
              alt="Microbiology theme logo"
              width={150}
              height={140}
              style={{ height: "auto", width: "150%", maxWidth: "210px" }}
              priority
            />
          </div>

          {/* Two contact boxes in the usual grid layout */}
          <div className="contact-layout" style={{ flex: "1 1 280px" }}>
            <div className="contact-box">
              <h3>General enquiries</h3>
              <p>
                For questions about the Microbiology theme, research
                collaborations or student projects, please contact one of the principal investigators.
              </p>
              <p style={{ marginTop: "0.6rem" }}>
                <strong>Email:</strong>{" "}
                <a href="mailto:microbiology-theme@sils.uva.nl">
                  microbiology@sils.uva.nl
                </a>
              </p>
            </div>

            <div className="contact-box">
              <h3>Postal &amp; visiting address</h3>
              <p>
                Swammerdam Institute of Life Sciences (SILS)
                <br />
                University of Amsterdam
                <br />
                Science Park 904
                <br />
                1098 XH Amsterdam
                <br />
                The Netherlands
              </p>
            </div>
          </div>
        </div>

        {/* Map – glassy card with Science Park 904 */}
        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.1rem" }}>
            Map &amp; directions
          </h2>
          <p className="lead">
            SILS is located in the Faculty of Science building at Amsterdam
            Science Park 904. The campus is easily reachable by train, bus and
            bicycle.
          </p>

          <div
            style={{
              marginTop: "1rem",
              position: "relative",
              paddingBottom: "56.25%", // 16:9
              height: 0,
              overflow: "hidden",
              borderRadius: "16px",
              border: "1px solid rgba(148, 163, 184, 0.5)",
              boxShadow: "0 18px 40px rgba(15, 23, 42, 0.15)",
              background: "rgba(194, 193, 193, 0.18)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <iframe
              title="SILS, Science Park 904, Amsterdam"
              src="https://www.google.com/maps?q=Science%20Park%20904,%201098%20XH%20Amsterdam&output=embed"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
