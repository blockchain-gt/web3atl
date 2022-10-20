<script lang="ts">
	import NavLinks from '$components/NavLinks.svelte';
	import NavSocial from '$components/NavSocial.svelte';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import '../styles/index.scss';

	let scrolledToTop = true;

	onMount(() => {
		scrolledToTop = window.scrollY <= 100;
		window.addEventListener('scroll', () => {
			scrolledToTop = window.scrollY <= 100;
		});
	});

	let navOpen = false;
</script>

<svelte:head>
	<title>Web3 ATL</title>
</svelte:head>

<!-- Non-mobile nav -->
<nav
	class="fixed top-0 w-full px-20 mx-auto hidden md:flex py-5 transition-all z-50 justify-between {!scrolledToTop
		? `bg-gray-800/90 backdrop-blur border-b border-white/10 text-white translate-y-0`
		: 'translate-y-4 duration-500'}"
>
	<ul class="flex gap-x-10 items-center">
		<NavLinks />
	</ul>
	<ul class="flex gap-x-3 items-center">
		<NavSocial />
	</ul>
</nav>

<!-- Mobile Nav -->
<button
	class="fixed md:hidden top-3 right-3 p-2 rounded-full bg-white shadow-lg z-10"
	on:click={() => (navOpen = !navOpen)}
>
	<svg
		class={navOpen ? '' : 'hidden'}
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
		style="color:var(--geist-foreground)"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg
	>
	<svg
		class="md:hidden {navOpen ? 'hidden' : ''}"
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
		><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></svg
	>
</button>
<nav
	class="fixed inset-0 w-screen h-screen bg-black/80 backdrop-blur text-white transition-all flex justify-center items-center {navOpen
		? ''
		: 'opacity-0 -translate-y-full'}"
>
	<ul class="flex flex-col items-center justify-center gap-4 text-2xl">
		<NavLinks />
	</ul>
</nav>
<slot />
