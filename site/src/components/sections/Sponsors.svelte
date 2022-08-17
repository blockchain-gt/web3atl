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

	const parseWidth = (group: string): number => {
		if (group == 'Platinum') {
			return 300;
		} else {
			return 150;
		}
	};
</script>

<!-- <pre>
{JSON.stringify(section, null, 2)}
</pre> -->

<section class="bg-white text-black">
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
	<div
		class="mt-20 flex flex-col items-center text-black p-8 bg-gray-100 max-w-lg mx-auto rounded-lg border"
	>
		<h2 class="w-full my-4 text-center">{section.title}</h2>
		<p class="max-w-md text-center my-4">
			Interested in sponsoring? Let us know, we’d love to talk!
		</p>
		<div class="mx-auto lg:mx-0 my-4">
			<a
				class="button inline-block button-lg"
				href="https://docs.google.com/forms/d/e/1FAIpQLScJNcC8IPj0nxhkVriR0vcS1wq0CNUgXd7fDAwrA3FPAQy2EA/viewform?usp=sf_link"
				>Apply to sponsor</a
			>
		</div>
		<p class="w-full my-4 text-center text-gray-500">Application closes August 28, 2022</p>
	</div>
</section>
