function Circle (radius) {
    this.radius = radius
}

Circle.prototype.draw = function () {
    console.log(`This is a circle with radius:${this.radius}`)
}

let c1 = new Circle(5)
let c2 = new Circle(10)

console.log(c1.__proto__.hasOwnProperty('draw'))
console.log(c1.__proto__)
