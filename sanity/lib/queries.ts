import { defineQuery } from "next-sanity";

// Fetch all testimonials
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

// Fetch projects with optional category and isFeatured filters
// Usage: sanityFetch({ query: PROJECTS_QUERY, params: { category: "exterior", isFeatured: true } })
// Pass null for params to get all projects
export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" 
    && defined(slug.current)
    && select(
      defined($category) && $category != "" => category == $category,
      true
    )
    && select(
      defined($isFeatured) => isFeatured == $isFeatured,
      true
    )
  ] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    location,
    isFeatured,
    "featuredImage": featuredImage.asset->url
  }
`);

// Fetch featured projects only (one per category for homepage showcase)
export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current) && isFeatured == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    "featuredImage": featuredImage.asset->url
  }
`);

// Fetch a single project by slug for the detail page
export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    location,
    area,
    year,
    clientName,
    description,
    "featuredImage": featuredImage.asset->url,
    "gallery": gallery[].asset->url,
    specifications[] {
      label,
      value
    }
  }
`);