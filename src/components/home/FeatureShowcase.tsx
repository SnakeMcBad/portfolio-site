"use client";

import { useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

type Feature = {
  id: string;
  label: string;
  images: { src: string; alt: string }[];
  headline: string;
  description: string;
  points: string[];
};

const features: Feature[] = [
  {
    id: "feed",
    label: "Community Feed",
    images: [
      { src: "/features/Posts1.png", alt: "Community feed showing member posts" },
      { src: "/features/ComposeLayer.png", alt: "Post compose modal with media and mention support" },
    ],
    headline: "Community Posts & Real-Time Feed",
    description:
      "A shared activity feed where members post text, images, and videos with configurable visibility. The compose modal supports up to ten media attachments, @mention autocomplete, and Public or Friends-only visibility per post. Image posts enter an admin approval queue before going live; text-only posts publish immediately. The feed runs in two modes: Community (all approved posts) and My Feed (personalized by follows and friends activity).",
    points: [
      "@mention extraction and autocomplete built into the composer",
      "Up to 10 image/video attachments per post with preview grid",
      "Replies, reposts, and quote posts with full threading",
      "Approval queue for image posts; text-only auto-approves",
    ],
  },
  {
    id: "blog",
    label: "Blog",
    images: [
      { src: "/features/Blogs1.png", alt: "Blog listing page with post cards" },
      { src: "/features/Blogs2.png", alt: "Blog post detail with comments and author sidebar" },
    ],
    headline: "Rich-Content Blog Publishing",
    description:
      "A full publishing system with a block-based rich content editor supporting text paragraphs and inline images with optional captions. Each post carries a cover image, category (Travel, Wellness, Community, Guides, Philosophy), emoji tag, estimated read time, and excerpt. New blog posts enter an admin review queue before going public, and admins can mark posts as featured — featured posts appear in a hero position at the top of the blog listing.",
    points: [
      "Block-based rich editor with inline images and captions",
      "Category, emoji tag, cover image, and estimated read time",
      "Featured post flag with hero placement on listing page",
      "Likes and threaded comments with engagement counters",
    ],
  },
  {
    id: "groups",
    label: "Groups",
    images: [
      { src: "/features/Groups1.png", alt: "Groups discovery page with group cards" },
      { src: "/features/Groups2.png", alt: "Group detail page with feed and member sidebar" },
    ],
    headline: "Sub-Communities with Role-Based Access",
    description:
      "Members create and join topic-based groups with three privacy tiers: Public (open join), Invite-Only Visible (visible in search, requires approval to join), and Invite-Only Secret (hidden from non-members entirely). Each group has its own feed, member directory, and admin settings panel. Group admins can toggle comments, new posts, likes, and member-initiated invites on or off. Name and description changes go through a site-wide admin approval queue before applying.",
    points: [
      "Three privacy levels: Public, Invite-Only Visible, Invite-Only Secret",
      "Three member roles: ADMIN, MOD, MEMBER with distinct capabilities",
      "Per-group toggles: comments, new posts, likes, member invites",
      "Group creation enters admin approval queue before going live",
    ],
  },
  {
    id: "chat",
    label: "Chat",
    images: [
      { src: "/features/chatroom1.png", alt: "Real-time chat lobby with messages and online users" },
    ],
    headline: "Live Chat with Voice and Video",
    description:
      "A multi-room chat system powered by Socket.io for text messaging and LiveKit for voice and video sessions. Rooms range from open lobby channels to Pro-tier-exclusive lounges. Messages are persisted to the database and the last 100 load on room entry. Members can send image and file attachments, see who is typing, and edit or delete their own messages. LiveKit provides token-based voice/video with microphone and camera toggles, active speaker detection, and adaptive bitrate streaming.",
    points: [
      "Socket.io messaging with database persistence and 100-message history",
      "LiveKit voice/video with token auth and adaptive streaming",
      "Typing indicators, message editing, and file/image attachments",
      "Pro-tier-gated lounge room; online presence sidebar per room",
    ],
  },
  {
    id: "notifications",
    label: "Notifications",
    images: [
      { src: "/features/Notifications.png", alt: "Notification dropdown panel showing recent activity" },
    ],
    headline: "Aggregated Notification System",
    description:
      "Tracks five activity types — likes, replies, reposts, quote posts, and follows — and surfaces them in a persistent dropdown panel accessible from any page. Multiple actors on the same item are aggregated into a single entry (e.g. \"Jane and 2 others liked your post\") rather than flooding the list. Desktop shows an unread count badge on the bell icon; mobile shows a red badge over the profile avatar. Opening the panel auto-marks all notifications as read and clears the badge.",
    points: [
      "Five notification types: Like, Reply, Repost, Quote, Follow",
      "Actor aggregation prevents notification list flooding",
      "Desktop bell + mobile avatar badge with live unread count",
      "Auto-mark-as-read on panel open; 30-second background polling",
    ],
  },
  {
    id: "profiles",
    label: "Profiles",
    images: [
      { src: "/features/Profile.png", alt: "User profile page with tabs for posts, media, blog, and groups" },
    ],
    headline: "Member Profiles & Social Graph",
    description:
      "Each member has a public profile page with five tabs: About (bio, location, relationship status), Posts, Media, Blog, and Groups. Avatar and banner photo uploads enter an admin approval queue — the admin panel shows the pending image side-by-side with the currently approved version. The social graph supports one-way follows (followed members' activity surfaces in My Feed) and bidirectional friend requests with accept/reject flow.",
    points: [
      "Five-tab profile layout: About, Posts, Media, Blog, Groups",
      "Avatar and banner uploads with admin side-by-side review",
      "One-way follows and bidirectional friend requests",
      "Friends-only content visibility gate across feed and posts",
    ],
  },
  {
    id: "admin",
    label: "Admin Panel",
    images: [
      { src: "/features/adminactions.png", alt: "Admin panel showing moderation actions and queues" },
    ],
    headline: "Content Moderation & Admin Panel",
    description:
      "A full admin panel accessible only to ADMIN-role users, with a sticky left sidebar navigating ten moderation queues: community posts, blog posts, testimonials, groups, group posts, group edits, reports, and avatar/banner uploads. Every approve or deny action requires a confirmation modal before executing to prevent accidental moderation. Reports can be dismissed (leaving the post live) or escalated to delete the post, which simultaneously resolves all associated reports.",
    points: [
      "Ten moderation queues covering all user-generated content types",
      "Confirmation modal required for every approve and deny action",
      "Report resolution: dismiss or delete-post (resolves all linked reports)",
      "Side-by-side avatar/banner comparison in the upload review modal",
    ],
  },
];

export default function FeatureShowcase() {
  const [activeId, setActiveId] = useState(features[0].id);
  const [imgIdx, setImgIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const active = features.find((f) => f.id === activeId) ?? features[0];
  const safeIdx = Math.min(imgIdx, active.images.length - 1);
  const currentImage = active.images[safeIdx];

  function selectTab(id: string) {
    setActiveId(id);
    setImgIdx(0);
    setLightboxOpen(false);
  }

  function prevImg(e?: React.MouseEvent) {
    e?.stopPropagation();
    setImgIdx((i) => (i - 1 + active.images.length) % active.images.length);
  }

  function nextImg(e?: React.MouseEvent) {
    e?.stopPropagation();
    setImgIdx((i) => (i + 1) % active.images.length);
  }

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setImgIdx((i) => (i - 1 + active.images.length) % active.images.length);
      if (e.key === "ArrowRight") setImgIdx((i) => (i + 1) % active.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, active.images.length]);

  return (
    <section className="section feature-showcase-section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Platform Features"
            title="A full social media experience"
            description="Seven major feature packs built and refined across the platform — each one a real engineering surface with its own UI, state management, real-time layer, and backend integration."
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
                onClick={() => selectTab(f.id)}
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

            <div className="showcase-image-viewer">
              <div
                className="showcase-image-wrap"
                onClick={() => setLightboxOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxOpen(true)}
                aria-label="View image fullscreen"
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="showcase-image"
                />
                <span className="showcase-expand-hint">Click to expand</span>
              </div>

              {active.images.length > 1 && (
                <div className="showcase-image-nav">
                  <button
                    type="button"
                    className="img-nav-btn"
                    onClick={prevImg}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <span className="img-nav-counter">
                    {safeIdx + 1} / {active.images.length}
                  </span>
                  <button
                    type="button"
                    className="img-nav-btn"
                    onClick={nextImg}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>

      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            ×
          </button>

          {active.images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={prevImg}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          {active.images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={nextImg}
              aria-label="Next image"
            >
              ›
            </button>
          )}

          {active.images.length > 1 && (
            <div className="lightbox-counter">
              {safeIdx + 1} / {active.images.length}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
