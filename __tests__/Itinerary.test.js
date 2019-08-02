const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port.js');

describe('Itinerary' , () => {
    let itinerary;
    let port;
    beforeEach(() => {
        port = jest.fn();
        itinerary = new Itinerary(port);
    });
    it('can be instantiated' , () => {
        expect(new Itinerary()).tobeInstanceof(Object);
    });
    it('have ports' , () => {
        expect(itinerary.ports).toEqaul(port);
    });

    
}