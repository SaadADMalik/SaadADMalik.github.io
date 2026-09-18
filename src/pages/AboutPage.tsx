import { certifications, education, experience, person } from "../data/content";

export function AboutPage() {
  return (
    <main id="main">
      <div className="page-hero">
        <div>
          <p className="section-tag">About</p>
          <h1>
            {person.years} building AI
            <br />
            that operators will actually use.
          </h1>
        </div>
        <p className="lede">{person.summary}</p>
      </div>

      <section className="section">
        <div className="section-inner">
          <p className="section-tag">Experience</p>
          <div className="exp">
            {experience.map((job) => (
              <article key={job.org + job.dates}>
                <div className="exp__dates">{job.dates}</div>
                <div>
                  <h3>{job.role}</h3>
                  <div className="exp__org">{job.org}</div>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <p className="section-tag">Education</p>
          <h2>{education.title}</h2>
          <p className="lede">{education.org}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <p className="section-tag">Certifications</p>
          <h2>Paper I actually sat for.</h2>
          <div className="certs">
            {certifications.map((c) => (
              <a className="cert" key={c.title} href={c.file} target="_blank" rel="noreferrer">
                <strong>{c.title}</strong>
                <span>{c.kind === "pdf" ? "PDF" : "Image"} · Open →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
