const nextConfig = {
  reactStrictMode: false,
  // distDir: 'build', // Custom build directory instead of `.next`
  output: 'export', // Standalone mode for SSR & dynamic routes
  // experimental: {
  //   appDir: false, // Fix potential issues with standalone mode
  // },
  trailingSlash: true, // Enable trailing slash for all URLs
  images: {
    unoptimized: true, // Required if using Next.js Image component
  },
};

export default nextConfig;
