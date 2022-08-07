<script lang="ts">
	import type { PriceResolverReturn } from '$lib/priceResolver';

	import type { TicketsSection } from '$lib/types/components';

	export let section: TicketsSection;
	export let priceData: PriceResolverReturn;
</script>

<section id="tickets">
	<h2>{section.title}</h2>
	<a class="card block">
		<p aria-label="Ticket Price">${priceData.currentPhase.price}</p>
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
		<div class="prose">
			{@html section.description.html}
		</div>
		<!-- Fake button -->
		<span class="px-8 py-3 bg-gray-200 rounded-md"> Coming soon </span>
	</a>
</section>
