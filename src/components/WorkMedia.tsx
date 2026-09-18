import type { Project } from "../data/content";

export function WorkMedia({ project }: { project: Project }) {
  if (project.demo) {
    return (
      <video
        src={project.demo}
        poster={project.plate}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`${project.title} demo`}
      />
    );
  }
  return <img src={project.plate} alt="" />;
}
