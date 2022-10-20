<script lang="ts">
	import ScheduleItem from '$components/ScheduleItem.svelte';
	import type { ScheduleSection } from '$lib/types/components';

	export let section: ScheduleSection;

	let filters = [
		{ id: 'conference', name: 'Conference', selected: false },
		{ id: 'hackathon', name: 'Hackathon', selected: false },
		{ id: 'events', name: 'Events', selected: false }
	];

	$: byDay = section.agendaItems.reduce((acc, item) => {
		const showAll = filters.every((filter) => !filter.selected);

		if (!showAll && !filters.some(({ id, selected }) => item.eventType === id && selected)) {
			return acc;
		}
		const time = new Date(item.startTime);

		const day = time.toLocaleDateString('en-US', {
			weekday: 'long',
			month: 'long',
			day: 'numeric'
		});
		if (!acc[day]) {
			acc[day] = [];
		}
		acc[day].push(item);
		return acc;
	}, {} as Record<string, any[]>);
</script>

<div class="px-4">
	<section class="max-w-screen-lg">
		<div class="flex md:flex-row flex-col gap-4">
			{#each filters as filter}
				{@const isSelected = filter.selected}
				<button
					on:click={() => {
						filter.selected = !filter.selected;
					}}
					class="rounded-md border border-black/10 min-w-[120px] font-medium {isSelected
						? 'bg-pink text-white'
						: 'bg-white text-black'} p-3">{filter.name}</button
				>
			{/each}
		</div>
	</section>
	<section
		class="space-y-0 max-w-screen-lg pb-10  bg-gray-100 shadow-lg border border-black/10 mb-10 rounded-2xl"
	>
		{#if !Object.keys(byDay).length}
			<p class="text-gray-500 mt-2">No items for this category yet!</p>
		{/if}
		{#each Object.keys(byDay) as day, i}
			<h2 class="{i !== 0 ? '!mt-8' : ''} !mb-2">{day}</h2>
			<div class="space-y-4">
				{#each byDay[day] as item}
					<ScheduleItem {item} />
				{/each}
			</div>
		{/each}
	</section>
</div>
