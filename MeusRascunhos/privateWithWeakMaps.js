const _radius =  new WeakMap()
const _paint = new WeakMap()

class Square {
    constructor (size, color) {
        _radius.set(this, size)
        _paint.set(this, () => { console.log(`Painting with "${color}" color...`)})
    }

    draw () {
        console.log(_radius.get(this))
        _paint.get(this)()
    }
}

let s = new Square(4,"Blue")