import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ProjectsGridClient } from "./projects-grid-client";

interface ProjectsGridProps {
	category: string;
}

export async function ProjectsGrid({ category }: ProjectsGridProps) {
	const { data: projects } = await sanityFetch({
		query: PROJECTS_QUERY,
		params: { category, isFeatured: null },
	});

	return <ProjectsGridClient projects={projects} />;
}
