"use client";

import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import ButtonLink from "./ButtonLink";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <div className="project-card-top">
        <span className="project-badge">{project.status}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <ul className="tech-list">
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-actions">
        <ButtonLink href={project.href} variant="secondary">
          View Project
        </ButtonLink>
        {project.githubHref ? (
          <ButtonLink href={project.githubHref} variant="ghost">
            View GitHub
          </ButtonLink>
        ) : null}
      </div>
    </motion.article>
  );
}