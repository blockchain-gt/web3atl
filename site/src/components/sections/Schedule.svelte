<script lang="ts">
	import ScheduleItem from '$components/ScheduleItem.svelte';
	import type { ScheduleSection } from '$lib/types/components';

	export let section: ScheduleSection;

	const filters = [
		{ id: 'all', name: 'All' },
		{ id: 'hackathon', name: 'Hackathon' },
		{ id: 'satelliteEvent', name: 'Satellite Event' },
		{ id: 'speakerSeries', name: 'Speaker Series' }
	];

	let selectedEventTypeId = filters[0].id;

	$: byDay = section.agendaItems.reduce((acc, item) => {
		if (item.eventType !== selectedEventTypeId && selectedEventTypeId !== 'all') {
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
		<div class="flex gap-x-4">
			{#each filters as filter}
				{@const isSelected = selectedEventTypeId === filter.id}
				<button
					on:click={() => {
						selectedEventTypeId = filter.id;
					}}
					class="rounded-md border border-black/10 min-w-[100px] {isSelected
						? 'bg-pink text-white'
						: 'bg-white text-black'} p-3">{filter.name}</button
				>
			{/each}
		</div>
	</section>
	<section
		class="space-y-0 max-w-screen-lg pb-10 backdrop-blur-lg bg-gray-400/10 border border-black/10 mb-10 rounded-2xl"
	>
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
