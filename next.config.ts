import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/**`,
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)", // Apply to all routes
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "no-store, max-age=0, must-revalidate",
  //         },
  //         { key: "Pragma", value: "no-cache" },
  //         { key: "Expires", value: "0" },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
