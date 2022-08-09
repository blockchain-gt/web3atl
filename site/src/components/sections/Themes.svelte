<script lang="ts">
	import type { ThemeSection } from '$lib/types/components';

	export let section: ThemeSection;
</script>

<!-- <pre>
{JSON.stringify(section, null, 2)}
</pre> -->
<div class="border-y bg-black">
	<section>
		<span class="flex flex-col items-baseline gap-10 text-black">
			<h2 class="m-0">Placeholder</h2>	<h3 class="m-0">Announcing speakers at the end of August</h3>
		<div>
			<a
				class="px-8 py-3 inline-block rounded-md text-white bg-primary shadow-hover-lg"
				href="#speakers">Speaker Interest Form</a
			>
		</div>
		</span>
		<!-- <div class="flex flex-wrap gap-x-8 justify-start">
			{#each section.people as person}
				<div
					class="text-center flex flex-col bg-white text-black items-center gap-y-1 rounded-lg shadow-hover-2xl p-4 border"
				>
					{#if person.image}
						<img
							class="rounded-full border border-gray-300 w-40 !aspect-square mb-2"
							src={person.image.url}
							alt={person.name}
						/>
					{/if}
					<h4 class="font-bold">
						{person.name}
					</h4>
					<p>{person.company}</p>
					<p>{person.title}</p>
				</div>
			{/each}
		</div> -->
	</section>
</div>
