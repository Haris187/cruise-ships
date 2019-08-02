const port = require('../src/port.js');

describe('port', () => {
    let port;
    let ship;
    beforeEach(() => {
        port = new port('Dover');
        ship = jest.fn()
    });
    it ('can be instantiated' , () => { 
        expect(new port()).toBeInstanceOf(Object);
    });
    it('checks if object has name property' , () => {
        expect(port.name).toEqual('Dover');
    });
    it('can add a new ship', () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });
    it('can remove a ship' , () => {
        const titanic = jest.fn();
        const queenMary = jest.fn();
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual(titanic);
    });
    
