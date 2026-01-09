import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { CategoryPageContent } from "./category-page-content";

interface CategoryPageProps {
	params: Promise<{ category: string }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
	return PROJECT_CATEGORIES.map((cat) => ({
		category: cat.id,
	}));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
	const { category } = await params;
	const categoryData = PROJECT_CATEGORIES.find((c) => c.id === category);

	if (!categoryData) {
		return { title: "Category Not Found" };
	}

	return {
		title: `${categoryData.label} | Ke Ha Eske Pe`,
		description: categoryData.description,
	};
}

export default async function CategoryPage({ params }: CategoryPageProps) {
	const { category } = await params;

	// Validate category exists
	const categoryData = PROJECT_CATEGORIES.find((c) => c.id === category);
	if (!categoryData) {
		notFound();
	}

	// Fetch projects for this category
	const { data: projects } = await sanityFetch({
		query: PROJECTS_QUERY,
		params: { category, isFeatured: null },
	});

	return <CategoryPageContent categoryData={categoryData} projects={projects} />;
}
