import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "nawin-shastha",        // leave empty for username.github.io
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
