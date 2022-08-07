import type { TicketPhase } from './types/models';

export type PriceResolverReturn = {
	currentPhase: TicketPhase;
	allPhases: TicketPhase[];
};

const priceResolver = (phases: TicketPhase[]): PriceResolverReturn => {
	let currentPhase: TicketPhase = {
		price: 0,
		endDate: ''
	};

	// Assuming that phases are sorted from GQL query
	for (let phase of phases) {
		let phaseDate = new Date(phase.endDate);
		let currentDate = new Date();
		if (currentDate <= phaseDate) {
			currentPhase = {
				price: phase.price,
				endDate: phase.endDate
			};
		}
	}

	let resolvedPhases: PriceResolverReturn = {
		currentPhase: currentPhase,
		allPhases: phases
	};
	return resolvedPhases;
};

export default priceResolver;
