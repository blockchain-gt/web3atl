import type { Component } from './types/components'
import Hero from '$components/sections/Hero.svelte'

/**
 * Component resolver
 * @param component
 * @returns
 */
export const componentResolver = (component: Component) => {
	switch (component.__typename) {
		case 'HeroSection':
			return Hero
			break
		case 'SpeakersSection':
			return Speakers
			break
		case 'SponsorsSection':
			return Sponsors
			break
		case 'TicketsSection':
			return Tickets
			break
		case 'FAQSection':
			return FAQs
			break
		default:
			break
	}
}
