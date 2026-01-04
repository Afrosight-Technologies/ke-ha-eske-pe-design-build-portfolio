export function TestimonialsSkeleton() {
	return (
		<section className="py-24 md:py-32 max-w-7xl mx-auto overflow-hidden">
			{/* Header Skeleton */}
			<div className="text-center mb-16 md:mb-20">
				<div className="h-10 w-96 bg-muted/50 animate-pulse mx-auto rounded" />
				<div className="w-12 h-[2px] bg-muted/50 mx-auto mt-8" />
			</div>
			<TestimonialsCardsSkeleton />
		</section>
	);
}

export function TestimonialsCardsSkeleton() {
	return (
		<div className="flex gap-6 justify-center">
			{[1, 2].map((i) => (
				<div
					key={i}
					className="max-w-md w-full shrink-0 p-8 md:p-10 border border-border bg-muted/30 animate-pulse"
				>
					{/* Quote skeleton */}
					<div className="space-y-3 mb-10">
						<div className="h-4 bg-muted/50 rounded w-full" />
						<div className="h-4 bg-muted/50 rounded w-5/6" />
						<div className="h-4 bg-muted/50 rounded w-4/6" />
					</div>
					{/* Author skeleton */}
					<div className="pt-8 border-t border-border flex items-center gap-4">
						<div className="w-12 h-12 rounded-full bg-muted/50" />
						<div className="space-y-2">
							<div className="h-3 bg-muted/50 rounded w-24" />
							<div className="h-2 bg-muted/50 rounded w-32" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
