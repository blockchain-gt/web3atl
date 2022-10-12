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

<div
	id="fun"
	class="object-cover top-0 right-0 bottom-0 bg-cover -z-10 bg-[url(https://cdn.raster.app/blockchain-at-georgia-tech/CVWfqbtr4X?ixlib=js-3.6.0&s=87703771a141a466403c146af36aa8e8)] w-screen h-screen fixed"
/>
<section class="max-w-screen-lg mt-20 block">
	<a href="/">
		<img
			src="https://cdn.raster.app/blockchain-at-georgia-tech/QVTrg1oejb?ixlib=js-3.6.0&s=7f078ff38cb83bd45ba7af5b72db764e"
			class="rounded-full border border-black/10 w-40 mb-8"
			alt=""
		/>
	</a>
	<h1 class="font-[adventure] uppercase text-5xl md:text-7xl">{page.title}</h1>
</section>

{#each page.components as component}
	<svelte:component this={componentResolver(component)} section={component} />
{/each}

<style>
	/* Infinite hue shift animation */
	@keyframes hue-rotate {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	}

	#fun {
		animation: hue-rotate 60s infinite linear;
	}
</style>
