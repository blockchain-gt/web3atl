import Faq from '$components/sections/FAQ.svelte';
import Hero from '$components/sections/Hero.svelte';
import Speakers from '$components/sections/Speakers.svelte';
import Sponsors from '$components/sections/Sponsors.svelte';
import Tickets from '$components/sections/Tickets.svelte';
import type { Component } from './types/components';

function componentResolver(component: Component) {
	switch (component.__typename) {
		case 'HeroSection':
			return Hero;
		case 'SpeakersSection':
			return Speakers;
		case 'SponsorsSection':
			return Sponsors;
		case 'TicketsSection':
			return Tickets;
		case 'FAQSection':
			return Faq;
		default:
			return null;
	}
}

export default componentResolver;
