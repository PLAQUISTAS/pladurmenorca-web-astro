---
name: core-web-vitals
description: "Core Web Vitals optimization guide covering LCP, INP, and CLS. Use when improving Google Search rankings, fixing Core Web Vitals issues, or optimizing user experience metrics. Do NOT use for running audits (use perf-lighthouse) or Astro-specific optimizations (use perf-astro)."
---

# Core Web Vitals Optimization Guide

## Overview

This guide addresses the three Core Web Vitals metrics that influence Google Search rankings and user experience: LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift).

## The Three Metrics

**LCP (Loading):** Measures when the largest visible content element renders. Target: ≤2.5 seconds for optimal performance.

**INP (Interactivity):** Evaluates responsiveness across all page interactions. Target: ≤200 milliseconds, measured at the 98th percentile.

**CLS (Visual Stability):** Tracks unexpected layout shifts during page visits. Target: ≤0.1, with shifts calculated as impact fraction multiplied by distance fraction.

## Key Optimization Strategies

### LCP Improvements
- Reduce Time to First Byte below 800ms via CDN and edge caching
- Preload critical images with `fetchpriority="high"`
- Inline critical CSS (under 14KB) and defer non-critical styles
- Avoid render-blocking JavaScript in document head
- Implement server-side rendering to deliver content in initial HTML

### INP Enhancements
- Break long tasks into chunks using async processing
- Provide immediate visual feedback before deferring heavy work
- Use `requestIdleCallback` for non-critical operations
- Lazy-load third-party scripts that block interactions
- Memoize expensive React/Vue components to prevent unnecessary re-renders

### CLS Prevention
- Specify dimensions for all images using width/height or aspect-ratio
- Reserve container space for ads and embeds with min-height
- Insert dynamic content below the viewport
- Use `font-display: optional` or match fallback font metrics
- Animate only transform and opacity properties, never layout attributes

## Measurement Resources

Use Chrome DevTools Lighthouse, WebPageTest for lab analysis, and the web-vitals JavaScript library for real-user metrics. Monitor field data through Search Console and Chrome User Experience Report.
