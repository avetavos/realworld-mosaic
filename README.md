# Mosaic — Real-World Project Guide

A bilingual (English / ไทย) step-by-step guide that teaches you to build **Mosaic**, a storefront composed of independently deployed micro-frontends — a React shell that composes React, Svelte and Astro remotes at runtime with Module Federation 2.0, Web Components as the universal boundary, and a thin Hono BFF per slice.

It is project **#5** of the Learn Hub [Real-World Projects](https://projects.avetavos.com/taskflow/en/introduction/roadmap/) series — each project rebuilds a real application while adapting a different slice of the Learn Hub courses.

**Live:** https://projects.avetavos.com/mosaic/en/

## What you build

| Layer | Tech |
|-------|------|
| Shell | React 19 · react-router (declarative) · Module Federation 2.0 host |
| Remotes | Catalog (React) · Cart (Svelte 5) · Content (Astro) · each with its own Hono BFF |
| Boundary | Custom Elements + Shadow DOM · shared design-system primitives |
| Communication | typed event bus · session singleton · shared React singleton |
| Resilience | remote load fallbacks · lazy loading · versioned remote URLs |
| Runtime | pnpm workspace · Vite · independent deploys per slice |

Features: a shell that loads remotes by manifest, a catalog and cart that talk through a typed bus, a shared design system consumed by three frameworks, host-owned routing with remote sub-routes, error boundaries when a remote is down, and per-slice deployment with versioned remote URLs.

## The guide itself

This repo is an [Astro Starlight](https://starlight.astro.build/) site. The lessons live in `src/content/docs/en/**` and `src/content/docs/th/**`, grouped into 15 modules (auth-state → cart → catalog → communication → content → deployment → design-system → federation → introduction → resilience → routing → setup → shell → web-components → wrap-up). Each lesson follows the same shape: *what we're building → why → pros & cons → build it → verify → recap*, with full copy-pasteable code. Every code block is byte-identical between the two languages (`npm run check` enforces it), and the project has been assembled from the lessons and built/run end to end as part of review.

## Run the guide locally

```bash
npm install
npm run dev      # http://localhost:4321/mosaic/
npm run build    # static build to dist/
npm run check    # EN/TH parity check
```

## Deployment

Static site (`output: 'static'`, `base: '/mosaic'`) served by its own Cloudflare Worker at `projects.avetavos.com/mosaic/*`. `npm run deploy` builds, stages `dist/` under `.cf-assets/mosaic/` and runs `wrangler deploy`; the whole series can be redeployed with `learn-hub/tools/deploy-realworld.sh`.
