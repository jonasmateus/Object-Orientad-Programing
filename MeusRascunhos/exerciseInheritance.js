
    function focus () { console.log("Focused") }

    function click () { console.log("Clicked")}



    function HtmlElement () {
    this.click = click
    this.focus = focus
    }


    function SelectElement () {
        
        this.item = []
        Object.defineProperty(SelectElement.prototype, "addItems", {
            set: (e) => this.item.push(e)
        })
        Object.defineProperty(SelectElement.prototype, "removeItems", {
            set: (param) => this.item = this.item.filter ( e => e != param )
        })
        
    }  

    SelectElement.prototype = new HtmlElement()


    let e = new HtmlElement()

    let s = new SelectElement()







