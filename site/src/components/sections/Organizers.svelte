<script lang="ts">
	import type { OrganizersSection } from '$lib/types/components';

	export let section: OrganizersSection;
</script>

<div class="py-16 px-20 bg-gray-100 space-y-8">
	<div>
		<div class="flex flex-col gap-5 items-center md:flex-row justify-around ">
			<!-- <a href="https://404dao.io" class="w-80 flex flex-col gap-y-2 text-center">
				<img src="/404dao.png" class="rounded-md" alt="" />
				<p>Hosted By</p>
			</a> -->
			{#each section.organizers as organizer}
				<a
					href={organizer.link}
					class="h-56 w-80 flex flex-col justify-between gap-y-2 text-center"
				>
					<img src={organizer.logo?.url} class="rounded-md" alt={organizer.name} />
					<p class="font-adventure uppercase text-xl">{organizer.type}</p>
				</a>
			{/each}
		</div>
	</div>
</div>
