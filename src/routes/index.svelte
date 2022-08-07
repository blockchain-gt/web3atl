<script lang="ts" context="module">
	import homePageQuery from '$lib/queries'

	export async function load({ fetch, params }) {
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
			props: json.data
		}
	}
</script>

<script lang="ts">
	export let data
</script>

<svelte:head>
	{}
</svelte:head>

<h1>Web3 ATL</h1>
<p></p>
