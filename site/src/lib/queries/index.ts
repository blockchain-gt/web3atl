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
					people {
						name
						company
						title
						bio {
							html
						}
						image {
							url
						}
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
					tierOrder
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
`;

export default homePageQuery;
