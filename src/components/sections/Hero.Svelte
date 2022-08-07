<script lang="ts">
	import type { HeroSection } from '$lib/types/components'

	export let section: HeroSection
</script>

I am here today
<h1>{section.title}</h1>
