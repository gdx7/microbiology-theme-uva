// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Contact</p>
        <h1 className="section-title">Contact & location</h1>
        <p className="lead">
          The Microbiology theme is hosted at the Swammerdam Institute of Life
          Sciences (SILS), on the Science Park campus of the University of
          Amsterdam.
        </p>

        <div className="contact-layout" style={{ marginTop: "1.4rem" }}>
          <div className="contact-box">
            <h3>General enquiries</h3>
            <p>
              For questions about the Microbiology theme, research
              collaborations or student projects, please contact the theme
              coordinator or one of the principal investigators.
            </p>
            <p style={{ marginTop: "0.6rem" }}>
              <strong>Email:</strong>{" "}
              <a href="mailto:microbiology-theme@sils.uva.nl">
                microbiology-theme@sils.uva.nl
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h3>Postal address</h3>
            <p>
              Swammerdam Institute of Life Sciences (SILS)
              <br />
              University of Amsterdam
              <br />
              Science Park (Amsterdam)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
