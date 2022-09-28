<script lang="ts" context="module">
	import componentResolver from '$lib/componentResolver';
	import scheduleQuery from '$lib/queries/schedule';
	import type { Page } from '$lib/types/models';

	export async function load({ fetch }: any) {
		const res = await fetch(
			'https://api-us-east-1.hygraph.com/v2/cl6isf8724r4g01uh7l9w44u3/master',
			{
				method: 'POST',
				body: JSON.stringify({ query: scheduleQuery })
			}
		);

		const json = await res.json();

		console.log(json);

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
	export let page: Page;
</script>

<section class="max-w-screen-lg">
	<h1 class="font-[adventure] uppercase text-7xl">Schedule</h1>
</section>
{#each page.components as component}
	<svelte:component this={componentResolver(component)} section={component} />
{/each}
