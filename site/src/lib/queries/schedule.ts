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
					}
				}
			}
		}
	}
`;

export default scheduleQuery;
