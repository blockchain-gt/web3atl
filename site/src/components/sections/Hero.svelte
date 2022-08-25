<script lang="ts">
	import { ticketsLink } from '$lib/constants';

	import type { HeroSection } from 'src/lib/types/components';

	export let section: HeroSection;
	const conferenceDate = 1667624400;
	const _now = new Date().getTime() / 1000;
	let remaining = Math.floor(conferenceDate - _now);

	setInterval(() => {
		if (remaining > 0) {
			remaining--;
		}
	}, 1000);
</script>

<div
	id="hero"
	class="bg-[url(https://cdn.raster.app/blockchain-at-georgia-tech/CVWfqbtr4X?ixlib=js-3.6.0&s=87703771a141a466403c146af36aa8e8)] bg-cover"
>
	<section class="flex flex-col md:flex-row justify-between">
		<div class="py-20 md:py-20 flex flex-col gap-y-8 justify-start">
			<img
				src="https://cdn.raster.app/blockchain-at-georgia-tech/QVTrg1oejb?ixlib=js-3.6.0&s=7f078ff38cb83bd45ba7af5b72db764e"
				alt="Logo"
				class="!aspect-square rounded-full md:hidden block w-40"
			/>
			<h1
				class="font-bold text-4xl lg:text-[8rem] font-[adventure] uppercase max-w-2xl leading-tight"
			>
				{section.title}
			</h1>
			<p class="text-2xl">{@html section.description.html}</p>
			{#if section.cta}
				<div>
					<a class="button bg-blue-600 inline-block text-gray-500 text-xl" href={ticketsLink}
						>{section.cta}</a
					>
				</div>
			{/if}
		</div>
		<div class="flex flex-col justify-center">
			<img
				src="https://cdn.raster.app/blockchain-at-georgia-tech/QVTrg1oejb?ixlib=js-3.6.0&s=7f078ff38cb83bd45ba7af5b72db764e"
				alt="Logo"
				class="!aspect-square rounded-full hidden md:block"
			/>
		</div>
	</section>
	<!-- Countdown -->
</div>
<div
	class="flex items-center justify-center px-4 font-[adventure] uppercase text-white w-full bg-gray-800 py-8"
>
	<div
		class="gap-6 md:gap-2 font-bold rounded-xl grid grid-cols-5 lg:text-3xl text-xs md:grid-cols-9 py-4"
	>
		<p aria-label="weeks remaining" class="">
			{Math.floor(remaining / (60 * 60 * 24 * 7))
				.toString()
				.padStart(2, '0')} w
		</p>
		<div class="hidden md:flex items-center justify-center">:</div>
		<p aria-label="days remaining" class="">
			{Math.floor((remaining % (60 * 60 * 24 * 7)) / (60 * 60 * 24))
				.toString()
				.padStart(2, '0')} d
		</p>
		<div class="hidden md:flex items-center justify-center">:</div>
		<p aria-label="hours remaining" class="">
			{Math.floor((remaining % (60 * 60 * 24)) / (60 * 60))
				.toString()
				.padStart(2, '0')} h
		</p>
		<div class="hidden md:flex items-center justify-center">:</div>
		<p aria-label="minutes remaining" class="">
			{Math.floor((remaining % (60 * 60)) / 60)
				.toString()
				.padStart(2, '0')} m
		</p>
		<div class="hidden md:flex items-center justify-center">:</div>
		<p aria-label="seconds remaining" class="">
			{Math.floor(remaining % 60)
				.toString()
				.padStart(2, '0')} s
		</p>
	</div>
</div>

<style>
	#countdown {
		background: linear-gradient(180deg, transparent 50%, #ffffff 50%);
	}
</style>
