import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "http://skyscentsclub.com/sitemap.xml",
    host: "http://skyscentsclub.com",
  };
}
