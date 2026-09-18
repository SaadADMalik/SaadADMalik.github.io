import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { StackMarquee } from "../components/StackMarquee";
import { WorkReel } from "../components/WorkReel";
import { WorkTeaser } from "../components/WorkTeaser";
import { experience } from "../data/content";

export function HomePage() {
  return (
    <main id="main">
      <Hero />
      <StackMarquee />
      <Skills />
      <WorkReel />
      <WorkTeaser />
      <section className="section" id="experience">
        <div className="section-inner">
          <p className="section-tag">Experience</p>
          <h2>Where I&apos;ve been</h2>
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
          <Link className="cta" to="/about">
            Education and certifications →
          </Link>
        </div>
      </section>
    </main>
  );
}
