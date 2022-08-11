<script lang="ts">
	import type { SpeakersSection } from '$lib/types/components';

	export let section: SpeakersSection;
</script>

<!-- <pre>
{JSON.stringify(section, null, 2)}
</pre> -->
<div class="bg-white mt-12">
	<section class="p-0 lg:p-8">
		<div class="flex flex-col text-black gap-10 lg:gap-32">
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
		</div>
		<div
			class="mt-20 flex flex-col items-center text-black p-8 bg-gray-100 max-w-lg mx-auto rounded-lg border"
		>
			<h2 class="w-full my-4 text-center">{section.title}</h2>
			<p class="max-w-md text-center my-4">
				Lorem ipsum. Want to speak? Lorem ipsum. Life changing opportunity.
			</p>
			<div class="mx-auto lg:mx-0 my-4">
				<a class="button inline-block button-lg" href="#speakers">Apply to speak</a>
			</div>
			<p class="w-full my-4 text-center text-gray-500">Application closes August 28, 2022</p>
		</div>
		<!-- <div class="flex flex-wrap gap-x-8 justify-start">
			{#each section.people as person}
				<div
					class="text-center flex flex-col bg-white text-black items-center gap-y-1 rounded-lg shadow-hover-2xl p-4 border"
				>
					{#if person.image}
						<img
							class="rounded-full border border-gray-300 w-40 !aspect-square mb-2"
							src={person.image.url}
							alt={person.name}
						/>
					{/if}
					<h4 class="font-bold">
						{person.name}
					</h4>
					<p>{person.company}</p>
					<p>{person.title}</p>
				</div>
			{/each}
		</div> -->
	</section>
</div>
