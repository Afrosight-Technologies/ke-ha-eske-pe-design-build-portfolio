import { motion } from "motion/react";
import Image from "next/image";

interface ProjectCardProps {
	project: {
		imageUrl: string;
		title: string;
		category: string;
	};
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "0px 0px -50px 0px" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="group relative cursor-pointer overflow-hidden aspect-16/10"
		>
			{/* Image */}
			<Image
				src={project.imageUrl}
				alt={project.title}
				width={800}
				height={800}
				className="object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
			/>

			{/* gradient bottom overlay */}
			<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-primary/60 to-transparent" />

			{/* Content */}
			<div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-primary-foreground z-10">
				<div className="transition-transform duration-500 group-hover:-translate-y-2">
					<p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-1 font-bold">
						{project.category}
					</p>
					<h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">
						{project.title}
					</h3>
				</div>
			</div>
		</motion.div>
	);
}
