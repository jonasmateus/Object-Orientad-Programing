const _draw = Symbol()
const _radius = Symbol()

class Circle {
    constructor (radius) {
        this[_radius] = radius
    }

     [_draw]() {
        console.log("Drawing...")
    }
}

let c = new Circle(2)
