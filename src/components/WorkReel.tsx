import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/content";
import { WorkMedia } from "./WorkMedia";

export function WorkReel() {
  const [index, setIndex] = useState(0);
  const last = projects.length - 1;

  const go = useCallback(
    (dir: number) => {
      setIndex((current) => {
        const next = current + dir;
        if (next < 0) return last;
        if (next > last) return 0;
        return next;
      });
    },
    [last],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      const reel = document.getElementById("ventures");
      if (reel) {
        const r = reel.getBoundingClientRect();
        const visible = r.top < window.innerHeight && r.bottom > 80;
        if (!visible) return;
      }
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const p = projects[index];

  return (
    <section className="reel" id="ventures" aria-label="My work">
      <div className="reel__inner">
        <div className="reel__head">
          <div>
            <p className="section-tag">My work</p>
            <h2>Selected projects</h2>
          </div>
          <div className="reel__controls">
            <button type="button" className="reel__arrow" onClick={() => go(-1)} aria-label="Previous project">
              ←
            </button>
            <button type="button" className="reel__arrow" onClick={() => go(1)} aria-label="Next project">
              →
            </button>
          </div>
        </div>

        <div className="reel__stage">
          <div className="reel__copy">
            <span className="badge">{p.eyebrow}</span>
            <h3>{p.title}</h3>
            <p className="lede">{p.lede}</p>
            <Link className="cta" to={p.href}>
              Read the case →
            </Link>
            <div className="reel__progress">
              <div className="reel__bars">
                {projects.map((item, i) => (
                  <button
                    type="button"
                    key={item.slug}
                    className={i === index ? "is-on" : ""}
                    aria-label={`Show ${item.title}`}
                    aria-current={i === index ? true : undefined}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <span>
                {p.num} / 0{projects.length}
              </span>
            </div>
          </div>
          <div className="reel__frame">
            <WorkMedia key={p.slug} project={p} />
            <span className="reel__chip">{p.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
