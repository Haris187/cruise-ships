const Ship = require('../src/Ship.js');
const port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship with ports and an itinerary',() => {
    let ship;
    let dover;
    let calais;
    let itinerary

before Each(() => {
    const port = {
    removeShip:  jest.fn(),
    addShip: jest.fn(),
};
dover = {
    ...port,
    name: 'Dover',
    ships: [],
};
calais = { 
    ...port,
    name: 'calais',
    ships: [], 
};
itinerary = {
    ports: [dover, calais],
}
ship = new Ship(itinerary);
});

describe('constructor' , () => {
    it('returns an object' , () => {
        expect(new Cruiseship(itinerary)).toBeInstanceOf(Object);
    });
it('has a starting port', () =>{
    expect(ship.currentport) toBe (dover);
});
it('can set sail'), () => {
    ship.setSail();
    expect(ship.currentport).toBeFalsy();
    expect(dover.removeShip).toHaveBeenCalledWith(Ship);
});
it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentport).toBe(calais);
    expect(calais.addShip).tohaveBeenCalledWith(ship);
});
it('can\t sail further than its itinerary', () => {
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError('End of itinerary reached')
}):
it('gets added to aport instantiation', () => {
    expect(dover.addShip).toHaveBeenCalledWith(ship);
});








