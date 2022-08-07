import type { Component } from './types/components'
import Hero from '$components/sections/Hero.svelte'

/**
 * Component resolver
 * @param component
 * @returns
 */
export const componentResolver = (component: Component) => {
	console.log(component.__typename)

	if (component.__typename === 'HeroSection') {
		return Hero
	}
}
