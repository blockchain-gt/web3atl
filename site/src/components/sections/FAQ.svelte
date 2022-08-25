<script lang="ts">
	import { getEmail, postEmail } from '$lib/fauna/actions';

	import type { FAQSection } from '$lib/types/components';
	import { slide } from 'svelte/transition';

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
		<div class="divide-y divide-gray-400/30">
			{#each section.faqs as faq, i}
				<button
					class="block w-full text-left p-3"
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
							<h4 class="font-medium text-xl ">
								{faq.question}
							</h4>
						</span>
						<span class="text-white px-4 text-2xl">
							{#if selectedIndex == i}
								-
							{:else}
								+
							{/if}
						</span>
					</span>
				</button>
				{#if selectedIndex === i}
					<div class="p-4 bg-gray-900 w-full" transition:slide>
						<div
							class={`prose prose-a:text-white prose-strong:text-white text-xl ${
								i == section.faqs.length - 1 ? 'rounded-b-md' : ''
							} text-white`}
						>
							{@html faq.answer.html}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<div
		class="border-white/10 bg-gray-100/10 border-2 p-12 rounded-xl max-w-2xl text-center mx-auto py-10 mt-10"
	>
		{#if state == 2}
			<h2>Thanks for subscribing!</h2>
		{:else}
			<h2 class="text-2xl md:text-4xl">Subscribe to Web3 ATL</h2>
			<form
				class="flex flex-col md:flex-row justify-between gap-4"
				on:submit|preventDefault={handleSubmit}
			>
				<input
					class="flex-1 p-4 text-black rounded-md"
					type="email"
					placeholder={state == 1 ? msg : 'satoshi@nakomoto.com'}
					bind:value={email}
				/>
				<button type="submit" class="bg-gray-800 px-8 text-white p-4 rounded-md"> Submit </button>
			</form>
		{/if}
	</div>
</section>
