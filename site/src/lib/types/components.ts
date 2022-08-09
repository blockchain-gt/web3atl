import type { FAQ, Person, Sponsor } from './models';
import type { RichText } from './utils';

export type HeroSection = {
	title: string;
	description: RichText;
	cta: string;
};

export type SpeakersSection = {
	title: string;
	people: Person[];
};

export type SponsorsSection = {
	title: string;
	tierOrder: string[];
	sponsors: Sponsor[];
};

export type TicketsSection = {
	title: string;
	description: RichText;
};


export type FAQSection = {
	title: string;
	faqs: FAQ[];
};

export type Component = (
	| HeroSection
	| SpeakersSection
	| SponsorsSection
	| TicketsSection
	| FAQSection
) & {
	__typename:
		| 'HeroSection'
		| 'SpeakersSection'
		| 'SponsorsSection'
		| 'TicketsSection'
		| 'FaqSection';
};
