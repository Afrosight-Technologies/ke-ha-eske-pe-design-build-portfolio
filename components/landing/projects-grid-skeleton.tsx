export function ProjectsGridSkeleton() {
	return (
		<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<div
					key={i}
					className="bg-muted animate-pulse break-inside-avoid"
					style={{ aspectRatio: i % 2 === 0 ? "4/3" : "3/4" }}
				/>
			))}
		</div>
	);
}
