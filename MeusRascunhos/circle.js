const _wm = new WeakMap ()

export class Circle {
    constructor (radius) {
        _wm.set(this, radius)
    }

    draw () {
       console.log(_wm.get(this))
    }
}

// module.exports = Circle