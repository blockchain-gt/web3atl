<script lang="ts">
	import type { SpeakersSection } from '$lib/types/components';

	export let section: SpeakersSection;
</script>

<!-- <pre>
{JSON.stringify(section, null, 2)}
</pre> -->

<section>
	<h2>{section.title}</h2>
	{#each section.people as person}
		<div>
			<!-- Speaker Card -->
			{#if person.image}
				<img src={person.image.url} alt={person.name} />
			{/if}
			<h4>
				{person.name}
			</h4>
			<p>{person.company}</p>
			<p>{person.title}</p>
		</div>
	{/each}
</section>
