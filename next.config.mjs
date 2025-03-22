const nextConfig = {
  reactStrictMode: false,
  distDir: 'build', // Custom build directory instead of `.next`
  output: 'standalone', // Standalone mode for SSR & dynamic routes
  trailingSlash: true, // Enable trailing slash for all URLs
  images: {
    unoptimized: true, // Required if using Next.js Image component
  },
};

export default nextConfig;
