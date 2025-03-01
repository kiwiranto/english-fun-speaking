import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // sassOptions: {
  //   additionalData: `$var: red;`,
  // },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
