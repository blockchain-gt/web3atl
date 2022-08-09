<script lang="ts">
	import type { SponsorsSection } from '$lib/types/components';
	import type { Sponsor } from '$lib/types/models';

	export let section: SponsorsSection;

	const groupedSections = section.sponsors.reduce<Record<string, Sponsor[]>>((acc, section) => {
		if (!acc[section.tier]) {
			acc[section.tier] = [];
		}

		acc[section.tier].push(section);

		return acc;
	}, {});

	// Group groupedSection by section.tierOrder
	const sortedGroupSections = Object.entries(groupedSections)
		.sort(([tier1], [tier2]) => {
			const tier1Order = section.tierOrder.indexOf(tier1);
			const tier2Order = section.tierOrder.indexOf(tier2);

			return tier1Order - tier2Order;
		})
		.map(([tier, sponsors]) => ({ tier, sponsors }));
	
	const parseWidth = (group: string) : number => {
		if (group == 'Platinum') {
			return 300
		} else {
			return 150
		}
	}
</script>

<!-- <pre>
{JSON.stringify(section, null, 2)}
</pre> -->

<section class="bg-white text-black" >
	<h2>
		{section.title}
	</h2>
	<!-- {#each sortedGroupSections as tierGroup}
		<h3>
			{tierGroup.tier}
		</h3>
		<div class="flex flex-wrap gap-x-4">
			{#each tierGroup.sponsors as sponsor}
				<a href={sponsor.link} class="overflow-hidden shadow-hover-2xl rounded-xl border">
					<img src={sponsor.image.url} width={parseWidth(tierGroup.tier)} alt="{sponsor.tier} Sponsor {sponsor.link}" />
				</a>
			{/each}
		</div>
	{/each} -->
	<span class="flex flex-col items-baseline gap-10 my-20">
		<h3 class="">Announcing sponsors at the end of August</h3>
		<div class="mx-auto lg:mx-0">
		<a
			class="px-8 py-3 inline-block rounded-md text-white bg-primary shadow-hover-lg"
			href="#sponsors">Sponsor Interest Form</a
		>
		</div>
	</span>
</section>
