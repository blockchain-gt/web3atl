<script lang="ts">
	import type { PriceResolverReturn } from '$lib/priceResolver';

	import type { TicketsSection } from '$lib/types/components';

	export let section: TicketsSection;
	export let priceData: PriceResolverReturn;
</script>

<section id="tickets" class="bg-[#000030] max-w-none w-full">
	<div class="mx-auto max-w-screen-2xl p-0 lg:p-8">
		<h2>{section.title}</h2>
		<!-- <a
			class="card block bg-white text-black shadow-hover-2xl group"
			href="/buy"
			on:click|preventDefault
		>
			<div class="flex justify-between">
				<p aria-label="Ticket Price" class="text-2xl">${priceData.currentPhase.price}</p>
				<p>
					Available until {new Date(priceData.currentPhase.endDate).toLocaleDateString('en-US', {
						month: 'short',
						day: 'numeric',
						year: 'numeric',
						hour: 'numeric',
						minute: 'numeric',
						timeZone: 'America/New_York'
					})}
				</p>
			</div>
			<div class="prose">
				{@html section.description.html}
			</div>
			<span class="px-8 py-3 bg-gray-200 rounded-md group-hover:bg-gray-300 transition-colors">
				Coming soon
			</span>
		</a> -->
		<span class="flex flex-col items-baseline gap-10 my-20">
			<div class="mx-auto lg:mx-0">
			<a
				class="px-8 py-3 inline-block rounded-md text-white bg-primary shadow-hover-lg"
				href="#sponsors">Reserve Tickets</a
			>
			</div>
		</span>
	</div>
</section>
