<script lang="ts" context="module">
	import homePageQuery from '$lib/queries';

	export async function load({ fetch }) {
		const res = await fetch(
			'https://api-us-east-1.hygraph.com/v2/cl6isf8724r4g01uh7l9w44u3/master',
			{
				method: 'POST',
				body: JSON.stringify({ query: homePageQuery })
			}
		);

		const json = await res.json();

		return {
			status: 200,
			props: {
				page: json.data.page,
				ticketPhases: json.data.ticketPhases
			}
		};
	}
</script>

<script lang="ts">
	import type { Page, TicketPhase } from '$lib/types/models';
	import componentResolver from '$lib/componentResolver';
	import priceResolver from '$lib/priceResolver';

	export let page: Page;
	export let ticketPhases: TicketPhase[];

	const priceData = priceResolver(ticketPhases);
</script>

{#each page.components as component}
	<svelte:component this={componentResolver(component)} section={component} {priceData} />
{/each}
