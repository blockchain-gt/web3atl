<script lang="ts">
	import type { SpeakersSection } from '$lib/types/components';
	import type { Person } from '$lib/types/models';
	import { fade } from 'svelte/transition';

	export let section: SpeakersSection;

	let selectedSpeaker: Person | null = null;
</script>

{#if selectedSpeaker}
	<div
		transition:fade={{ duration: 100 }}
		class="fixed inset-0 bg-black/40 z-20 flex items-center justify-center px-4"
		on:click={() => {
			selectedSpeaker = null;
		}}
	>
		<div class="card bg-white max-w-md relative">
			<button
				aria-label="Close speaker modal"
				class="absolute p-4 right-0 top-0 text-gray-400"
				on:click={() => {
					selectedSpeaker = null;
				}}
			>
				<svg
					data-testid="geist-icon"
					fill="none"
					height="24"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					width="24"
					style="color:var(--geist-foreground)"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg
				>
			</button>
			<img
				src={selectedSpeaker.image.url}
				alt={selectedSpeaker.name}
				class="rounded-full w-48 border shadow-md mb-8 mx-auto"
			/>
			<h5 class="font-[adventure] uppercase text-4xl my-4">
				{selectedSpeaker.name}
			</h5>
			{@html selectedSpeaker?.bio?.html || 'An upcoming speaker at Web3 ATL'}
		</div>
	</div>
{/if}

<section>
	<h2>{section.title}</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		{#each section.people as person, i}
			<button
				on:click={() => {
					selectedSpeaker = person;
				}}
				class="flex flex-col justify-center items-center gap-y-2 card relative group overflow-hidden"
			>
				<div
					class="bg-gradient-{i %
						5} absolute inset-0 !aspect-square -z-10 opacity-10 group-hover:rotate-180 group-hover:scale-[4] group-hover:opacity-80 group-hover:brightness-125 transition-all duration-700"
				/>
				<!-- Speaker Card -->
				{#if person.image}
					<img
						class="rounded-full border border-gray-300 w-40 !aspect-square"
						src={person.image.url}
						alt={person.name}
					/>
				{/if}
				<h4 class="font-bold">
					{person.name}
				</h4>
				<div class="text-center">
					<p>{person.company}</p>
					<p>{person.title}</p>
				</div>
			</button>
		{/each}
	</div>
</section>
