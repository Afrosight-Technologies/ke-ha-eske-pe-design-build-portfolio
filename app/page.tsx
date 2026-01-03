import { Button } from "@/components/ui";

export default function Home() {
	return (
		<main className="min-h-screen p-32 space-y-16">
			{/* Header */}
			<div className="space-y-2">
				<h1 className="text-4xl font-bold tracking-tight">Button Component</h1>
				<p className="text-muted-foreground">UI Component Preview</p>
			</div>

			{/* Primary Variant */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">
					Primary Variant
				</h2>
				<div className="flex flex-wrap gap-6 items-center">
					<Button variant="primary" size="sm">
						Small
					</Button>
					<Button variant="primary" size="default">
						Default
					</Button>
					<Button variant="primary" size="lg">
						Large
					</Button>
					<Button variant="primary" disabled>
						Disabled
					</Button>
				</div>
			</section>

			{/* Primary with Arrow Animation */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">
					Primary with Arrow (CTA Style)
				</h2>
				<div className="flex flex-wrap gap-6 items-center">
					<Button variant="primary" size="lg" showArrow>
						Start Your Project
					</Button>
					<Button variant="primary" size="default" showArrow>
						Get Started
					</Button>
				</div>
			</section>

			{/* Outline Variant */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">
					Outline Variant
				</h2>
				<div className="flex flex-wrap gap-6 items-center">
					<Button variant="outline" size="sm">
						Consult
					</Button>
					<Button variant="outline" size="default">
						View Work
					</Button>
					<Button variant="outline" size="lg">
						Contact Us
					</Button>
				</div>
			</section>

			{/* Ghost Variant */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">Ghost Variant</h2>
				<div className="flex flex-wrap gap-6 items-center">
					<Button variant="ghost" size="sm">
						አማ
					</Button>
					<Button variant="ghost" size="default">
						Learn More
					</Button>
				</div>
			</section>

			{/* Link Variant */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">Link Variant</h2>
				<p className="text-sm text-muted-foreground">Basic link style with underline on hover</p>
				<div className="flex flex-wrap gap-8 items-center">
					<Button variant="link" size="sm">
						Small Link
					</Button>
					<Button variant="link" size="default">
						Default Link
					</Button>
					<Button variant="link" size="lg">
						Large Link
					</Button>
				</div>
			</section>

			{/* Dark Background Demo */}
			<section className="space-y-6 bg-accent p-8 -mx-12">
				<h2 className="text-xl font-bold tracking-wide uppercase text-accent-foreground">
					On Dark Background
				</h2>
				<div className="flex flex-wrap gap-6 items-center">
					<Button
						variant="outline"
						size="lg"
						className="border-white text-white hover:bg-white hover:text-black"
					>
						Start Your Project
					</Button>
				</div>
			</section>
		</main>
	);
}
