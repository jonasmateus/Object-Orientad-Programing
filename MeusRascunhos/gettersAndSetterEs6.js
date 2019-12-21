const _radius =  new WeakMap()
const _color = new WeakMap()

class Square {
    constructor (color) {
        _color.set(this, color)
    }

    
    get radius () {
        return `${_radius.get(this)}`
    }

    set radius (radius) {
        if (radius <= 0) throw new Error("Invalid value")
        _radius.set(this,radius)
    }
}

let s = new Square("Red")
