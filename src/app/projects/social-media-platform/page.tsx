"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";
import ButtonLink from "@/components/shared/ButtonLink";
import HeroCarousel from "@/components/shared/HeroCarousel";

type TabKey = "case-study" | "key-features" | "gallery";

const galleryItems = [
  {
    src: "/features/Posts1.png",
    caption:
      "Community feed — members post text, images, and videos with Public or Friends-only visibility. Likes, replies, reposts, and quote posts are all supported with full threading.",
  },
  {
    src: "/features/ComposeLayer.png",
    caption:
      "Post compose modal — @mention autocomplete, emoji picker, visibility selector, and up to four media attachments in a responsive preview grid.",
  },
  {
    src: "/features/Blogs1.png",
    caption:
      "Blog listing — post cards showing cover image, category tag, emoji, estimated read time, and excerpt. Sortable by most liked, most recent, or followed authors.",
  },
  {
    src: "/features/Blogs2.png",
    caption:
      "Blog post detail — rich content blocks with inline images, author sidebar showing post and follower counts, a gallery panel, and a threaded comment section.",
  },
  {
    src: "/features/Groups1.png",
    caption:
      "Groups discovery — browse and search sub-communities with visibility indicators (Public, Invite-Only, Secret), member counts, and join or request-to-join controls.",
  },
  {
    src: "/features/Groups2.png",
    caption:
      "Group page — dedicated feed, recent media sidebar, member list, and admin settings panel with toggles for comments, new posts, likes, and member invites.",
  },
  {
    src: "/features/chatroom1.png",
    caption:
      "Chat lobby — real-time messaging via Socket.io with message history, @mention support, emoji reactions, message editing, and an online presence sidebar.",
  },
  {
    src: "/features/Notifications.png",
    caption:
      "Notification panel — aggregated activity feed covering likes, replies, reposts, quotes, and follows. Multiple actors collapse into a single entry to prevent noise.",
  },
  {
    src: "/features/Profile.png",
    caption:
      "User profile — five-tab layout: About, Posts, Media, Blog, and Groups. Avatar and banner uploads enter an admin approval queue with side-by-side comparison.",
  },
  {
    src: "/features/adminactions.png",
    caption:
      "Admin panel — ten moderation queues covering all user-generated content types. Every approve or deny action requires a confirmation modal before executing.",
  },
];

