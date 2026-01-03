"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui";

export function CTA() {
	return (
		<section className="py-24 md:py-32 px-6 md:px-12 bg-background">
			<div className="max-w-4xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="space-y-10"
				>
					{/* Headline */}
					<h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
						READY TO TRANSLATE YOUR
						<br />
						VISION INTO REALITY?
					</h2>

					{/* CTA Button */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<Button variant="primary" showArrow size="lg" className="uppercase">
							Start Your Project
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}