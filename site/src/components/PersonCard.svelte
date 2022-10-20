<script lang="ts">
	import type { Person } from '$lib/types/models';

	export let person: Person;

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
	class="flex flex-col justify-center items-center gap-y-2 card relative group overflow-hidden w-full h-full"
>
	<div
		class="{!noGradient
			? `bg-gradient-${i % 5}`
			: ''} absolute inset-0 !aspect-square {z} opacity-10 group-hover:rotate-180 group-hover:scale-[4] group-hover:opacity-80 group-hover:brightness-125 transition-all duration-700"
	/>
	<!-- Speaker Card -->
	{#if person?.image}
		<img
			class="rounded-full border border-gray-300 w-40 object-cover !aspect-square"
			src={person?.image?.url}
			alt={person.name}
		/>
	{/if}
	<h4 class="font-bold">
		{person?.name}
	</h4>
	<div class="text-center">
		<p>{person?.company}</p>
		<p>{person?.title}</p>
	</div>
</button>
