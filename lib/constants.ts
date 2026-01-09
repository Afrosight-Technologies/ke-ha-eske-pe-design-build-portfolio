// Project category options - used by both Sanity schema and frontend
export const PROJECT_CATEGORIES = [
	{
		id: "exterior",
		label: "Exterior Designs",
		description: "Crafting stunning facades that define architectural identity.",
	},
	{
		id: "interior",
		label: "Interior Designs",
		description: "Atmospheric spaces blending functionality with high-end aesthetics.",
	},
	{
		id: "construction",
		label: "Construction",
		description: "Heavy construction managed with structural precision and expert craftsmanship.",
	},
	{
		id: "finishing",
		label: "Finishing Work",
		description: "Meticulous attention to final details and uncompromising quality.",
	},
	{
		id: "renovation",
		label: "Renovation",
		description: "Transforming existing spaces with modern vision and renewed purpose.",
	},
] as const;

// Type for category IDs
export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];

// Type for category object
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
