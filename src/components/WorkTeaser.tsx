import { Link } from "react-router-dom";
import { projects } from "../data/content";
import { WorkMedia } from "./WorkMedia";

export function WorkTeaser() {
  return (
    <section className="section" id="work">
      <div className="section-inner">
        <p className="section-tag">Project list</p>
        <h2>
          Systems that take work
          <br />
          off the calendar.
        </h2>
        <p className="lede">
          Four builds. Two in production now. The through-line is the same:
          give operators their time back, keep the judgment with the human.
        </p>
        <div className="work-list">
          {projects.map((p) => (
            <Link key={p.slug} className="work-row" to={p.href}>
              <span className="work-row__num">{p.num}</span>
              <span className="work-row__name">{p.title}</span>
              <span className="work-row__claim">{p.claim}</span>
            </Link>
          ))}
        </div>
        <Link className="cta" to="/work">
          All work →
        </Link>
        <div className="plates">
          {projects.slice(0, 2).map((p) => (
            <Link key={p.slug} to={p.href} className="plate" aria-label={p.title}>
              <WorkMedia project={p} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
