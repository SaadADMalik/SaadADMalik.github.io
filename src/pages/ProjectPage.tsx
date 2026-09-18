import { Link, useParams } from "react-router-dom";
import { WorkMedia } from "../components/WorkMedia";
import { projects } from "../data/content";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main id="main" className="section">
        <div className="section-inner">
          <h1>Not found</h1>
          <Link className="cta" to="/work">
            Back to work →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main">
      <div className="page-hero">
        <div>
          <p className="section-tag">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="lede">{project.lede}</p>
          <div className="stack-pills">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
        <div className="plate" style={{ width: "100%" }}>
          <WorkMedia project={project} />
        </div>
      </div>

      <section className="section">
        <div className="section-inner prose">
          {project.sections.map((block) => (
            <article key={block.heading} style={{ marginBottom: 48 }}>
              <h2>{block.heading}</h2>
              <p>{block.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <p className="section-tag">How it lands</p>
          <div className="steps">
            {project.steps.map((step) => (
              <div className="step" key={step.num}>
                <div className="step__num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.notes ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-inner grid-2">
            {project.notes.map((note) => (
              <article className="card" key={note.title}>
                <span className="card__meta">{note.title}</span>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
