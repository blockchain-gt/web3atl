const scheduleQuery = /* GraphQL */ `
	query {
		page(where: { slug: "schedule" }) {
			title
			components {
				__typename
				... on Schedule {
					agendaItems(orderBy: startTime_ASC) {
						id
						title
						location
						startTime
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
