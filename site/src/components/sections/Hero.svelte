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

<div id="hero" class="text-white bg-background">
	<section class="flex flex-col justify-start">
		<div class="py-96 flex flex-col gap-y-8 justify-start">
			<h1 class="font-bold text-5xl">{section.title}</h1>
			<p class="text-2xl">{@html section.description.html}</p>
			<div>
				<a class="button bg-orange inline-block" href="#tickets">{section.cta}</a>
			</div>
		</div>
	</section>
	<!-- Countdown -->
	<div id="countdown" class="flex items-center justify-center px-4">
		<div
			class="bg-orange gap-2 font-bold rounded-xl flex px-8"
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
	<!-- Build Inform Advance -->
<section class="flex flex-col text-black gap-10 lg:gap-32 mt-20">
	<div class="flex flex-col lg:flex-row border bg-gray-50 rounded-xl p-8">
		<div class="flex-1 flex justify-center">
			<img src="./Build.jpg" class="rounded" alt="Web 3.0 ATL Hackathon" />
		</div>
		<div class="lg:flex-1 p-8 lg:pt-0 text-2xl">
			<h2 class="">Build</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
			</p>
		</div>
	</div>
	<div class="flex flex-col border bg-gray-50 rounded-xl p-8 lg:flex-row-reverse">
		<div class="flex-1 flex justify-center">
			<img src="./Inform.jpg" class="rounded" alt="Web 3.0 ATL Hackathon" />
		</div>
		<div class="lg:flex-1 p-8 lg:pl-0 lg:pt-0 text-2xl">
			<h2 class="mt-5">Inform</h2>
			<p>
				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
				aute irure dolor in.
			</p>
		</div>
	</div>
	<div class="flex flex-col lg:flex-row border bg-gray-50 rounded-xl p-8">
		<div class="flex-1 flex justify-center">
			<img src="./Advance.jpg" class="rounded" alt="Web 3.0 ATL Hackathon" />
		</div>
		<div class="lg:flex-1 p-8 lg:pt-0 text-2xl">
			<h2 class="">Advance</h2>
			<p>
				do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip.
			</p>
		</div>
	</div>
</section>

<style>
	#countdown {
		background: linear-gradient(180deg, transparent 50%, #ffffff 50%);
	}
</style>
