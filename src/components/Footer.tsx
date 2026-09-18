import { Link } from "react-router-dom";
import { person, projects } from "../data/content";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <div>
          <p className="section-tag">Contact</p>
          <h2>Let&apos;s talk.</h2>
          <p className="lede contact-line">
            {person.city} · {person.years}
            <br />
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <br />
            <a href={person.phoneHref}>{person.phone}</a>
          </p>
          <a className="cta" href={`mailto:${person.email}`}>
            Book a conversation →
          </a>
        </div>
        <div>
          <div className="col-title">Explore</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to={{ pathname: "/", hash: "#skills" }}>Skills</Link>
            <Link to="/about">About</Link>
            <a href={person.resume}>Resume</a>
          </nav>
        </div>
        <div>
          <div className="col-title">Work</div>
          <nav>
            {projects.map((p) => (
              <Link key={p.slug} to={p.href}>
                {p.title}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <div className="col-title">Connect</div>
          <nav>
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={person.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} {person.name}. All rights reserved.</p>
    </footer>
  );
}
