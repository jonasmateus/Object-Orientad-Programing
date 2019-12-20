
    function focus () { console.log("Focused") }

    function click () { console.log("Clicked")}



    function HtmlElement () {
    this.click = click
    this.focus = focus
    }


    function SelectHtmlElement () {
        
        this.item = []
        Object.defineProperty(SelectHtmlElement.prototype, "addItems", {
            set: (e) => this.item.push(e)
        })
        Object.defineProperty(SelectHtmlElement.prototype, "removeItems", {
            set: (param) => this.item = this.item.filter ( e => e != param )
        })
        
    }  

    SelectHtmlElement.prototype = new HtmlElement()


    let e = new HtmlElement()

    let s = new SelectHtmlElement()







