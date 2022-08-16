import Faq from '$components/sections/FAQ.svelte';
import Hero from '$components/sections/Hero.svelte';
import People from '$components/sections/People.svelte';
import Sponsors from '$components/sections/Sponsors.svelte';
import Themes from '$components/sections/Themes.svelte';
import Tickets from '$components/sections/Tickets.svelte';
import type { Component } from './types/components';

function componentResolver(component: Component) {
	switch (component.__typename) {
		case 'HeroSection':
			return Hero;
		case 'PeopleSection':
			return People;
		case 'FaqSection':
			return Faq;
		default:
			return null;
	}
}

export default componentResolver;
