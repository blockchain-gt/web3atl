<script lang="ts">
	import PersonCard from '$components/PersonCard.svelte';
	import type { SpeakersSection } from '$lib/types/components';
	import type { Person } from '$lib/types/models';
	import { fade } from 'svelte/transition';

	export let section: SpeakersSection;

	let selectedSpeaker: Person | null = null;
</script>

{#if selectedSpeaker}
	<div
		transition:fade={{ duration: 100 }}
		class="fixed inset-0 bg-black/40 z-20 flex items-center justify-center px-4 "
		on:click={() => {
			selectedSpeaker = null;
		}}
	>
		<div class="card bg-white max-w-md relative max-h-[80vh] overflow-y-auto">
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
				class="rounded-full w-48 h-48 !aspect-square object-cover border shadow-md mb-8 mx-auto"
			/>
			<h5 class="font-[adventure] uppercase text-4xl my-4">
				{selectedSpeaker.name}
			</h5>
			{@html selectedSpeaker?.bio?.html || ''}
		</div>
	</div>
{/if}

<section id={section.title.toLowerCase()}>
	<h2>{section.title}</h2>
	<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
		{#each section.people as person, i}
			{#if person.name}
				<PersonCard {person} bind:selectedSpeaker {i} />
			{/if}
		{/each}
	</div>
</section>
