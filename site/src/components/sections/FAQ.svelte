<script lang="ts">
	import type { FAQSection } from '$lib/types/components';

	export let section: FAQSection;

	let selectedIndex: number | null = null;
</script>

<section class="bg-[#000030] mx-0 max-w-none">
	<div class="max-w-screen-2xl mx-auto p-0 lg:p-8">
		<h2>{section.title}</h2>
		{#each section.faqs as faq, i}
			<button
				class={`block bg-gray-50 w-full text-left p-3 border border-gray-100 ${i == 0 ? 'rounded-t-md' : ''} ${i == section.faqs.length-1 ? 'rounded-b-md' : ''}`}
				on:click={() => {
					// Close all open FAQs
					if (selectedIndex === i) {
						selectedIndex = null;
					} else {
						selectedIndex = i;
					}
				}}
			>
				<h4 class="font-medium text-xl text-black">
					{faq.question}
				</h4>
			</button>
			{#if selectedIndex === i}
				<div class="p-4 bg-gray-200 w-full">
					<div class="prose">
						{@html faq.answer.html}
					</div>
				</div>
			{/if}
		{/each}
	</div>
</section>
