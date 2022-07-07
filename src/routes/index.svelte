<script lang="ts">
	import { onMount } from 'svelte'

	let ticketElm
	let bgElm

	onMount(() => {
		const { x, y, width, height } = ticketElm.getBoundingClientRect()
		const { x: bgX, y: bgY, width: bgW, height: bgH } = bgElm.getBoundingClientRect()
		const centerPoint = { x: x + width / 2, y: y + height / 2 }
		const bgCenter = { x: bgX + bgW / 2, y: bgY + bgH / 2 }
		window.addEventListener('mousemove', (e) => {
			const degreeX = (e.clientY - centerPoint.y) * 0.008
			const degreeY = (e.clientX - centerPoint.x) * -0.008

			const bgDegreeX = (e.clientY - bgCenter.y) * 0.8
			const bgDegreeY = (e.clientX - bgCenter.x) * -0.8

			ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg) translateX(-5rem) translateZ(20px)`
			bgElm.style.transform = `translate(${bgDegreeX + 100}px, ${bgDegreeY - 100}px, -100px)`
		})
	})

	const data = [
		{
			name: 'Blockchain at Georgia Tech',
			image: 'bgt.jpg',
			url: 'https://blockchain-gt.io'
		},
		{
			name: 'Babylon Web3 Academy',
			image: 'babylon.jpg',
			url: 'http://babylonweb3.academy'
		},

		{
			name: '404 Dao',
			// image: 'babylon.jpg',
			url: 'https://404dao.io'
		}
	]
</script>

<section class="pt-12 min-h-screen">
	<div
		class="bg-[url('/lines.png')] z-50 bg-cover rounded-xl pr-32 pl-40 py-40 -translate-x-20 w-2/3"
		bind:this={ticketElm}>
		<h1 class="font-extrabold text-9xl max-w-lg text-gray-100 bg-clip-text drop-shadow-md">
			Web <span>3.0</span> <span class="font-black text-white">ATL</span>
		</h1>
		<p class="font-bold text-white/80 text-xl">November 5-6, 2022</p>
	</div>
	<img
		style="transform: translate(100px, -100px);"
		bind:this={bgElm}
		src="/blurred.png"
		alt=""
		class="object-contain absolute right-0 top-0 h-[40rem] -z-50" />
</section>

<section class="container max-w-screen-md mx-auto mt-16 pb-20">
	<h2 class="text-5xl font-bold">Hosted By</h2>
	<div class="grid grid-cols-3 gap-8 mt-8 mb-40">
		{#each data as host}
			<a href={host.url} class="flex flex-col">
				<div
					style="background: url('{host.image}'); background-size: cover;"
					class="aspect-square border-gray-200/20 border rounded-full w-full h-full" />
				<p class="mt-4 text-center font-bold">{host.name}</p>
			</a>
		{/each}
	</div>
</section>

<section class="container mx-auto mb-20">
	<div
		class="bg-[url('/red.png')] max-w-screen-lg mx-auto px-28 py-16 rounded-3xl shadow-red-900 shadow-lg">
		<h2 class="font-bold text-4xl text-center">Our speakers list is coming soon</h2>
		<p class="text-white/80 text-center w-[300px] mt-2 mx-auto">
			Want more updates about Web 3.0 ATL? Sign up for our email list.
		</p>
		<form action="">
			<input
				type="email"
				placeholder="satoshi@nakomoto.com"
				class="p-4 rounded-md bg-white/20 border-white/50 border-2 backdrop-blur-sm placeholder-gray-200 block mx-auto w-80 mt-8" />
			<button
				type="submit"
				class="mx-auto mt-3 bg-white border-black border-2 text-black px-4 py-2 font-bold text-lg block rounded-lg"
				>Submit &rarr;</button>
		</form>
	</div>
</section>
