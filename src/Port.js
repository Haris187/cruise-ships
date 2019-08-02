function Port(name) {
    this.name = name;
    this.ships = [];
}
Port.prototype = {
    addShip(ship) {
        this.ships.push(ship);
    },
};

module.exports = port;
