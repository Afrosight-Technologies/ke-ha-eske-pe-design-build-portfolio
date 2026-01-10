export function ProjectsGridSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<div
					key={i}
					className="bg-muted animate-pulse"
					style={{ aspectRatio: i % 2 === 0 ? "4/3" : "3/4" }}
				/>
			))}
		</div>
	);
}
