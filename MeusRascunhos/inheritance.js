let pessoa = { nome: "Jonas"}
console.log(Object.getPrototypeOf(pessoa))

Object.defineProperty(pessoa, "nome", {
    writable: true,
    enumerable: true,
    configurable: false
})

pessoa.nome = "Joninhas"
delete pessoa.nome
console.log(Object.entries(pessoa))
