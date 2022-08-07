import type { TicketPhase } from './types/models';

type PriceResolverReturn = {
	currentPhase: TicketPhase;
	allPhases: TicketPhase[];
	timeUntilNextPhase: string; // Should be friendly, like "2 days from now". There's a way to do this with native js.
};

const priceResolver = (phases: TicketPhase[]): PriceResolverReturn => {
	console.log(phases);
};

export default priceResolver;
