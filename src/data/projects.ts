export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  href: string;
  githubHref?: string;
  featured?: boolean;
  status: "Live" | "In Progress" | "Case Study";
};

export const projects: Project[] = [
  {
    slug: "chatroom-plugin",
    title: "Text, Audio, and Video Communications Plugin",
    summary:
      "A full-stack communication platform in the form of a plugin. Used for Wordpress sites, with added video and audio capabilities. Role-aware, customizable, and secure.",
    description:
      "Built to support a custom community experience beyond off-the-shelf chat embeds. The project focuses on video/audio sharing, message rendering, permissions, moderation flows, security, and UI behavior.",
    tech: ["PHP", "React", "Node.js", "WordPress", "JavaScript", "CSS", "HTML"],
    href: "/projects/chatroom-plugin/",
    featured: true,
    status: "Case Study",
  },
  {
    slug: "portfolio-site",
    title: "Portfolio Platform",
    summary:
      "A dynamic portfolio site built with motion in mind. Focused on clean UI and frontend systems. A project to communicate my journey in a lightweight manner.",
    description:
      "Designed to showcase engineering projects through polished interaction, strong case study writing, and a scalable frontend structure.",
    tech: ["Next.js", "TypeScript", "Motion", "CSS", "HTML", "Powershell"],
    href: "/",
    featured: true,
    status: "Live",
  },
];