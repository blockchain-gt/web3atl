<script lang="ts">
	import { shuffle } from '$components/shuffle';
	import Team from '$components/Team.svelte';
	import type { HackerInfo, Res, TeamData } from '$components/types';
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';

	let data: Res | null = null;

	let teamData: { name: string; hackers: HackerInfo[] }[] | null = null;
	let barchartData: { function: string; solves: number }[] = [];
	let maxData = 0;

	const transform = (data: Res) => {
		const orderedTeamData = [];

		// shuffle(data.teamOrder);

		for (const key of data.teamOrder) {
			orderedTeamData.push({ name: key, hackers: data.teamData[key] });
		}

		barchartData = [];

		maxData = -1 * Infinity;
		data.solves.forEach((d) => {
			if (d.function && d.solves !== null) {
				barchartData = [...barchartData, d];
				if (d.solves > maxData) {
					maxData = d.solves;
				}
			}
		});

		teamData = [...orderedTeamData];
		return data;
	};

	onMount(() => {
		const fetchData = async () => {
			const url = 'https://sprintapi-production.up.railway.app/data';
			const res = await fetch(url);
			const json = await res.json();
			data = transform(json);
		};

		fetchData();

		setInterval(() => {
			fetchData();
		}, 5000);
	});

	let timeLeft = 0;

	onMount(() => {
		const set = () => (timeLeft = Date.now() / 1000 - (data?.endTime || 0));
		setInterval(() => {
			set();
		}, 1000);
	});
</script>

<iframe src="https://hack.web3atl.io/blank" title="Web3ATL Hackathon" />

<section class="pt-32">
	<div
		class="flex items-center justify-center px-4 font-adventure uppercase text-white w-full rounded-lg py-8 relative z-20 {!data
			? 'hidden'
			: ''}"
	>
		<div
			class="gap-6 md:gap-2 font-bold rounded-xl grid grid-cols-5 lg:text-3xl text-xs md:grid-cols-9 py-4"
		>
			<p aria-label="weeks remaining" class="">
				{Math.floor(timeLeft / (60 * 60 * 24 * 7))
					.toString()
					.padStart(2, '0')} w
			</p>
			<div class="hidden md:flex items-center justify-center">:</div>
			<p aria-label="days timeLeft" class="">
				{Math.floor((timeLeft % (60 * 60 * 24 * 7)) / (60 * 60 * 24))
					.toString()
					.padStart(2, '0')} d
			</p>
			<div class="hidden md:flex items-center justify-center">:</div>
			<p aria-label="hours timeLeft" class="">
				{Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60))
					.toString()
					.padStart(2, '0')} h
			</p>
			<div class="hidden md:flex items-center justify-center">:</div>
			<p aria-label="minutes timeLeft" class="">
				{Math.floor((timeLeft % (60 * 60)) / 60)
					.toString()
					.padStart(2, '0')} m
			</p>
			<div class="hidden md:flex items-center justify-center">:</div>
			<p aria-label="seconds timeLeft" class="">
				{Math.floor(timeLeft % 60)
					.toString()
					.padStart(2, '0')} s
			</p>
		</div>
	</div>
	<div class="relative z-10">
		<div
			class="relative text-green-400 font-bold flex items-center gap-4 px-10 {timeLeft < 0
				? 'hidden'
				: ''}"
		>
			<div class="flex items-center justify-center">
				<div class="absolute !w-2 !h-2 rounded-full bg-green-400" />
				<div class="absolute !w-3 !h-3 rounded-full bg-green-400 animate-ping" />
			</div>
			LIVE
		</div>
		<ul class="!text-white">
			{#if teamData && data}
				{#each teamData as team (team.name)}
					<div animate:flip class="relative">
						<Team totalWinningScore={data.totalWinningScore} name={team.name} team={team.hackers} />
					</div>
				{/each}
			{/if}
		</ul>
	</div>

	<div
		class="grid relative text-white gap-1"
		style="grid-template-columns: repeat({barchartData.length}, minmax(0,1fr));"
	>
		{#each barchartData as bc}
			<div class="h-80 flex flex-col">
				<div class="flex-grow flex flex-col justify-end">
					<div class="bg-gray-700 rounded-md" style="height: {(100 * bc.solves) / maxData}%" />
				</div>
				<p class="text-center font-mono mt-2">
					{bc.function}
				</p>
			</div>
		{/each}
	</div>
</section>

<style>
	iframe {
		position: fixed;
		width: 100vw;
		height: 100vh;
	}
</style>
