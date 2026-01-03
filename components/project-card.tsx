import Image from "next/image";
import { motion } from "motion/react";

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
            className="group relative cursor-pointer overflow-hidden aspect-16/10 bg-muted"
        >
            {/* Image */}
            <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-40 transition-all duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white z-10">
                <div className="transition-transform duration-500 group-hover:-translate-y-2">
                    <p className="text-[9px] tracking-[0.3em] uppercase text-white/70 mb-2 font-bold">
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