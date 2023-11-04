const isBrowser = typeof window !== "undefined"

export const isReducedMotion = isBrowser
    ? window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
    : false;