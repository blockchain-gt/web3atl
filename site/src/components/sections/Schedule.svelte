<script lang="ts">
	import type { OrganizersSection, ScheduleSection } from '$lib/types/components';

	export let section: ScheduleSection;

	const byDay = section.agendaItems.reduce((acc, item) => {
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
	<section
		class="space-y-0 max-w-screen-lg pb-10 backdrop-blur-lg bg-gray-400/10 border border-black/10 mb-10 rounded-2xl"
	>
		{#each Object.keys(byDay) as day, i}
			<h2 class="{i !== 0 ? '!mt-8' : ''} !mb-2">{day}</h2>
			<div class="space-y-4">
				{#each byDay[day] as item}
					<div class="flex flex-col justify-between rounded-lg shadow-md p-4 bg-gray-50">
						<time class="font-medium uppercase text-gray-700 text-sm"
							>{new Date(item.startTime).toLocaleTimeString('en-US', {
								hour: 'numeric',
								minute: '2-digit'
							})} | {item.location.replace('_', ' ')}</time
						>
						<h3 class="font-sans my-0">{item.title}</h3>
					</div>
				{/each}
			</div>
		{/each}
	</section>
</div>
