import Cta from '$components/sections/CTA.svelte';
import Faq from '$components/sections/FAQ.svelte';
import Hero from '$components/sections/Hero.svelte';
import Organizers from '$components/sections/Organizers.svelte';
import Speakers from '$components/sections/Speakers.svelte';
import Sponsors from '$components/sections/Sponsors.svelte';
import Tickets from '$components/sections/Tickets.svelte';
import Values from '$components/sections/Values.svelte';
import type { Component } from './types/components';

function componentResolver(component: Component) {
	console.log(component.__typename);

	switch (component.__typename) {
		case 'HeroSection':
			return Hero;
		case 'SpeakersSection':
			return Speakers;
		case 'SponsorsSection':
			return Sponsors;
		case 'TicketsSection':
			return Tickets;
		case 'CtaSection':
			return Cta;
		case 'FaqSection':
			return Faq;
		case 'OrganizersSection':
			return Organizers;
		case 'ValuesSection':
			return Values;
		default:
			return null;
	}
}

export default componentResolver;
