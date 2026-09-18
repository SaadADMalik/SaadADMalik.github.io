import { stack } from "../data/content";

export function StackMarquee() {
  const row = [...stack, ...stack];
  return (
    <section className="marquee" aria-label="Tools in daily use">
      <div className="marquee__eyebrow">Tools I use</div>
      <div className="marquee__viewport">
        <div className="marquee__track">
          {row.map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
