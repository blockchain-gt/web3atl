<script lang="ts">
	import type { Person } from '$lib/types/models';

	export let person: Person;

	export let tags: string;

	export let selectedSpeaker: any = undefined;
	export let i: number;
	export let z = '-z-10';

	export let noGradient = false;
</script>

<button
	on:click={() => {
		if (typeof selectedSpeaker !== undefined) {
			selectedSpeaker = person;
		}
	}}
	class="flex flex-col justify-center items-center gap-y-2 card relative group overflow-hidden w-full h-full shadow-lg"
>
	<div
		class="{!noGradient
			? `bg-gradient-${i % 5} w-full`
			: ''} absolute h-full !inset-0 !aspect-square {z} opacity-10 group-hover:rotate-180 group-hover:scale-[4] group-hover:opacity-80 group-hover:brightness-125 transition-all duration-700"
	/>
	<!-- Speaker Card -->

	<!-- {#if person?.isAlumni}
		<div class="absolute w-0 h-0 overflow-visible top-0 right-0 font-bold text-white rotate-45 -translate-x-20 -translate-y-4">
			<div class="bg-background w-36 h-6">
				GT Alumni
			</div>
		</div>
	{/if} -->

	{#if person?.image}
		<img
			class="rounded-full border border-gray-300 w-40 object-cover !aspect-square"
			src={person?.image?.url}
			alt={person.name}
		/>
	{/if}
	<h4 class="font-bold">
		{person?.name}
		<!-- {#if person?.isAlumni}
			🐝
		{/if} -->
	</h4>
	<div class="text-center">
		<p>{person?.company}</p>
		<p>{person?.title}</p>
		{#if tags}
			<span class="uppercase text-sm px-3 py-1 rounded-full font-bold text-white bg-blue-900">
				Moderator
			</span>
		{/if}
	</div>
</button>
