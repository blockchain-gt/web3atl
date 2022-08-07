import type { AgendaSpeaker, FAQ, Sponsor } from './models'
import type { RichText } from './utils'

export type HeroSection = {
	title: string
	description: string
	cta: string
}

export type SpeakersSection = {
	title: string
	agendaSpeakers: AgendaSpeaker[]
}

export type SponsorsSection = {
	title: string
	sponsors: Sponsor[]
}

export type TicketsSection = {
	title: string
	description: RichText
}

export type FAQSection = {
	title: string
	faqs: FAQ[]
}

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
		| 'FAQSection'
}
