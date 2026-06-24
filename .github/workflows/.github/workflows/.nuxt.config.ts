// ================================================================
// Main Nuxt 3 Configuration File (nuxt.config.ts)
// Path: project root directory
// This file controls rendering mode, output format, and application paths.
// ================================================================

export default defineNuxtConfig({

  // =============================================================
  // 1. Rendering Mode (SSR / SPA)
  // =============================================================
  // true  => Server-Side Rendering (better SEO, faster initial load)
  // false => Single Page Application (SPA) – ideal for fully dynamic apps
  ssr: true,

  // =============================================================
  // 2. Nitro Engine Configuration (Nuxt's server engine)
  // =============================================================
  nitro: {
    // 'static' => Generates a fully static site (HTML/CSS/JS).
    // Perfect for static hosts like GitHub Pages, Cloudflare Pages, or Netlify.
    // If you need a server, change this to 'node-server' or 'vercel'.
    preset: 'static',

    // Output directory settings
    output: {
      // The folder where final build artifacts will be placed.
      // GitHub Actions (in nuxtjs.yml) uses this exact path to upload the artifact.
      publicDir: '.output/public',
    },
  },

  // =============================================================
  // 3. Application-Level Configuration
  // =============================================================
  app: {
    // Base URL of the application.
    // If your site is at the root (e.g., https://beaconchain.us), '/' is sufficient.
    // If deployed to a subpath (e.g., https://user.github.io/repo-name/),
    // set this to '/repo-name/'.
    //
    // Using an environment variable (process.env.NUXT_PUBLIC_BASE_URL)
    // allows you to change this value without modifying code – just set it in .env
    // or GitHub Secrets.
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
  },

});
