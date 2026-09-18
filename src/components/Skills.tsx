import { skillGroups } from "../data/content";

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <p className="section-tag">Skills</p>
        <h2>What I work with</h2>
        <p className="lede">
          Languages, agents, backends, and the deployment layer that keeps them in production.
        </p>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.name}>
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
