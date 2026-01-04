import { CTA } from "@/components/landing";
import { Footer, Navbar } from "@/components/layout";
import { SanityLive } from "@/sanity/lib/live";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Navbar />
			{children}
			<CTA />
			<Footer />
			<SanityLive />
		</div>
	);
}
