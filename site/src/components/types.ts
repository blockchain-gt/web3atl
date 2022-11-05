export interface Res {
	teamData: TeamData;
	teamOrder: string[];
	totalWinningScore: number;
	solves: { function: string; solves: number }[];
	endTime: number;
}

export interface TeamData {
	[teamName: string]: HackerInfo[];
}

export interface HackerInfo {
	hacker: string;
	score: number;
}
