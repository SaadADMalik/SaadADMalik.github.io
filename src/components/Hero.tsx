import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { person } from "../data/content";

export function Hero() {
  const host = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let handle: { destroy: () => void } | undefined;
    let cancelled = false;

    import("../lib/heroCanvas")
      .then(({ mountHeroCanvas }) => {
        if (cancelled) return undefined;
        return mountHeroCanvas(el, {
          real: person.photo,
          dotted: person.photoDotted,
        });
      })
      .then((h) => {
        if (!h) return;
        if (cancelled) h.destroy();
        else handle = h;
      })
      .catch(() => {
        const img = document.createElement("img");
        img.src = person.photo;
        img.alt = person.name;
        img.className = "hero-canvas";
        img.style.objectFit = "cover";
        el.appendChild(img);
      });

    return () => {
      cancelled = true;
      handle?.destroy();
    };
  }, []);

  return (
    <section className="intro" id="hero">
      <div className="intro__copy">
        <p className="section-tag">Personal portfolio</p>
        <h1>{person.name}</h1>
        <p className="intro__kicker">
          {person.city} · {person.years} building AI systems
        </p>
        <p className="lede intro__summary">{person.summary}</p>
        <div className="intro__actions">
          <Link className="cta cta--solid" to="/work">
            See my work
          </Link>
          <a className="cta" href="#skills">
            Skills
          </a>
          <a className="cta" href={person.resume}>
            Resume
          </a>
        </div>
      </div>
      <div className="intro__portrait-wrap">
        <div
          className="intro__portrait"
          ref={host}
          role="img"
          aria-label={person.name}
        />
      </div>
    </section>
  );
}
