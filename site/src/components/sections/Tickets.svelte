<script lang="ts">
	import type { PriceResolverReturn } from '$lib/priceResolver';

	import type { TicketsSection } from '$lib/types/components';

	export let section: TicketsSection;
	export let priceData: PriceResolverReturn;
</script>

<section id="tickets" class="bg-[#000030] max-w-none w-full p-0 mt-10">
	<div class="mx-auto max-w-screen-2xl p-8">
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
		<div
			class="mt-20 flex flex-col items-center text-black p-8 bg-gray-100 max-w-lg mx-auto rounded-lg border"
		>
			<!-- <h2 class="w-full my-4 text-center">{section.title}</h2> -->
			<h2 class="w-full my-4 text-center">Tickets</h2>
			<p class="max-w-md text-center my-4">
				Join us to build, inform, and advance your crypto journey.
			</p>
			<div class="mx-auto lg:mx-0 my-4">
				<a class="button inline-block button-lg" href="#tickets">Get tickets now</a>
			</div>
			<p class="w-full my-4 text-center text-gray-500">Prices increase September 5, 2022</p>
		</div>
	</div>
</section>
