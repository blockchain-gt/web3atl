<script lang="ts">
	import type { AgendaItem } from '$lib/types/models';
	import { fade, slide } from 'svelte/transition';
	import PersonCard from './PersonCard.svelte';

	export let item: AgendaItem;

	let open = false;

	const colors = {
		conference: 'bg-blue-300',
		hackathon: 'bg-pink',
		party: 'bg-green-300',
		'tech square social club': 'bg-amber-300',
		'main stage': 'bg-orange',
		'side stage': 'bg-violet-300',
		'coda rooftop': 'bg-black text-white',
		'kitt labs': 'bg-black text-white'
	} as any;
</script>

<button
	class="flex flex-col justify-between rounded-lg shadow-md p-4 bg-gray-50 w-full relative overflow-hidden"
	on:click={() => {
		if (item.agendaSpeakers.length > 1) {
			open = !open;
		}
	}}
>
	<div class="text-left flex justify-between w-full">
		<div class="w-full">
			<div class="flex justify-between w-full pb-2">
				<div>
					<time class="font-medium uppercase text-gray-700 text-sm">
						{new Date(item.startTime).toLocaleTimeString('en-US', {
							hour: 'numeric',
							minute: '2-digit',
							timeZone: 'America/New_York'
						})}
					</time>
				</div>
			</div>
			<h3 class="font-sans my-0 flex flex-wrap items-center gap-x-4 gap-y-2">
				{item.title}
				<span
					class="uppercase text-sm px-3 py-1 {colors[
						item.eventType.toLowerCase()
					]} rounded-full font-bold">{item.eventType}</span
				>
				<span
					class="uppercase text-sm px-3 py-1 {colors[
						item.location.toLowerCase() || 'bg-black text-white'
					]} rounded-full font-bold">{item.location?.replace('_', ' ')}</span
				>
			</h3>
		</div>
		<divs class="font-semibold text-3xl">
			<span class="rotate-90">
				{#if item.agendaSpeakers.length > 1}
					{#if open}
						&times;
					{:else}
						+
					{/if}
				{/if}
			</span>
		</divs>
	</div>
	{#if open && item.category != 'Announcement' && item.category != 'Break'}
		<ul transition:slide class="text-left flex md:flex-row flex-col gap-4 mt-4">
			{#each item.agendaSpeakers as speaker, i}
				{#if speaker.person.name}
					<div class="w-60 h-80">
						<PersonCard noGradient person={speaker.person} {i} z={'-z-10'} />
					</div>
				{/if}
			{/each}
		</ul>
	{/if}
</button>
