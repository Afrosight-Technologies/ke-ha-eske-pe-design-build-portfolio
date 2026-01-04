import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
	name: "testimonial",
	title: "Testimonial",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Client Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "role",
			title: "Role / Title",
			type: "string",
			description: "e.g., Homeowner, Business Owner, Architect",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "quote",
			title: "Testimonial Quote",
			type: "text",
			rows: 4,
			validation: (rule) => rule.required().min(50).max(300),
		}),
		defineField({
			name: "avatar",
			title: "Avatar",
			type: "image",
			options: { hotspot: true },
			description: "Optional profile photo",
		})
	],
	preview: {
		select: {
			title: "name",
			subtitle: "role",
			media: "avatar",
		},
	},
});