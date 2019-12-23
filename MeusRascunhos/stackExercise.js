
const _map = new WeakMap()

class Stack {

    constructor() {

        _map.set(this, [])

        this.push = function (e) {

            _map.get(this).push(e)
        }

        this.pop = function () {
            
            if (_map.get(this).length <= 0) throw new Error("A pilha está vazia")
            _map.get(this).pop()
            
        }

        this.peek = function () {

            if (_map.get(this).length <= 0) throw new Error ("A pilha está vazia")
            return _map.get(this)[_map.get(this).length - 1]
            
        }

        this.size = function () {
            return _map.get(this).length
        }
    }


}

let s = new Stack()