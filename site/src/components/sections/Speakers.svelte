<script lang="ts">
	import type { SpeakersSection } from '$lib/types/components';

	export let section: SpeakersSection;
</script>

<!-- <pre>
{JSON.stringify(section, null, 2)}
</pre> -->
<div class="border-y border-gray-800 bg-[#000020]">
	<section>
		<h2>{section.title}</h2>
		<div class="flex flex-wrap gap-x-8 justify-start">
			{#each section.people as person}
				<div
					class="text-center flex flex-col bg-white text-black items-center gap-y-1 rounded-lg shadow-hover-2xl p-4 border"
				>
					<!-- Speaker Card -->
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
		</div>
	</section>
</div>
