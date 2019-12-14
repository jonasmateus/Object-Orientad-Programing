function extender (Filha, Pai) {
    Filha.prototype = Object.create(Pai.prototype)
    Filha.prototype.constructor = Filha
}

function Forma (cor) {
    this.cor = cor
}

Forma.prototype.duplique = function () {
    console.log("duplique")
}
Forma.prototype.desenhe = function () {
    console.log("desenhe")

}
function Circulo (raio,cor) {
    Forma.call(this,cor)
    this.raio = raio
}

extender(Circulo,Forma)

// console.log(Circulo.prototype.constructor === Forma.prototype.constructor)

function Quadrado (tamanho) {
    this.tamanho = tamanho
}

extender(Quadrado,Forma)

let f = new Forma("blue")
let c = new Circulo(2) 