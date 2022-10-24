<script lang="ts">
	import type { SponsorsSection } from '$lib/types/components';

	export let section: SponsorsSection;

	const colors: Record<string, string> = {
		platinum: 'bg-gradient-to-r to-blue-900 from-blue-300 font-black drop-shadow-xl',
		gold: 'bg-gradient-to-r from-amber-500 to-amber-600',
		silver: 'bg-gradient-to-r from-gray-400 to-gray-600',
		bronze: 'bg-gradient-to-r from-amber-600 to-amber-800',
		local: 'bg-gradient-to-r from-blue-400 to-blue-400'
	};
</script>

<div class="py-16 px-20 bg-gray-100 space-y-8" id="sponsors">
	<h2 class="text-4xl md:text-5xl">
		{section.title}
	</h2>
	<div>
		<div class="grid gap-x-5 gap-y-9 grid-cols-1 md:grid-cols-4 items-center justify-around">
			{#each section.sponsors as organizer}
				<a
					href={organizer.link}
					class="h-56 w-64 md:w-80 max-w-full flex flex-col items-center justify-between gap-y-2 text-center"
				>
					<img src={organizer.image?.url} class="rounded-md my-auto" alt={organizer.link} />
					<p
						class="font-adventure uppercase text-2xl bg-clip-text text-transparent {colors[
							organizer.tier.toLowerCase()
						]}"
					>
						<!-- <p class="font-adventure uppercase text-2xl {}"> -->
						{organizer.tier}
					</p>
				</a>
			{/each}
		</div>
	</div>
</div>
