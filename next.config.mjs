/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    domains: [
      "imgs.search.brave.com",
      "res.cloudinary.com",
      "images.pexels.com",
      "images.unsplash.com",
      "openweathermap.org",
      "image.kilimall.com",
      "ke.jumia.is",
    ],
  },
};

export default withPlaiceholder(nextConfig);
