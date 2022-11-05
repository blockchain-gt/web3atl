<script lang="ts">
	const links = [
		{
			title: `Speaker Schedule`,
			link: `https://www.canva.com/design/DAFQ2liuSLw/qwpdoYt1m-KWihq-7MUEVQ/view?utm_content=DAFQ2liuSLw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink `
		},
		{
			title: `Floor Plans`,
			link: `https://www.canva.com/design/DAFQ27Zqrm0/w2RKqkq-ipUuimzHm0zc2w/view?utm_content=DAFQ27Zqrm0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink `
		},
		{ title: `Website`, link: `https://web3atl.io/ ` },
		{ title: `Discord`, link: `https://discord.gg/AYtJD5ZD4z ` },
		{ title: `Twitter`, link: `https://twitter.com/web3_atl ` },
		{ title: `LinkedIn`, link: `https://www.linkedin.com/company/web3-atl ` },
		{ title: `Instagram`, link: `https://www.instagram.com/web3atl/` }
	];
</script>

<div>
	<a href="/">
		<h1 class="text-center font-adventure uppercase text-4xl mb-8">Web3 ATL</h1>
	</a>
	<ul class="space-y-4 mx-auto" style="max-width: 500px">
		{#each links as link}
			<li>
				<a
					class="border text-center p-4 block hover:border-black transition-all font-medium bg-white shadow-lg"
					href={link.link}>{link.title}</a
				>
			</li>
		{/each}
	</ul>
</div>

<div
	id="fun"
	class="object-cover top-0 right-0 bottom-0 bg-cover -z-10 bg-[url(https://cdn.raster.app/blockchain-at-georgia-tech/CVWfqbtr4X?ixlib=js-3.6.0&s=87703771a141a466403c146af36aa8e8)] w-screen h-screen fixed"
/>

<style>
	div {
		padding: 50px;
		padding-top: 100px;
	}
</style>
