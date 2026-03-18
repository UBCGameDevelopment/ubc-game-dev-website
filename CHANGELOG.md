# Changelog

All notable changes to this project are documented in this file.

This format is inspired by the Terraform changelog style:
versioned sections with clear, categorized highlights.

## v2.0.1 (March 18, 2026)

This release focuses on polish, content refreshes, performance follow-up work, and presentation fixes across the site.

ENHANCEMENTS:

* Refined homepage presentation with stronger background/text contrast, tuned marquee motion, brighter section backdrops, and animated mission stats.
* Updated the Events page for the current season, including the Year-End Showcase and refreshed active/completed event states.
* Replaced placeholder legacy team data with real 2024-2025 archive content and imagery.
* Simplified theme handling to preserve the intended light color presentation across browsers and reduce forced dark mode issues.
* Updated the site toolchain to `astro@5.18.0` and `@astrojs/check@0.9.6`.

FIXES:

* Corrected the tote bag price typo from `$3` to `$30`.
* Fixed the merch purchase modal import path on the Merch page.
* Fixed escaped typewriter characters in terminal-style UI so symbols like `&`, `<`, and `>` render correctly.
* Removed the empty external links wrapper from the shared links config.

PERFORMANCE:

* Converted merch image assets to `.webp` and updated merch data to use the lighter files.
* Improved marquee rendering with a duplicated-track implementation, GPU-friendly transforms, and reduced-motion handling.

INTERNAL:

* Removed browser-visible HTML comments and shipped CSS comments from rendered templates and styles.

## v2.0.0 (February 17, 2026)

This release is a full rehaul of the UBC Game Dev website, focused on
Cyberpunk UI/UX refresh, page architecture cleanup, better UX, and a new merch experience.

NEW FEATURES:

* Added a full merch experience, including interactive cards, multi-image support,
  category filters, product modals, and drop notification UI.
* Added new Home page sections/components (mission, terminal-style logs, project previews,
  events preview, FAQ, and improved call-to-action flows).
* Added new and expanded About/Team experiences, including legacy team support and updated roster components.
* Added richer Events interactions with modal-driven details and updated event presentation.
* Removed the Sponsor page and replaced it with a full Merch page experience.

ENHANCEMENTS:

* Rehauled UI/UX across Home, About, Events, Games, Contact, Team, and Merch.
* Unified layouts and refactored shared component patterns for consistency.
* Improved mobile behavior and navigation responsiveness, including navbar/mobile menu updates.
* Refactored games/event/exec service and data structures for maintainability.
* Reorganized assets (including games gallery paths) and updated supporting content/docs.
* Updated dependencies and tooling (Astro/Vercel/TypeScript-related stack updates).

FIXES:

* Fixed loading-screen race conditions during initial page load.
* Fixed mobile scroll and menu interaction issues.
* Fixed multiple TypeScript import/type errors and cleanup issues from previous structure.
* Fixed event content/date updates and timeline-related behavior.

UPGRADE NOTES:

* Several legacy components/scripts were removed or replaced as part of the rehaul.
* Some page/data paths and imports changed due to component and asset reorganization.
* Sponsor/Partners page content structure was retired and replaced by the Merch page flow.
* Existing contributors should review page/component data wiring before applying old patches.

CONTRIBUTORS:

* Rehaul by @UBCGameDevelopment (@vvictort) in PR #5.
* @UBCGameDevelopment made their first contribution in PR #1.

LINKS:

* Rehaul PR: https://github.com/UBCGameDevelopment/ubc-game-dev-website/pull/5
* First contribution PR: https://github.com/UBCGameDevelopment/ubc-game-dev-website/pull/1
* Full changelog for this release line:
  https://github.com/UBCGameDevelopment/ubc-game-dev-website/commits/v2.0.0
