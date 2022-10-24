const scheduleQuery = /* GraphQL */ `
	query {
		page(where: { slug: "schedule" }) {
			title
			components {
				__typename
				... on Schedule {
					agendaItems(first: 1000, orderBy: startTime_ASC) {
						id
						title
						category
						location
						startTime
						eventType
						eventLink
						agendaSpeakers {
							person {
								name
								company
								title
								image {
									url
								}
							}
							tags
						}
					}
				}
			}
		}
	}
`;

export default scheduleQuery;
