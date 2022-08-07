import type { Component } from './components'
import type { Image, RichText } from './utils'

export type AgendaSpeaker = {
	tags: string[]
	person: Person
}

export type Person = {
	name: string
	image: Image
	company: string
	title: string
	bio: RichText
}

export type AgendaItem = {
	title: string
	description: string
	location: string
	participants: AgendaSpeaker[]
}

export type FAQ = {
	question: string
	answer: RichText
}

export type Sponsor = {
	image: Image
	link: string
	tier: string
}

export type TicketPhase = {
	price: number
	endDate: string
}

export type Page = {
	title: string
	components: Component[]
}