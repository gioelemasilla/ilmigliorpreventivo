import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for maximum performance and SEO
  output: 'export',

  // Image optimization configuration
  images: {
    unoptimized: true, // Required for static export
  },

  // Trailing slash for better SEO
  trailingSlash: true,

  // Enable compression
  compress: true,

  // Production optimizations
  poweredByHeader: false,
  reactStrictMode: true,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
