"use server";

import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_CURSOR_QUERY } from "@/sanity/lib/queries";

/**
 * Load more projects using cursor-based pagination
 * Uses lastCreatedAt and lastId as cursor for efficient pagination
 * @see https://www.sanity.io/docs/developer-guides/paginating-with-groq
 */
export async function loadMoreProjects(
	category: string,
	lastCreatedAt: string,
	lastId: string,
) {
	const { data: projects } = await sanityFetch({
		query: PROJECTS_CURSOR_QUERY,
		params: { category, lastCreatedAt, lastId },
	});

	return projects;
}
