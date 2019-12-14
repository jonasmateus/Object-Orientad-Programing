function mix (Marcado, ...Recursos) {
    Object.assign(Marcado, ...Recursos)
}

let podeAndar = {
    ande: () => {
        console.log("Andando...")
    }
}

let podeComer = {
    coma: () => {
        console.log("Comendo...")
    }
}

let podeNadar = {
    nade: () => {
        console.log("Nadando...")
    }
}

function Peixe () {

}

function Pessoa () {

}

mix(Peixe.prototype, podeComer, podeNadar)
mix(Pessoa.prototype, podeNadar, podeComer, podeAndar)

let px = new Peixe()
let p = new Pessoa()
