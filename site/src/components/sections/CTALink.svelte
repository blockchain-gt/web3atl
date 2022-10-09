<script lang="ts">
	import type { CtaLink } from '$lib/types/components';

	export let section: CtaLink;
</script>

<div class="w-full flex justify-center pt-10">
	<a
		href="/schedule"
		class="bg-pink text-black mx-auto py-6 px-16 rounded-full text-3xl hover:shadow-xl duration-1000 hover:border-black/20 hover:shadow-pink/40 transition-shadow border border-black/10 font-[adventure] uppercase tracking-widest"
		>{section.title}</a
	>
</div>
