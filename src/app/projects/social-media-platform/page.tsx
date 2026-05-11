"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/shared/Reveal";
import ButtonLink from "@/components/shared/ButtonLink";

type TabKey = "case-study" | "key-features";

export default function SocialMediaPlatformPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("case-study");

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
              A complete community-driven social network built end-to-end — covering feeds, groups,
              blogs, real-time chat, and notifications, with deep custom engineering throughout.
            </p>

            <div className="case-study-meta">
              <span>Role: Full-stack engineer</span>
              <span>
                Stack: WordPress, PHP, JavaScript, Node.js, React, MySQL, CSS, HTML
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
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container>
          {activeTab === "case-study" ? (
            <div className="case-study-grid">
              <Reveal>
                <div className="case-study-panel">
                  <h3>What it is</h3>
                  <p>
                    This is a production social media platform built on WordPress and PeepSo,
                    extended with significant custom feature development across the entire stack.
                    The platform covers the full social network experience: a community activity
                    feed, topic-based groups, member blogging, a real-time chat lobby, and a
                    live notification system. Rather than relying solely on off-the-shelf plugins,
                    the project required deep integration work — bridging WordPress's user system,
                    PeepSo's social layer, and custom Node.js services into a cohesive product
                    that feels built from scratch.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="case-study-panel">
                  <h3>Why I built it</h3>
                  <p>
                    The motivation was to create a platform where communities could actually form
                    — not just consume content, but build relationships, share interests, and
                    talk in real time. Existing solutions either lacked the depth I wanted or
                    required paying for features I could build better myself. Building it from
                    scratch also gave me a meaningful engineering surface: every feature touches
                    the frontend, the backend, and the data layer in different ways, which forces
                    real architectural thinking rather than wiring up third-party APIs.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="case-study-panel">
                  <h3>Engineering Challenges — Architecture</h3>
                  <p>
                    The core challenge was building on top of WordPress and PeepSo without being
                    constrained by them. Both systems have strong opinions about how data flows
                    and how the frontend is structured. Getting custom JavaScript features to work
                    cleanly alongside PHP-rendered pages required careful separation of concerns:
                    knowing when to hook into WordPress lifecycle events, when to intercept and
                    override PeepSo behavior, and when to sidestep both entirely and manage state
                    client-side. The result is a layered architecture where each concern has a
                    clear home.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="case-study-panel">
                  <h3>Engineering Challenges — Real-Time</h3>
                  <p>
                    The real-time chat system required building a Node.js service that integrates
                    with WordPress authentication — users authenticated on the WordPress side need
                    a seamless session handoff into the Socket.IO environment without re-login.
                    This meant designing a token-based bridge between the two systems, handling
                    reconnection gracefully, and ensuring the chat UI stayed consistent with the
                    broader platform's design language. Managing concurrent users, room state,
                    and message history at the same time adds additional complexity that pushed
                    me to think carefully about server-side session management.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="case-study-panel">
                  <h3>What this project demonstrates</h3>
                  <p>
                    This project demonstrates the ability to ship a complete, multi-feature
                    product — not just isolated components, but a coherent system where feeds,
                    groups, blogs, chat, and notifications all work together as a single
                    experience. It reflects full-stack depth: custom PHP hooks, JavaScript
                    state management, real-time infrastructure, and MySQL data modeling, all
                    integrated under one product. It also demonstrates product thinking —
                    every feature was chosen because it serves a real user need, and every
                    implementation decision considered the long-term maintainability of the
                    codebase.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="case-study-panel">
                  <h3>Next steps</h3>
                  <p>
                    Active development is continuing across multiple feature areas:
                    <br />• Unifying the post experience across feeds, groups, and blogs
                    into a shared content model.
                    <br />• Adding direct messaging with private room support.
                    <br />• Expanding notification types and improving real-time delivery.
                    <br />• Performance profiling and database query optimization as
                    content volume grows.
                    <br />• Hardening authentication and permission flows across all features.
                  </p>
                </div>
              </Reveal>
            </div>
          ) : (
            <div className="case-study-grid">
              <Reveal>
                <div className="case-study-panel">
                  <h3>Community Feed</h3>
                  <p>
                    The activity feed is the platform's primary surface — a real-time timeline
                    where members post text, photos, and videos with configurable visibility.
                    The post composer supports @mention tagging with autocomplete, so users can
                    tag specific members inline. Feed updates propagate without full page reloads,
                    keeping the experience fast and responsive. The feed also aggregates activity
                    from groups and followed members, giving each user a personalized view of
                    what's happening across the community.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="case-study-panel">
                  <h3>Groups</h3>
                  <p>
                    Groups give communities a dedicated space with their own feed, media gallery,
                    member list, and about section. Group creators choose the visibility model:
                    Public (open to all), Invite-Only Public (visible but join requires approval),
                    or Private (hidden). Each group has its own settings panel for admins to manage
                    membership and content rules. The recent media sidebar gives members a quick
                    overview of the group's visual activity without navigating to the media tab.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="case-study-panel">
                  <h3>Blog</h3>
                  <p>
                    The blog feature allows any member to publish long-form posts with rich
                    text and embedded images. Each post page includes a dedicated author sidebar
                    showing post count and follower stats, plus a gallery panel for related media.
                    The comment system below each post supports back-and-forth conversation with
                    a "Post Comment" submit flow. A heart/like counter is displayed inline on
                    posts, and the author's most recent content is surfaced to encourage
                    continued readership.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="case-study-panel">
                  <h3>Real-Time Chat</h3>
                  <p>
                    The chat system provides a live lobby and room-based messaging using Socket.IO.
                    Messages appear immediately across all connected clients, and the interface
                    renders a full scrollable history on load. Users can @mention others with
                    autocomplete, react with emoji using an inline picker, and edit their own
                    sent messages — edited messages display an "(edited)" indicator for
                    transparency. Online presence is surfaced in the lobby header, creating a
                    sense of live community activity.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="case-study-panel">
                  <h3>Notifications</h3>
                  <p>
                    The notification system tracks likes, follows, comments, and mentions across
                    the entire platform and surfaces them through a persistent dropdown accessible
                    from any page. Each notification is timestamped and links back to the
                    originating content. An unread badge on the notification icon updates in
                    real time so users always know when new activity has occurred. The panel
                    is designed to be scannable — grouped by type and ordered by recency —
                    so users can act quickly without reading noise.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="case-study-panel">
                  <h3>Post Unification (In Progress)</h3>
                  <p>
                    One of the current active engineering efforts is unifying the post experience
                    across feeds, groups, and the blog into a shared content model. Currently,
                    each surface handles posts with slightly different data shapes and rendering
                    logic. The goal is to normalize this into a single post type with contextual
                    rendering — so a post created in a group looks and behaves consistently
                    whether it's viewed in the group feed, the community feed, or a member
                    profile, without duplicating business logic across three separate codepaths.
                  </p>
                </div>
              </Reveal>
            </div>
          )}

          <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
            <ButtonLink href="/projects/" variant="secondary">
              Back to projects
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
