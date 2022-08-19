<script lang="ts">
	import type { CTASection } from '$lib/types/components';

	export let section: CTASection;
</script>

<section
	class="text-black flex flex-col lg:flex-row gap-5 lg:justify-between lg:divide-x divide-y lg:divide-y-0 divide-slate-400 mb-20"
>
	<div
		class="mt-20 flex flex-col items-center text-black p-8 max-w-lg mx-auto overflow-hidden relative"
	>
		<h2 class="w-full my-4 text-center font-[adventure] uppercase">Speak</h2>
		<p class="max-w-md text-center my-4">
			Are you an experienced crypto professional looking to share your knowledge? Apply below!
		</p>
		<div class="mx-auto lg:mx-0 my-4">
			<a
				class="button inline-block button-lg"
				href="https://docs.google.com/forms/d/e/1FAIpQLSeERRmQG_mxEJ89TW6ufIK3K4qu0uW8If_NXD6ewjWUe3GSyg/viewform?usp=sf_link"
				>Apply to speak</a
			>
		</div>
		<p class="w-full my-4 text-center text-gray-500">Application closes September 5, 2022</p>
	</div>
	<div class="mt-20 flex flex-col items-center text-black p-8 max-w-lg mx-auto">
		<h2 class="w-full my-4 text-center font-[adventure] uppercase">Sponsor</h2>
		<p class="max-w-md text-center my-4">
			Interested in sponsoring? Let us know, we'd love to talk!
		</p>
		<div class="mx-auto lg:mx-0 my-4">
			<a
				class="button inline-block button-lg"
				href="https://docs.google.com/forms/d/e/1FAIpQLScJNcC8IPj0nxhkVriR0vcS1wq0CNUgXd7fDAwrA3FPAQy2EA/viewform?usp=sf_link"
				>Apply to sponsor</a
			>
		</div>
		<p class="w-full my-4 text-center text-gray-500">Application closes September 5, 2022</p>
	</div>
	<div class="mt-20 flex flex-col items-center text-black p-8 max-w-lg mx-auto">
		<h2 class="w-full my-4 text-center font-[adventure] uppercase">Get Tickets</h2>
		<p class="max-w-md text-center my-4">
			Join us to build, inform, and advance your crypto journey.
		</p>
		<div class="mx-auto lg:mx-0 my-4">
			<a class="button inline-block button-lg" href="#tickets">Purchase Tickets</a>
		</div>
		<p class="w-full my-4 text-center text-gray-500">Prices increase September 5, 2022</p>
	</div>
</section>
