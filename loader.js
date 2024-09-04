"use client";

export default function myImageLoader({ src, width, quality }) {
    // if (src.startsWith('https://image.pexels.com')) return src
    // if (src.startsWith('https://res.cloudinary.com')) return src
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
