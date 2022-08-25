<script lang="ts">
	import type { OrganizersSection } from '$lib/types/components';

	export let section: OrganizersSection;
</script>

<div
	class="flex flex-col gap-5 items-center md:flex-row justify-around py-16 px-20 mx-auto bg-gray-100"
>
	{#each section.organizers as organizer}
		<a href={organizer.link} class="w-80">
			<img src={organizer.logo?.url} class="rounded-md" alt={organizer.name} />
		</a>
	{/each}
</div>
