<script lang="ts">
	import type { TicketsSection } from '$lib/types/components';

	export let section: TicketsSection;
</script>

<section>
	<h2>{section.title}</h2>
	<div>
		<p aria-label="Ticket Price">$200</p>
	</div>
</section>
