const homePageQuery = /* GraphQL */ `
	query {
		page(where: { slug: "index" }) {
			title
			components {
				__typename
				... on HeroSection {
					title
					description {
						html
					}
					cta
				}
				... on SpeakersSection {
					title
					agendaSpeakers {
						person {
							name
							company
							title
						}
						tags
					}
				}
				... on TicketsSection {
					title
					description {
						html
					}
				}
				... on SponsorsSection {
					title
					sponsors {
						tier
						image {
							url
						}
						link
					}
				}
				... on FaqSection {
					title
					faqs {
						question
						answer {
							html
						}
					}
				}
			}
		}

		# Get all ticket phases
		ticketPhases(orderBy: endDate_ASC) {
			...TicketPhase
		}
	}

	fragment TicketPhase on TicketPhase {
		price
		endDate
	}
`

export default homePageQuery
