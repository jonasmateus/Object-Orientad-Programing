function Pessoa () {
    this.nome = 'Fulano'
    let idade =  23
}

let person = new Pessoa()
Object.defineProperty(person, "info", {
    get: function () {return `${this.nome}, ${this.idade}`},
    set: function (value) {this.idade+= value}
})

Object.defineProperty(person, "idade", { enumerable: false})

person.info = 3
console.log(Object.keys(person))
