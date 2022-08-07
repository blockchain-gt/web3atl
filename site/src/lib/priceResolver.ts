import type { TicketPhase } from './types/models';

type PriceResolverReturn = {
	currentPhase: TicketPhase;
	allPhases: TicketPhase[];
};

const priceResolver = (phases: TicketPhase[]): PriceResolverReturn => {
	let currentPhase: TicketPhase = {
		price: 0,
		endDate: ''
	}
	let idx;
	let count = 0;
	// phases must be sorted chronologically from GQL query
	for (let phase of phases) {
		let phaseDate = new Date(phase.endDate);
		let currentDate = new Date();
		if (currentDate <= phaseDate) {
			currentPhase = {
				price: phase.price,
				endDate: phase.endDate
			}
			idx = count;
		}
		count++;
	}
	let resolvedPhases: PriceResolverReturn = {
		currentPhase: currentPhase,
		allPhases: phases
	}
	return resolvedPhases;
};

export default priceResolver;
