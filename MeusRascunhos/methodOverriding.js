function extender (Filha, Pai) {
    Filha.prototype = Object.create(Pai.prototype)
    Filha.prototype.constructor = Filha
}

function Forma () {

}

Forma.prototype.duplique =  function ()  {
    console.log("duplique forma")
}

function Circulo () {

}

extender(Circulo, Forma)

Circulo.prototype.duplique = function () {

    Forma.prototype.duplique.call(this)
    console.log("duplique o círculo")
}

const c = new Circulo()

/* Polimorfismo */ 
let formas = [new Forma(), new Circulo]

for (let f of formas) console.log(f.duplique())