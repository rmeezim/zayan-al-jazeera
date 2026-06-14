// Base path lets the same build deploy to a custom domain (root, default) or a
// GitHub Pages project site (e.g. /zayan-al-jazeera). Set NEXT_PUBLIC_BASE_PATH
// in CI when serving from a project subpath; leave empty for the custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    // Static export has no image optimization server; serve assets as-is.
    unoptimized: true,
  },
  // Lint is run as its own step (npm run lint) so a warning never blocks deploy.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
