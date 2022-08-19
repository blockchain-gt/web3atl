<script lang="ts">
	import { getEmail, postEmail } from '$lib/fauna/actions';

	import type { FAQSection } from '$lib/types/components';

	export let section: FAQSection;

	$: email = '';
	$: state = 0; // 0 = never, 1 = fail, 2 = success
	$: msg = '';
	let selectedIndex: number | null = null;

	const handleSubmit = async () => {
		console.log(email.includes('@'));
		if (email === '') {
			state = 1;
			msg = 'Please enter an email';
		} else if (email.includes('@') == false) {
			state = 1;
			email = '';
			msg = 'Please enter a valid email';
		} else {
			console.log('fetchin');
			const res = await getEmail(email);
			if (res.data.length == 0) {
				state = 2;
				postEmail(email);
			} else {
				state = 1;
				msg = "You've already subscribed with that email";
			}
		}
	};
</script>

<section class="bg-gray-800 text-white mx-0 max-w-none w-full px-4 py-10 pb-20">
	<div class="max-w-screen-2xl mx-auto">
		<h2>{section.title}</h2>
		{#each section.faqs as faq, i}
			<button
				class={`block bg-gray-50 w-full text-left p-3 border border-gray-100 ${
					i == 0 ? 'rounded-t-md' : ''
				} ${i == section.faqs.length - 1 && selectedIndex != i ? 'rounded-b-md' : ''}`}
				on:click={() => {
					// Close all open FAQs
					if (selectedIndex === i) {
						selectedIndex = null;
					} else {
						selectedIndex = i;
					}
				}}
			>
				<span class="flex items-center justify-between">
					<span class="flex items-center gap-3">
						<svg class="h-[6px] w-[6px]" xmlns="http://www.w3.org/2000/svg">
							<circle cx="3px" cy="3px" r="3px" />
						</svg>
						<h4 class="font-medium text-xl text-black">
							{faq.question}
						</h4>
					</span>
					<span class="text-black px-4 text-2xl">
						{#if selectedIndex == i}
							-
						{:else}
							+
						{/if}
					</span>
				</span>
			</button>
			{#if selectedIndex === i}
				<div class="p-4 bg-gray-200 w-full">
					<div class={`prose text-xl ${i == section.faqs.length - 1 ? 'rounded-b-md' : ''}`}>
						{@html faq.answer.html}
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<div
		class="border-white/10 bg-gray-100/10 border-2 p-12 rounded-xl max-w-2xl text-center mx-auto py-10 mt-10"
	>
		{#if state == 2}
			<h2>Thanks for subscribing!</h2>
		{:else}
			<h2>Subscribe to Web3 ATL</h2>
			<span class="flex items-center justify-between gap-4">
				<input
					class="flex-1 p-4 text-black rounded-md"
					type="email"
					placeholder={state == 1 ? msg : 'satoshi@nakomoto.com'}
					bind:value={email}
				/>
				<button type="submit" class="bg-blue-600 text-white p-4 rounded-md" on:click={handleSubmit}>
					Submit
				</button>
			</span>
		{/if}
	</div>
</section>
