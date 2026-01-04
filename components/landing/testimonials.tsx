import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import { TestimonialsCarousel } from "./testimonials-carousel";

export async function Testimonials() {
	const { data: testimonials } = await sanityFetch({ query: TESTIMONIALS_QUERY });

	return <TestimonialsCarousel testimonials={testimonials} />;
}
