<script lang="ts">
	import type { HeroSection } from 'src/lib/types/components';
	import { onMount } from 'svelte';

	export let section: HeroSection;

	onMount(() => {
		// @ts-ignore
		VANTA.HALO({
			el: '#hero',
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			xOffset: 0.18,
			amplitudeFactor: 0.8,
			backgroundColor: 0x000030
		});
	});
</script>

<div id="hero" class="text-white">
	<section class="py-96 flex flex-col gap-y-8 justify-start">
		<h1 class="font-bold text-5xl">{section.title}</h1>
		<p>{@html section.description.html}</p>
		<div>
			<a
				class="px-8 py-3 inline-block rounded-md text-white bg-primary shadow-hover-lg"
				href="#tickets">{section.cta}</a
			>
		</div>
	</section>
</div>
