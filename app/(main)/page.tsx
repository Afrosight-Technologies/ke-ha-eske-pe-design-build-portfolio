import { Suspense } from "react";
import {
	AtmosphericDivider,
	CategoryShowcaseSkeleton,
	CTA,
	Hero,
	Philosophy,
	Testimonials,
	Works,
} from "@/components/landing";
import { TestimonialsSkeleton } from "@/components/landing/testimonials-skeloton";

export default function Home() {
	return (
		<main>
			<Hero />
			<Philosophy />
			<AtmosphericDivider />
			<Suspense fallback={<CategoryShowcaseSkeleton />}>
				<Works />
			</Suspense>
			<Suspense fallback={<TestimonialsSkeleton />}>
				<Testimonials />
			</Suspense>
			<CTA />
		</main>
	);
}
