/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    images: {
      domains: ['elzt6v0s8u.ufs.sh'], // Add the hostname here
    },
  };
  
  export default config;