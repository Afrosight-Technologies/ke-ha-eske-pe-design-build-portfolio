import { defineQuery } from "next-sanity";

// Fetch all ordered
export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    quote,
    "avatar": avatar.asset->url
  }
`);