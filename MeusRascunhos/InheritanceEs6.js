class Shape {
    constructor (color) {
        this.color = color
    }

    draw () {
        return "Drawing..."
    }
}

class Circle extends Shape {
    constructor (color, radius) {
        super(color)
        this.radius = radius
    }
    
}

let c = new Circle ("Blue", 3)
