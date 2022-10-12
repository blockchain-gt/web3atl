<script lang="ts">
	import type { AgendaItem } from '$lib/types/models';
	import { fade, slide } from 'svelte/transition';
	import PersonCard from './PersonCard.svelte';

	export let item: AgendaItem;

	let open = false;
</script>

<button
	class="flex flex-col justify-between rounded-lg shadow-md p-4 bg-gray-50 w-full relative overflow-hidden"
	on:click={() => {
		open = !open;
	}}
>
	<div class="text-left flex justify-between w-full">
		<div>
			<time class="font-medium uppercase text-gray-700 text-sm">
				{new Date(item.startTime).toLocaleTimeString('en-US', {
					hour: 'numeric',
					minute: '2-digit'
				})}
				| {item.location?.replace('_', ' ')}
			</time>
			<h3 class="font-sans my-0">{item.title}</h3>
		</div>
		<divs class="font-semibold text-3xl">
			<span class="rotate-90">
				{#if open}
					&times;
				{:else if item.category != 'Announcement' && item.category != 'Break' && item.agendaSpeakers.length > 1}
					+
				{/if}
			</span>
		</divs>
	</div>
	{#if open && item.category != 'Announcement' && item.category != 'Break'}
		<ul transition:slide class="text-left flex md:flex-row flex-col gap-4 mt-4">
			{#each item.agendaSpeakers as speaker, i}
				{#if speaker.person.name}
					<div class="w-60 h-80">
						<PersonCard person={speaker.person} {i} z={'-z-10'} />
					</div>
				{/if}
			{/each}
		</ul>
	{/if}
</button>
