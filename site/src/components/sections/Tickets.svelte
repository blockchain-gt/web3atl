<script lang="ts">
	import type { TicketsSection } from '$lib/types/components';

	export let section: TicketsSection;

	let endDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
</script>

<section id="tickets">
	<h2>{section.title}</h2>
	<a class="card block">
		<p aria-label="Ticket Price">$200</p>
		<p>Available until {endDate}</p>
		<div class="prose">
			{@html section.description.html}
		</div>
		<!-- Fake button -->
		<span class="px-8 py-3 bg-gray-200"> Coming soon </span>
	</a>
</section>