export default function SocialMediaPlatformPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("case-study");
  const [galleryIndex, setGalleryIndex] = useState(0);

  function prevGallery() {
    setGalleryIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  }
  function nextGallery() {
    setGalleryIndex((i) => (i + 1) % galleryItems.length);
  }

  return (
    <>
      <section className="case-study-hero">
        <Container>
          <Reveal>
            <span className="eyebrow">Case Study</span>
            <h1 className="section-title">
              Full-Stack Social Media Platform
            </h1>
            <p className="section-description">
              A complete social network built from scratch — covering community feeds, groups,
              rich-content blogging, real-time chat with voice and video, a notification system,
              tiered membership, and a full content moderation admin panel.
            </p>

            <div className="case-study-meta">
              <span>Role: Full-stack engineer</span>
              <span>
                Stack: Next.js, TypeScript, PostgreSQL, Prisma, NextAuth.js, Socket.io, LiveKit, Tailwind CSS
              </span>
              <span>Status: Active development</span>
            </div>

            <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
              <ButtonLink href="/projects/" variant="secondary">
                Back to projects
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <HeroCarousel />

      <section className="section-tight">
        <Container>
          <Reveal>
            <div className="case-study-tab-row">
              <button
                type="button"
                className={`case-study-tab ${activeTab === "case-study" ? "active" : ""}`}
                onClick={() => setActiveTab("case-study")}
              >
                Case Study
              </button>
              <button
                type="button"
                className={`case-study-tab ${activeTab === "key-features" ? "active" : ""}`}
                onClick={() => setActiveTab("key-features")}
              >
                Key Features
              </button>
              <button
                type="button"
                className={`case-study-tab ${activeTab === "gallery" ? "active" : ""}`}
                onClick={() => { setActiveTab("gallery"); setGalleryIndex(0); }}
              >
                Gallery
              </button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          {activeTab === "case-study" && (
            <div className="case-study-grid">
              <Reveal>
                <div className="case-study-panel">
                  <h3>What it is</h3>
                  <p>
                    A full-stack social media platform built from scratch — no off-the-shelf
                    community plugins, no third-party social layer. The platform runs on
                    Next.js with the App Router, TypeScript throughout, and PostgreSQL
                    managed via Prisma ORM. It covers five core pillars: a community
                    activity feed with post threading, topic-based groups with role-based
                    access, long-form blogging with a rich content editor, multi-room real-time
                    chat with voice and video, and a notification system that tracks activity
                    across all surfaces. Every piece of user-generated content flows through
                    an admin moderation layer before becoming publicly visible.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="case-study-panel">
                  <h3>Technical Architecture</h3>
                  <p>
                    The frontend is a Next.js App Router application with strict TypeScript.
                    Authentication is handled by NextAuth.js v5 using JWT sessions — the
                    session object carries the user&apos;s ID, email, username, display name,
                    avatar URL, site role, and membership tier, available server- and
                    client-side. The database layer is PostgreSQL with Prisma ORM, spanning
                    roughly 20 models. Real-time chat runs over Socket.io with messages
                    persisted to the database; voice and video use LiveKit with token-based
                    room auth issued by a dedicated API route. Styling is Tailwind CSS 4
                    with CSS custom properties for theming, and next-themes handles
                    light/dark mode switching.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="case-study-panel">
                  <h3>Engineering: Auth &amp; Permission Layers</h3>
                  <p>
                    The permission model operates at two levels simultaneously. At the site
                    level, users are either MEMBER or ADMIN. At the group level, each user
                    has a separate role — ADMIN (group creator, full control), MOD (can
                    delete posts, lock comments, kick members), or MEMBER — scoped to each
                    group they belong to. Content visibility rules layer on top: unapproved
                    content is hidden from all non-admins, Friends-only posts are gated to
                    mutual friends, and Invite-Only Secret groups are invisible to
                    non-members. Making all of this work cleanly through NextAuth.js JWT
                    sessions required careful design of what data lives in the token versus
                    what gets fetched per-request.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="case-study-panel">
                  <h3>Engineering: Real-Time &amp; Media Pipeline</h3>
                  <p>
                    The real-time layer combines Socket.io for text messaging and LiveKit
                    for voice and video rooms. Both require the user&apos;s authenticated identity,
                    which means bridging the NextAuth.js session into both systems without
                    re-login. For LiveKit, this means issuing signed room tokens via a
                    server-side API route. The media upload pipeline is separate: eight
                    distinct upload endpoints handle different content types — post images,
                    blog cover images, blog inline blocks, chat attachments, user avatars,
                    user banners, and group assets — each storing metadata as JSON on the
                    relevant database record. User avatar and banner uploads enter a pending
                    approval queue rather than going live immediately.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="case-study-panel">
                  <h3>Engineering: Content Moderation at Scale</h3>
                  <p>
                    Every surface where users can create content has a corresponding
                    moderation path. Posts with image attachments are held pending admin
                    review; text-only posts auto-approve for speed. Blog posts, testimonials,
                    new groups, group posts, and group name/description edits all enter
                    separate approval queues. The admin panel exposes ten distinct queues
                    through a sticky sidebar, each with a confirmation modal before any
                    approve or deny action executes. The report system lets members flag
                    posts — admins can dismiss the report or delete the post, resolving
                    all associated reports simultaneously. Building this required consistent
                    patterns across very different content types without duplicating logic.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="case-study-panel">
                  <h3>What it demonstrates &amp; next steps</h3>
                  <p>
                    This project demonstrates the ability to design and ship a complete,
                    multi-surface product — not isolated features, but a coherent system
                    where auth, data modeling, real-time infrastructure, media pipelines,
                    and moderation all work together under one product. It reflects
                    full-stack depth: TypeScript across the stack, a 20-model Prisma schema,
                    two real-time systems, and an admin layer covering every content type.
                    Remaining active work includes: Stripe integration for membership
                    payments, direct messaging, mobile-first layout refinements, database
                    query profiling as content volume grows, and expanding admin analytics.
                  </p>
                </div>
              </Reveal>
            </div>
          )}

          {activeTab === "key-features" && (
            <div className="case-study-grid">
              <Reveal>
                <div className="case-study-panel">
                  <h3>Community Feed</h3>
                  <p>
                    The activity feed supports text, image, and video posts with Public or
                    Friends-only visibility. Post threading covers replies, reposts, and
                    quote posts. The compose modal includes an emoji picker, @mention
                    autocomplete, and up to four media attachments in a responsive preview
                    grid. Posts with image attachments enter an admin approval queue;
                    text-only posts publish immediately. Any member can report a post;
                    reports surface in the admin panel. My Feed personalizes the view by
                    surfacing posts from followed members and friends.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="case-study-panel">
                  <h3>Groups</h3>
                  <p>
                    Sub-communities with three privacy tiers: Public (open join),
                    Invite-Only Visible (requires approval), and Invite-Only Secret
                    (hidden from non-members). Each group has its own feed, media gallery,
                    member list, and settings panel. Member roles — ADMIN, MOD, MEMBER —
                    carry distinct capabilities: mods can delete posts, lock comments, and
                    kick members; group admins control all settings and cannot be demoted.
                    Admins can toggle comments, new posts, likes, and member-initiated
                    invites at the group level. New groups and name/description changes
                    enter the site admin&apos;s approval queue.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="case-study-panel">
                  <h3>Real-Time Chat &amp; Voice/Video</h3>
                  <p>
                    A multi-room text chat system built on Socket.io with full message
                    persistence — the last 100 messages load via REST on room entry.
                    Members can send image and file attachments, see typing indicators,
                    and edit or delete their own messages. LiveKit powers voice and video
                    sessions: token-based auth, microphone/camera toggles, active speaker
                    detection, and adaptive bitrate streaming. Presence is tracked per room
                    with join/leave events broadcast to all participants. The Pro Lounge
                    room is gated to Pro and Lifetime members only.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="case-study-panel">
                  <h3>Blog</h3>
                  <p>
                    A publishing system with a block-based rich content editor supporting
                    text paragraphs and inline images with optional captions. Each post
                    carries a cover image, category, emoji tag, excerpt, and estimated
                    read time. Members can like posts and leave threaded comments. Blog
                    posts enter an admin review queue before going public. Admins can
                    mark posts as featured — featured posts display in a hero position
                    at the top of the listing page. The listing can be sorted by most
                    liked, most recent, or posts from followed authors.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="case-study-panel">
                  <h3>Notifications &amp; Social Graph</h3>
                  <p>
                    The notification system tracks likes, replies, reposts, quote posts,
                    and follows. Multiple actors on the same item are aggregated into a
                    single entry rather than flooding the list. Desktop shows a bell icon
                    with unread count badge; mobile shows a red badge on the profile
                    avatar. Opening the panel auto-marks all as read and clears the badge.
                    The social graph supports one-way follows (surfaces activity in My
                    Feed) and bidirectional friend requests — Friends-only posts are
                    visible exclusively to mutual friends.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="case-study-panel">
                  <h3>Admin Panel &amp; Membership</h3>
                  <p>
                    A two-column admin panel with a sticky sidebar navigating ten
                    moderation queues: community posts, blogs, testimonials, groups,
                    group posts, group edits, reports, and avatar/banner uploads. Every
                    action requires a confirmation modal. Avatar and banner reviews show
                    pending versus currently approved images side by side. Membership is
                    tiered (Free, Pro Monthly/Quarterly/Yearly, Lifetime), with
                    tier-gated features including the Pro Lounge, HD video, direct
                    messaging, and private group creation.
                  </p>
                </div>
              </Reveal>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="gallery-viewer">
              <div className="gallery-main">
                <button
                  type="button"
                  className="gallery-nav-btn"
                  onClick={prevGallery}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <div className="gallery-image-frame">
                  <img
                    src={galleryItems[galleryIndex].src}
                    alt={`Platform screenshot ${galleryIndex + 1}`}
                    className="gallery-image"
                  />
                </div>
                <button
                  type="button"
                  className="gallery-nav-btn"
                  onClick={nextGallery}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
              <div className="gallery-caption-area">
                <span className="gallery-counter">
                  {galleryIndex + 1} / {galleryItems.length}
                </span>
                <p className="gallery-caption">{galleryItems[galleryIndex].caption}</p>
              </div>
            </div>
          )}

          {activeTab !== "gallery" && (
            <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
              <ButtonLink href="/projects/" variant="secondary">
                Back to projects
              </ButtonLink>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
