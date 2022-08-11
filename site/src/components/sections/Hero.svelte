<script lang="ts">
	import type { HeroSection } from 'src/lib/types/components';
	import { onMount } from 'svelte';

	export let section: HeroSection;
	const conferenceDate = 1667624400;
	const _now = new Date().getTime() / 1000;
	let remaining = Math.floor(conferenceDate - _now);

	setInterval(() => {
		if (remaining > 0) {
			remaining--;
		}
	}, 1000);

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
			<p class="text-2xl">{@html section.description.html}</p>
			<div>
				<a class="button inline-block" href="#tickets">{section.cta}</a>
			</div>
		</div>
	</section>
	<!-- Countdown -->
	<div id="countdown" class="flex items-center justify-center px-4">
		<div
			class="bg-primary border border-blue-400 gap-2 font-bold rounded-xl grid grid-cols-1 lg:grid-cols-9 px-8"
		>
			<p aria-label="weeks remaining" class="m-4 lg:my-10 lg:mx-8 lg:text-3xl">
				{Math.floor(remaining / (60 * 60 * 24 * 7))
					.toString()
					.padStart(2, '0')}w
			</p>
			<div class="flex items-center justify-center">:</div>
			<p aria-label="days remaining" class="m-4 lg:my-10 lg:mx-8 lg:text-3xl">
				{Math.floor((remaining % (60 * 60 * 24 * 7)) / (60 * 60 * 24))
					.toString()
					.padStart(2, '0')}d
			</p>
			<div class="flex items-center justify-center">:</div>
			<p aria-label="hours remaining" class="m-4 lg:my-10 lg:mx-8 lg:text-3xl">
				{Math.floor((remaining % (60 * 60 * 24)) / (60 * 60))
					.toString()
					.padStart(2, '0')}h
			</p>
			<div class="flex items-center justify-center">:</div>
			<p aria-label="minutes remaining" class="m-4 lg:my-10 lg:mx-8 lg:text-3xl">
				{Math.floor((remaining % (60 * 60)) / 60)
					.toString()
					.padStart(2, '0')}m
			</p>
			<div class="flex items-center justify-center">:</div>
			<p aria-label="seconds remaining" class="m-4 lg:my-10 lg:mx-8 lg:text-3xl">
				{Math.floor(remaining % 60)
					.toString()
					.padStart(2, '0')}s
			</p>
		</div>
	</div>
</div>

<style>
	#countdown {
		background: linear-gradient(180deg, transparent 50%, #ffffff 50%);
	}
</style>
