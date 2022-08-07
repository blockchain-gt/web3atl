<script lang="ts">
	import type { HeroSection } from 'src/lib/types/components';

	export let section: HeroSection;
</script>

<section>
	<h1 class="font-bold text-5xl">{section.title}</h1>
	<p>{@html section.description.html}</p>
	<a class="px-8 py-3 inline-block rounded-md text-white bg-primary" href="#tickets"
		>{section.cta}</a
	>
</section>
