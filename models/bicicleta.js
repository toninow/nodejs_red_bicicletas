var bicicleta = function(id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

bicicleta.prototype.toString = function() {
    return 'id' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici);
}

var a = new Bicicleta(1, 'negra', 'urbana', [-0.1830316, -78.4874437]);
var b = new Bicicleta(2, 'azul', 'urbana', [-0.1814697, -78.4820932]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;