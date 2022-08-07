<script lang="ts" context="module">
	import homePageQuery from '$lib/queries'
	import type { Page, TicketPhase } from '$lib/types/models'

	export async function load({ params, fetch }) {
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
	import { componentResolver } from '$lib/componentResolver'

	export let page: Page

	export let ticketPhases: TicketPhase[]
</script>

<svelte:head>
	{page.title}
</svelte:head>

<!-- Components -->
{#each page.components as component}
	<svelte:component this={componentResolver(component)} props={component} />
{/each}
<pre>
{JSON.stringify(page, null, 2)}
</pre>

<pre>
{JSON.stringify(ticketPhases, null, 2)}
</pre>
<h1>Web3 ATL</h1>
<p />
