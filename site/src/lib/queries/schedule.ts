const scheduleQuery = /* GraphQL */ `
	query {
		page(where: { slug: "schedule" }) {
			title
			components {
				__typename
				... on Schedule {
					agendaItems {
						id
						title
						location
					}
				}
			}
		}
	}
`;

export default scheduleQuery;
