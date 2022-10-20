<script lang="ts">
	import ScheduleItem from '$components/ScheduleItem.svelte';
	import type { ScheduleSection } from '$lib/types/components';
	import { slide } from 'svelte/transition';

	export let section: ScheduleSection;

	let filters = [
		{ id: 'conference', name: 'Conference', selected: false },
		{ id: 'hackathon', name: 'Hackathon', selected: false },
		{ id: 'party', name: 'Party', selected: false }
	];

	let rooms = ['All', 'Main Stage', 'Side Stage'];
	let selectedRoomId: string = 'All';

	$: byDay = section.agendaItems.reduce((acc, item) => {
		const showAllTypes = filters.every((filter) => !filter.selected);
		const showAllRooms = selectedRoomId === 'All';

		const thisTypeAllowed =
			showAllTypes || filters.find((filter) => filter.selected && filter.id === item.eventType);

		const thisRoomAllowed = showAllRooms || item.location === selectedRoomId || !isConfSelected;

		if (!thisTypeAllowed || !thisRoomAllowed) {
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

	$: isConfSelected =
		filters.find((filter) => filter.id === 'conference')?.selected ||
		filters.every((filter) => !filter.selected);
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
		{#if isConfSelected}
			<div transition:slide class="mt-8 md:mt-4 flex md:flex-row flex-col">
				{#each rooms as room}
					<button
						on:click={() => {
							selectedRoomId = room;
						}}
						class="border-l border-y border-r border-black/10 min-w-[60px] font-medium
						md:last:rounded-r-full md:last:border-r md:border-r-0 last:rounded-b-md
						md:first:rounded-l-full first:rounded-t-md
						 {selectedRoomId === room ? 'bg-primary text-white' : 'bg-white text-black'} py-1.5 px-3 text-sm"
						>{room}</button
					>
				{/each}
			</div>
		{/if}
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
