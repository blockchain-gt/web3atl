<script lang="ts">
	import type { SpeakersSection } from '$lib/types/components';

	export let section: SpeakersSection;
</script>

<!-- <pre>
{JSON.stringify(section, null, 2)}
</pre> -->
<div class="bg-white">
	<section class="p-0 lg:p-8">
		<div class="flex flex-col text-black gap-10 lg:gap-32">
			<div class="flex flex-col lg:flex-row">
				<div class="flex-1">
					<img src="./Build.jpg" alt="Web 3.0 ATL Hackathon">
				</div>
				<div class="lg:w-1/3 px-8 text-2xl">
					<h2 class="mt-5">Build</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>
			</div>
			<div class="flex flex-col lg:flex-row-reverse">
				<div class="flex-1">
					<img src="./Build.jpg" alt="Web 3.0 ATL Hackathon">
				</div>
				<div class="lg:w-1/3 px-8 lg:pl-0 lg:pr-8 text-2xl">
					<h2 class="mt-5">Inform</h2>
					<p>
						do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>
			</div>
			<div class="flex flex-col lg:flex-row">
				<div class="flex-1">
					<img src="./Build.jpg" alt="Web 3.0 ATL Hackathon">
				</div>
				<div class="lg:w-1/3 px-8 text-2xl">
					<h2 class="mt-5">Advance</h2>
					<p>
						do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>
			</div>
		</div>
		<div class="h-[5px] w-full bg-[#000030] rounded-full my-20"></div>
		<span class="flex flex-col items-baseline gap-10 text-black p-8 lg:p-0">
			<h2 class="">{section.title}</h2><h3 class="">Announcing speakers at the end of August</h3>
			<div class="mx-auto lg:mx-0">
			<a
				class="px-8 py-3 inline-block rounded-md text-white bg-primary shadow-hover-lg"
				href="#speakers">Speaker Interest Form</a
			>
			</div>
		</span>
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
