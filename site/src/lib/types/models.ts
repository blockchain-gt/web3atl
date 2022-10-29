import type { Component } from './components';
import type { Image, RichText } from './utils';

export type AgendaSpeaker = {
	tags: string;
	person: Person;
};

export type Person = {
	name: string;
	image: Image;
	company: string;
	title: string;
	bio: RichText;
	isAlumni: boolean;
	isStudent: boolean;
};

export type AgendaItem = {
	title: string;
	description: string;
	location: string;
	category: string;
	agendaSpeakers: AgendaSpeaker[];
	startTime: string;
	eventType: string;
	eventLink: string;
};

export type FAQ = {
	question: string;
	answer: RichText;
};

export type Sponsor = {
	image: Image;
	link: string;
	tier: string;
};

export type TicketPhase = {
	price: number;
	endDate: string;
};

export type Page = {
	title: string;
	components: Component[];
};

export type Organizer = {
	name: string;
	logo: Image;
	link: string;
	type: string;
};
