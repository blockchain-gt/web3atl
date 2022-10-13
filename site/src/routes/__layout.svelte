<script lang="ts">
	import { onMount } from 'svelte';
	import '../styles/index.scss';

	let scrolledToTop = true;

	onMount(() => {
		scrolledToTop = window.scrollY <= 100;
		window.addEventListener('scroll', () => {
			scrolledToTop = window.scrollY <= 100;
		});
	});
</script>

<svelte:head>
	<title>Web3 ATL</title>
</svelte:head>

<nav
	class="fixed top-0 w-full px-20 mx-auto hidden md:flex py-5 transition-all z-50 justify-between {!scrolledToTop
		? `bg-gray-800/90 backdrop-blur border-b border-white/10 text-white translate-y-0`
		: 'translate-y-4 duration-500'}"
>
	<ul class="flex gap-x-10 items-center">
		<li>
			<a href="/">
				<img
					class="h-10 w-10"
					src="https://cdn.raster.app/blockchain-at-georgia-tech/rstYI9YxqJ?ixlib=js-3.6.0&s=5aed80cacb15fe2d4d0220036adb22f4"
					alt=""
				/>
			</a>
		</li>
		<li>
			<a href="/schedule">Schedule</a>
		</li>
		<li>
			<a href="/team">Team</a>
		</li>
		<li>
			<a href="/#speakers">Speakers</a>
		</li>
		<li>
			<a href="/#sponsors">Sponsors</a>
		</li>
		<li>
			<a href="/hack" sveltekit:reload>Hackathon</a>
		</li>
	</ul>
	<ul class="flex gap-x-3 items-center">
		<li>
			<a href="https://twitter.com/web3_atl"
				><svg
					data-testid="geist-icon"
					fill="none"
					height="24"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					width="24"
					style="color:var(--geist-foreground)"
					><path
						d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
					/></svg
				></a
			>
		</li>
		<li>
			<a href="https://linkedin.com/company/web3-atl"
				><svg
					data-testid="geist-icon"
					fill="none"
					height="24"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					width="24"
					style="color:var(--geist-foreground)"
					><path
						d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
					/><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg
				></a
			>
		</li>
		<li>
			<a href="https://instagram.com/web3atl"
				><svg
					data-testid="geist-icon"
					fill="none"
					height="24"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					width="24"
					style="color:var(--geist-foreground)"
					><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path
						d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
					/><path d="M17.5 6.5h.01" /></svg
				></a
			>
		</li>
		<li>
			<a href="https://discord.gg/gVvKKhcCA8"
				><svg
					data-testid="geist-icon"
					fill="none"
					height="24"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					width="24"
					style="color:var(--geist-foreground)"
					><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg
				></a
			>
		</li>
	</ul>
</nav>
<slot />

<style>
	li a {
		@apply font-bold font-[adventure] uppercase py-3;
	}
</style>
