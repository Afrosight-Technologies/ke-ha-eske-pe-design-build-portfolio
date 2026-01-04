import { CTA, Hero, Philosophy, Testimonials, Works } from "@/components/landing";

export default function Home() {
	return (
		<main>
			<Hero />
			<Philosophy />
			<Works />
			<Testimonials />
			<CTA />
		</main>
	);
}
