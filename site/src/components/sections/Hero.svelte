<script lang="ts">
	import type { HeroSection } from 'src/lib/types/components';
	import { onMount } from 'svelte';
	import { now } from 'svelte/internal';

	export let section: HeroSection;
	const conferenceDate = 1667624400
	const _now = new Date().getTime() / 1000;
	let remaining = Math.floor(conferenceDate - _now);

	setInterval(() => {
        if (remaining > 0) {
            remaining--;
        }
    },1000)
	
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

<div id="hero" class="text-white bg-[#000030]">
	<section class="flex flex-col justify-start">
		<div class="py-96 flex flex-col gap-y-8 justify-start">
			<h1 class="font-bold text-5xl">{section.title}</h1>
			<p>{@html section.description.html}</p>
			<div>
				<a
					class="px-8 py-3 inline-block rounded-md text-white bg-primary shadow-hover-lg"
					href="#tickets">{section.cta}</a
				>
			</div>
		</div>
	</section>
	<div id="countdown" class="flex items-center justify-center">
		<div class="bg-primary w-full lg:max-w-[1024px] flex gap-2 items-center justify-around font-bold lg:rounded-xl">
			<div class="m-4 lg:m-10 lg:text-3xl">{Math.floor(remaining / (60 * 60 * 24 * 7)).toString().padStart(2, "0")}w</div>
			<div class="text-grey">:</div>
			<div class="m-4 lg:m-10 lg:text-3xl">{Math.floor((remaining % (60 * 60 * 24 * 7)) / (60 * 60 * 24)).toString().padStart(2, "0")}d</div>
			<div class="text-grey">:</div>
			<div class="m-4 lg:m-10 lg:text-3xl">{Math.floor((remaining % (60 * 60 * 24)) / (60 * 60)).toString().padStart(2, "0")}h</div>
			<div class="text-grey">:</div>
			<div class="m-4 lg:m-10 lg:text-3xl">{Math.floor((remaining % (60 * 60)) / (60)).toString().padStart(2, "0")}m</div>
			<div class="text-grey">:</div>
			<div class="m-4 lg:m-10 lg:text-3xl">{Math.floor(remaining % 60).toString().padStart(2, "0")}s</div>
		</div>
	</div>
</div>
<style>
	#countdown {
	    background: linear-gradient(180deg, transparent 50%, #FFFFFF 50%);
	}

</style>
