"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

type Feature = {
  id: string;
  label: string;
  image: string;
  headline: string;
  description: string;
  points: string[];
};

const features: Feature[] = [
  {
    id: "feed",
    label: "Community Feed",
    image: "/features/feed.png",
    headline: "Social Feed & Post Creation",
    description:
      "The heart of the platform — a real-time activity feed where members share posts, photos, and videos. The post composer supports @mention tagging, visibility controls (Public, Friends, Private), and rich media attachments, all surfaced in a clean, scrollable timeline.",
    points: [
      "@username autocomplete with mention tagging",
      "Photo and video attachment support",
      "Public, Friends, and Private visibility per post",
      "Real-time feed updates without full page reload",
    ],
  },
  {
    id: "notifications",
    label: "Notifications",
    image: "/features/notifications.png",
    headline: "Real-Time Notification System",
    description:
      "A persistent notification panel that surfaces likes, follows, comments, and mentions in real time. Notifications are grouped and timestamped, giving users a clear activity log without noise — and a quick path back to the relevant content.",
    points: [
      "Live like, follow, and comment notifications",
      "Grouped and timestamped notification entries",
      "Dropdown panel accessible from any page",
      "Unread badge count on the notification icon",
    ],
  },
  {
    id: "blog",
    label: "Blog",
    image: "/features/blog.png",
    headline: "Member Blogging & Comments",
    description:
      "A full publishing system where members can write blog posts, build a following, and engage through comments. Each post page includes an author sidebar with post/follower counts, a media gallery, and a threaded comment section for back-and-forth conversation.",
    points: [
      "Rich text blog authoring with image support",
      "Author profile sidebar with stats",
      "Gallery panel for post-related media",
      "Threaded comment section with post comment flow",
    ],
  },
  {
    id: "groups",
    label: "Groups",
    image: "/features/groups.png",
    headline: "Community Groups",
    description:
      "Members can create and join topic-based groups with configurable visibility and membership rules — Public, Invite-Only Public, or Private. Each group has its own feed, media gallery, member list, and about section, giving communities a dedicated home.",
    points: [
      "Public, Invite-Only, and Private group types",
      "Per-group feed, media, members, and about tabs",
      "Recent media sidebar for quick browsing",
      "Group admin settings and membership controls",
    ],
  },
  {
    id: "chat",
    label: "Real-Time Chat",
    image: "/features/chat.png",
    headline: "Live Chat Lobby",
    description:
      "A persistent, real-time chat system with lobby and room support. Users can send messages, share emoji reactions, @mention others, and edit their own messages. The chat renders a full history and shows online presence, creating a live community feel.",
    points: [
      "Real-time message delivery with Socket.IO",
      "@mention support with user autocomplete",
      "Emoji reactions and inline emoji picker",
      "Message editing with edited indicator",
    ],
  },
];

export default function FeatureShowcase() {
  const [activeId, setActiveId] = useState(features[0].id);
  const active = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <section className="section feature-showcase-section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Platform Features"
            title="A full social media experience"
            description="Five major feature packs built and refined across the platform — each one a real engineering surface with its own design, state management, and backend integration."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="showcase-tabs" role="tablist" aria-label="Platform features">
            {features.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={activeId === f.id}
                className={`showcase-tab ${activeId === f.id ? "active" : ""}`}
                onClick={() => setActiveId(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="showcase-panel">
            <div className="showcase-content">
              <h3 className="showcase-headline">{active.headline}</h3>
              <p className="showcase-description">{active.description}</p>
              <ul className="showcase-points">
                {active.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="showcase-image-wrap">
              <img
                src={active.image}
                alt={`${active.headline} screenshot`}
                className="showcase-image"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
