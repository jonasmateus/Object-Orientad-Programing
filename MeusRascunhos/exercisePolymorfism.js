    function click () { console.log("Clicked")}
    function focus () { console.log("Focused")}
    
    function HtmlElement () {
        this.click = click
        this.focus = focus
        }


    function SelectHtmlElement (...items) {
            
        this.items = items

        Object.defineProperty(SelectHtmlElement.prototype, "removeItems", {
                set: (param) => this.items = this.items.filter ( e => e != param )
        })
        
        this.render = function ()  {
           return `
            <select>${this.items.map(item => `
              <option>${item}</option>`).join('')}
            </select>`
        }
    }

    function SelectImageElement (src) {
        this.src = src
        this.render = function () {
            return `<img src=${`${this.src}`}>`
        }

    }

let s = new SelectHtmlElement([1,2,3])
let img = new SelectImageElement("http://")

let array = [s,img]
array.forEach(e => console.log(e.render()))

