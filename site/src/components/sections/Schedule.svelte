<script lang="ts">
	import type { OrganizersSection, ScheduleSection } from '$lib/types/components';

	export let section: ScheduleSection;
	console.log(section);
</script>

<section class="space-y-4 divide-y">
	{#each section.agendaItems as item}
		<div class="mx-auto flex items-center justify-between">
			<h3 class="font-sans">{item.title}</h3>
		</div>
	{/each}
</section>
