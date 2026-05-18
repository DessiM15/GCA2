import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Next.js built-in image optimization requires a Node.js server and is
    // incompatible with static export. To enable automatic WebP/AVIF conversion
    // and responsive sizing, either:
    //   1. Deploy to Vercel (remove output: "export") — optimization is automatic
    //   2. Use a custom loader (Cloudinary, imgix, etc.)
    //   3. Manually optimize images before build (squoosh, sharp CLI)
    unoptimized: true,
  },
};

export default nextConfig;
