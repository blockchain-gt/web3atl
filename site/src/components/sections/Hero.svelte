<script lang="ts">
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
		<div class="py-20 md:py-32 flex flex-col gap-y-8 justify-start">
			<img
				src="https://cdn.raster.app/blockchain-at-georgia-tech/QVTrg1oejb?ixlib=js-3.6.0&s=7f078ff38cb83bd45ba7af5b72db764e"
				alt="Logo"
				class="!aspect-square rounded-full md:hidden block w-40"
			/>
			<h1
				class="font-bold text-4xl lg:text-[9rem] font-[adventure] uppercase max-w-2xl leading-tight"
			>
				{section.title}
			</h1>
			<p class="text-2xl">{@html section.description.html}</p>
			{#if section.cta}
				<div>
					<a class="button bg-blue-600 inline-block text-gray-500 text-xl" href="#tickets"
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

<section class="max-w-5xl flex flex-col gap-y-20 my-20">
	<div class="flex flex-col gap-12 md:flex-row">
		<img
			src="./Build.jpg"
			class="w-[500px] shadow-2xl shadow-purple-500/30"
			alt="Web 3.0 ATL Hackathon"
		/>

		<div>
			<h2 class="font-[adventure] uppercase">Hack</h2>
			<p>
				Compete for <b>$10,000 in cash prizes</b> at the first Web3 ATL hackathon in the Tech Square
				Clubhouse. Regardless of background knowledge, companies have created problems and workshops
				to help challenge and further your development skills.
			</p>
		</div>
	</div>
	<div class="flex flex-col gap-12 md:flex-row-reverse">
		<img
			src="./Inform.jpg"
			class="w-[500px] shadow-2xl shadow-yellow-500/30"
			alt="Web 3.0 ATL Hackathon"
		/>

		<div>
			<h2 class="font-[adventure] uppercase">Learn</h2>
			<p>
				Hear from industry leaders as they share their perspectives on current events and discuss
				the cutting-edge innovation happening across all areas of crypto. A mix of panels,
				workshops, and presentations will inform any audience member regardless of their current
				experience in web3.
			</p>
		</div>
	</div>
	<div class="flex flex-col gap-12 md:flex-row">
		<img
			src="./Advance.jpg"
			class="w-[500px] shadow-2xl shadow-blue-500/30"
			alt="Web 3.0 ATL Hackathon"
		/>

		<div>
			<h2 class="font-[adventure] uppercase">Network</h2>
			<p>
				Directly interact with representatives from top companies in the crypto industry and advance
				your career. Networking opportunities will be available within advanced industry workshops,
				our sponsor-only career fair, and local Atlanta social events.
			</p>
		</div>
	</div>
</section>

<style>
	#countdown {
		background: linear-gradient(180deg, transparent 50%, #ffffff 50%);
	}
</style>
