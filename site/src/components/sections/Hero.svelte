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

<div id="hero" class="text-white bg-background">
	<section class="flex flex-col justify-start">
		<div class="py-96 flex flex-col gap-y-8 justify-start">
			<h1 class="font-bold text-5xl">{section.title}</h1>
			<p class="text-2xl">{@html section.description.html}</p>
			<div>
				<a class="button bg-blue-600 inline-block text-gray-500 text-xl" href="#tickets"
					>{section.cta}</a
				>
			</div>
		</div>
	</section>
	<!-- Countdown -->
	<div id="countdown" class="flex items-center justify-center px-4">
		<div class=" bg-blue-600 gap-2 font-bold rounded-xl flex px-8">
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
				Compete for <b>$10,000 in cash prizes</b> at the first Web3 ATL hackathon in the Tech Square
				Clubhouse. Regardless of background knowledge, companies have created problems and workshops
				to help challenge and further your development skills.
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
				Hear from industry leaders as they share their perspectives on current events and discuss
				the cutting-edge innovation happening across all areas of crypto. A mix of panels,
				workshops, and presentations will inform any audience member regardless of their current
				experience in web3.
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
