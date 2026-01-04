import { defineQuery } from "next-sanity";

// Fetch all ordered by display order
export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    quote,
    "avatar": avatar.asset->url
  }
`);