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
</script>

<!-- <pre>
{JSON.stringify(section, null, 2)}
</pre> -->

<section>
	<h2>
		{section.title}
	</h2>
	{#each sortedGroupSections as tierGroup}
		<h3>
			{tierGroup.tier}
		</h3>
		<div class="grid grid-cols-3">
			{#each tierGroup.sponsors as sponsor}
				<a href={sponsor.link}>
					<img src={sponsor.image.url} alt="{sponsor.tier} Sponsor {sponsor.link}" />
				</a>
			{/each}
		</div>
	{/each}
</section>
