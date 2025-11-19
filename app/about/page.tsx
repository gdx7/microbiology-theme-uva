// app/about/page.tsx

export default function AboutPage() {
  return (
    <section className="container section">
      <h1 className="h1">About the Department</h1>
      <p className="lead">
        Microorganisms are essential to life and society: they aid digestion and food
        production, but can also cause disease; they cycle nutrients and energy in nature
        and underpin technologies that benefit health, industry and the environment. 
      </p>
      <div className="row row-2" style={{marginTop:"1.5rem"}}>
        <div>
          <h2 className="h2">What we study</h2>
          <ul>
            <li>Fundamental microbial biology (growth, adaptation, differentiation).</li>
            <li>Microbiome–host interactions across life stages and health contexts.</li>
            <li>Antibiotic resistance and development of new antimicrobials.</li>
            <li>Food microbiology and microbial process optimization.</li>
            <li>Biotechnology & photosynthetic cell factories (e.g., CO<sub>2</sub> conversion).</li>
          </ul>
          <p className="lead" style={{marginTop:".5rem"}}>
            Summary adapted from UvA’s Microbiology theme. 
          </p>
        </div>
        <div>
          <div className="media">Add image: /images/hero/hero-lab.jpg or a microscopy still</div>
        </div>
      </div>

      <div className="card" style={{marginTop:"1.2rem"}}>
        <p className="lead">
          The Microbiology theme is linked to campus initiatives such as the Amsterdam Microbiome Expertise Center (AMEC). 
        </p>
      </div>
    </section>
  );
}
