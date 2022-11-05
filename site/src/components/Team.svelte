<script lang="ts">
	import type { HackerInfo, TeamData } from './types';

	export let team: HackerInfo[];
	export let name: string;
	export let totalWinningScore: number;

	$: highestScore = team.sort((a, b) => a.score - b.score)[0].score;
	$: prize = Math.round((highestScore / (!totalWinningScore ? 1 : totalWinningScore) * 2500));
</script>

<div
	class="backdrop-blur-xl rounded-lg bg-gray-800/40 border-white/10 border my-6 grid grid-cols-4 py-2"
>
	<div class="h-full flex items-center pl-8 font-bold text-xl">
		{name}
	</div>
	<div class="col-span-2 flex justify-center">
		<table class="my-2 border-spacing-x-7 border-separate">
			<tr class="uppercase text-xs opacity-50 font-medium">
				<th>Address</th>
				<th>Score</th>
			</tr>
			{#each team.slice(0, 3) as hacker}
				<tr>
					<td class="font-mono text-gray-200 font-thin">
						{hacker.hacker.slice(0, 10)}
					</td>
					<td class="font-bold text-center">{hacker.score}</td>
				</tr>
			{/each}
		</table>
	</div>
	<div class="flex justify-center items-center w-full">${prize}</div>
</div>
