import type { FAQ, Organizer, Person, Sponsor } from './models';
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

export type ValuesSection = {};

export type FAQSection = {
	title: string;
	faqs: FAQ[];
};

export type OrganizersSection = {
	organizers: Organizer[];
};

export type PeopleSection = {
	SpeakerSection: SpeakersSection;
	SponsorSection: SponsorsSection;
	TicketsSection: TicketsSection;
};

export type CTASection = {
	title: string;
};

export type Component = (
	| HeroSection
	| SpeakersSection
	| SponsorsSection
	| TicketsSection
	| FAQSection
	| PeopleSection
	| CTASection
	| OrganizersSection
	| ValuesSection
) & {
	__typename:
		| 'HeroSection'
		| 'SpeakersSection'
		| 'SponsorsSection'
		| 'TicketsSection'
		| 'FaqSection'
		| 'PeopleSection'
		| 'CtaSection'
		| 'OrganizersSection'
		| 'ValuesSection';
};
