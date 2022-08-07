<script lang="ts" context="module">
	import homePageQuery from '$lib/queries'

	export async function load({ fetch }) {
		const res = await fetch(
			'https://api-us-east-1.hygraph.com/v2/cl6isf8724r4g01uh7l9w44u3/master',
			{
				method: 'POST',
				body: JSON.stringify({ query: homePageQuery })
			}
		)

		const json = await res.json()

		return {
			status: 200,
			props: {
				page: json.data.page,
				ticketPhases: json.data.ticketPhases
			}
		}
	}
</script>

<script lang="ts">
	import Hero from '$components/sections/Hero.svelte'
	import type { Page, TicketPhase } from '$lib/types/models'

	export let page: Page

	export let ticketPhases: TicketPhase[]
</script>

<svelte:head>
	{page.title}
</svelte:head>

<!-- Components -->

{#each page.components as component}
	{#if component.__typename === 'HeroSection'}
		<Hero section={component} />
	{/if}
{/each}

<pre>
{JSON.stringify(page, null, 2)}
</pre>

<pre>
{JSON.stringify(ticketPhases, null, 2)}
</pre>
<h1>Web3 ATL</h1>
<p />
