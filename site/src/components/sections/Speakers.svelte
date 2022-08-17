<script lang="ts">
	import type { SpeakersSection } from '$lib/types/components';

	export let section: SpeakersSection;
</script>

<!-- <pre>
{JSON.stringify(section, null, 2)}
</pre> -->
<div class="bg-white mt-12">
	<section class="p-0 lg:p-8">
		<div
			class="mt-20 flex flex-col items-center text-black p-8 bg-gray-100 max-w-lg mx-auto rounded-lg border"
		>
			<h2 class="w-full my-4 text-center">{section.title}</h2>
			<p class="max-w-md text-center my-4">
				Are you an experienced crypto professional looking to share your knowledge? Apply below!
			</p>
			<div class="mx-auto lg:mx-0 my-4">
				<a
					class="button inline-block button-lg"
					href="https://docs.google.com/forms/d/e/1FAIpQLSeERRmQG_mxEJ89TW6ufIK3K4qu0uW8If_NXD6ewjWUe3GSyg/viewform?usp=sf_link"
					>Apply to speak</a
				>
			</div>
			<p class="w-full my-4 text-center text-gray-500">Application closes August 28, 2022</p>
		</div>
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
