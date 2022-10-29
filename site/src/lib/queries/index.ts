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
					people(first: 100) {
						name
						company
						title
						bio {
							html
						}
						image {
							url
						}
						isAlumni
						isStudent
					}
				}
				... on CtaLink {
					title
					link
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
					sponsors(first: 100) {
						tier
						image {
							url
						}
						link
					}
				}
				... on OrganizersSection {
					organizers {
						logo {
							url
						}
						type
						link
					}
				}
				... on FaqSection {
					title
					faqs(first: 100) {
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
