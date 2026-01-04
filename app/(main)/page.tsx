import { Suspense } from "react";
import { Hero, Philosophy, Testimonials, Works } from "@/components/landing";
import { TestimonialsSkeleton } from "@/components/landing/testimonials-skeloton";

export default function Home() {
	return (
		<main>
			<Hero />
			<Philosophy />
			<Works />
			<Suspense fallback={<TestimonialsSkeleton />}>
				<Testimonials />
			</Suspense>
		</main>
	);
}
