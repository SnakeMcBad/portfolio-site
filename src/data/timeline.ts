export type TimelineItem = {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  side: "left" | "right";
};

export const timeline: TimelineItem[] = [
  {
    title: "Full Stack Software Developer",
    subtitle: "MSNP LLC",
    date: "Present",
    side: "right",
    description: [
      "Developing systems and scripts using Python, PowerShell, and Node.js.",
      "Working on backend development using Java, JavaScript, and SQL.",
      "Maintaining version control and development workflows using Git and GitHub.",
    ],
  },
  {
    title: "Associate's Degree",
    subtitle: "Pikes Peak State College",
    date: "2022 – 2023",
    side: "left",
    description: [
      "Focused on end-to-end application development using JavaScript",
      "Created applications using Python and C++",
      "Learned Software Engineering best practices.",
    ],
  },
  {
    title: "Loyalty Service Representative",
    subtitle: "Comcast",
    date: "2019 – 2021",
    side: "right",
    description: [
      "Managed high-volume, high-pressure customer interactions",
      "Delivered cost-effective solutions while balancing customer satisfaction",
      "Drove revenue growth by discussing trade-offs and having clear communication.",
    ],
  },
];