import { Link } from "react-router-dom";
import { projects } from "../data/content";
import { WorkMedia } from "../components/WorkMedia";

export function WorkIndexPage() {
  return (
    <main id="main">
      <div className="page-hero">
        <div>
          <p className="section-tag">My work</p>
          <h1>Four systems. Same discipline.</h1>
        </div>
        <p className="lede">
          Production code, fixed scope, operators who can own it. Rift and Peak QA
          are the current work. The knowledge base and AutoInsight are the earlier
          proof that this is a practice, not a one-off.
        </p>
      </div>
      <section className="section">
        <div className="section-inner">
          <div className="work-list">
            {projects.map((p) => (
              <Link key={p.slug} className="work-row" to={p.href}>
                <span className="work-row__num">{p.num}</span>
                <span className="work-row__name">{p.title}</span>
                <span className="work-row__claim">{p.claim}</span>
              </Link>
            ))}
          </div>
          <div className="plates" style={{ marginTop: 48 }}>
            {projects.map((p) => (
              <Link key={p.slug} to={p.href} className="plate" aria-label={p.title}>
                <WorkMedia project={p} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
