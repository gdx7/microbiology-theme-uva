"use client";

import NewsRotator from "./NewsRotator";

/**
 * Simple wrapper that reuses the NewsRotator component.
 * We keep this file so any old imports of NewsCarousel still work,
 * but all logic is handled by NewsRotator.
 */
export default function NewsCarousel() {
  return <NewsRotator />;
}
