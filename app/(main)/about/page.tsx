"use client";

import { Briefcase, Eye, Lightbulb, Ruler, ShieldCheck, Target } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { CTA } from "@/components/landing/cta";
import { Philosophy } from "@/components/landing/philosophy";

const architect = {
	name: "Nebiat Sentayehu",
	role: "CEO & Architect",
	image:
		"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
};

const coreValues = [
	{
		icon: Ruler,
		title: "Precision",
		description: "In architecture, a single millimeter matters. We obsess over the details.",
	},
	{
		icon: ShieldCheck,
		title: "Integrity",
		description: "What we promise in the 3D render is what we deliver on the ground.",
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		description: "Utilizing modern tech to help clients visualize before the first stone.",
	},
	{
		icon: Briefcase,
		title: "Accountability",
		description: "We take full responsibility from the first sketch to the final key handover.",
	},
];

// Animation variants for consistent fade + slide-up
const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
};

export default function AboutPage() {
	return (
		<main className="bg-background pt-32 pb-0">
			<div className="max-w-7xl mx-auto px-6 md:px-12">
				{/* Hero Header */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="text-center mb-32"
				>
					<motion.h1
						variants={fadeUp}
						className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-8"
					>
						A Little <span className="block text-secondary">About Us</span>
					</motion.h1>
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
						className="w-24 h-px bg-foreground mx-auto mb-12 origin-center"
					/>
					<motion.p
						variants={fadeUp}
						className="max-w-2xl mx-auto text-secondary text-xl font-light leading-relaxed"
					>
						The name &apos;Ke Ha Eske Pe&apos; (ከሀ እስከ ፐ) signifies the complete Amharic alphabet.
						It represents our core notion: bridging the gap between design and construction to
						ensure your vision remains uncompromised from the first letter to the last.
					</motion.p>
				</motion.div>

				{/* Mission & Vision Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={staggerContainer}
					className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-32 md:mb-40"
				>
					{/* Mission */}
					<motion.div variants={fadeUp} className="space-y-6">
						<div className="flex items-center gap-4">
							<Target size={28} strokeWidth={1.5} />
							<h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
								Our Mission
							</h3>
						</div>
						<p className="text-lg md:text-xl text-secondary font-light leading-relaxed">
							To redefine the construction landscape in Ethiopia by providing a seamless, integrated
							design-build experience that prioritizes architectural integrity above all else.
						</p>
					</motion.div>

					{/* Vision */}
					<motion.div variants={fadeUp} className="space-y-6">
						<div className="flex items-center gap-4">
							<Eye size={28} strokeWidth={1.5} />
							<h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
								Our Vision
							</h3>
						</div>
						<p className="text-lg md:text-xl text-secondary font-light leading-relaxed">
							To become the benchmark for contemporary Ethiopian architecture, creating spaces that
							honor tradition while embracing modern engineering.
						</p>
					</motion.div>
				</motion.div>

				{/* Core Values Section */}
				<div className="mb-32 md:mb-40">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={staggerContainer}
						className="text-center mb-16 md:mb-20"
					>
						<motion.p
							variants={fadeUp}
							className="text-label tracking-wide-xl uppercase text-secondary mb-6 font-bold"
						>
							Core Values
						</motion.p>
						<motion.div
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, ease: "circOut" }}
							className="w-12 h-[2px] bg-foreground mx-auto"
						/>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={staggerContainer}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
					>
						{coreValues.map((value) => (
							<motion.div
								key={value.title}
								variants={fadeUp}
								className="flex flex-col items-center text-center group"
							>
								<div className="mb-6 md:mb-8 p-5 md:p-6 rounded-full border border-foreground/5 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
									<value.icon size={28} strokeWidth={1.5} />
								</div>
								<h4 className="text-lg font-bold tracking-tight uppercase mb-3 md:mb-4">
									{value.title}
								</h4>
								<p className="text-secondary font-light leading-relaxed text-sm md:text-base">
									{value.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Leadership Section */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				variants={staggerContainer}
				className="bg-background my-24"
			>
				<div className="max-w-7xl mx-auto px-6 md:px-12">
					<motion.div variants={fadeUp} className="text-center mb-24">
						<p className="text-sm tracking-wide-sm uppercase text-muted-foreground mb-6 font-semibold">
							Leadership
						</p>
						<h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase">
							The Architect
						</h2>
					</motion.div>

					<motion.div variants={fadeUp} className="flex flex-col gap-12 lg:gap-16">
						<div className="group cursor-pointer">
							<div className="aspect-3/4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8 bg-muted relative max-w-lg mx-auto">
								<Image
									src={architect.image}
									alt={architect.name}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-1000"
								/>
							</div>
							<div className="text-center">
								<h3 className="text-xl font-bold tracking-tight uppercase mb-1">
									{architect.name}
								</h3>
								<p className="text-[10px] tracking-wide-sm uppercase text-muted-foreground font-bold">
									{architect.role}
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>

			<CTA />
		</main>
	);
}
