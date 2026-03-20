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
    title: "Real-Time WordPress Chatroom Plugin",
    summary:
      "A Discord-inspired chat experience designed for a WordPress community with role-aware controls, moderation logic, and interactive message behavior.",
    description:
      "Built to support a custom community experience beyond off-the-shelf chat embeds. The project focuses on message rendering, permissions, moderation flows, and UI behavior under real product constraints.",
    tech: ["Next.js", "React", "Node.js", "WordPress", "JavaScript", "CSS"],
    href: "/case-studies/chatroom-plugin/",
    featured: true,
    status: "Case Study",
  },
  {
    slug: "portfolio-site",
    title: "Personal Portfolio Platform",
    summary:
      "A cinematic portfolio built with modern React architecture, motion, and static export deployment.",
    description:
      "Designed to showcase engineering projects through polished interaction, strong case study writing, and a scalable frontend structure.",
    tech: ["Next.js", "TypeScript", "Motion", "CSS"],
    href: "/projects/",
    featured: true,
    status: "Live",
  },
  {
    slug: "future-project",
    title: "Next Featured Build",
    summary:
      "A reserved slot for your next polished project so the portfolio scales cleanly instead of feeling one-note.",
    description:
      "Use this card later for another strong engineering story. Do not fill your portfolio with weak filler just to increase the count.",
    tech: ["React", "TypeScript", "Node.js"],
    href: "/projects/",
    status: "In Progress",
  },
];