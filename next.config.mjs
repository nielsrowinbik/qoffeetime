import NextPWA from "next-pwa";
import { withContentlayer } from "next-contentlayer";

const withPWA = NextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withContentlayer(
  withPWA({
    reactStrictMode: true,
  })
);
