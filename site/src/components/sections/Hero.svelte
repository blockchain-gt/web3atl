<script lang="ts">
	import type { HeroSection } from 'src/lib/types/components';

	export let section: HeroSection;
</script>

<section>
	<h1 class="">{section.title}</h1>
	<p>{@html section.description.html}</p>
	<button>{section.cta}</button>
</section>
