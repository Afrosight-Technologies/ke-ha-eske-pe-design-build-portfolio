import { Suspense } from "react";
import {
	AtmosphericDivider,
	CTA,
	Hero,
	Philosophy,
	Testimonials,
	Works,
} from "@/components/landing";
import { TestimonialsSkeleton } from "@/components/landing/testimonials-skeloton";
import { WorksSkeleton } from "@/components/landing/works-skeleton";

export default function Home() {
	return (
		<main>
			<Hero />
			<Philosophy />
			<AtmosphericDivider />
			<Suspense fallback={<WorksSkeleton />}>
				<Works />
			</Suspense>
			<Suspense fallback={<TestimonialsSkeleton />}>
				<Testimonials />
			</Suspense>
			<CTA />
		</main>
	);
}
