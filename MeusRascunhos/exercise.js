

    Object.prototype.Stopwatch = function () {

        Object.defineProperty(this, "start", {
            get: () => start
        })

        Object.defineProperty(this, "stop", {
            get: () => stop
        })

        Object.defineProperty(this, "duracao", {
            get: () => duracao,
            set: (valor) => valor
        })

        Object.defineProperty(this, "reset", {
            get: () => reset
        })
    }

    function start () {
        this.inicio = new Date()
        
        if(!this.rodando) this.rodando = true 
        
         else console.log(new Error("Já está rodando"))

    }

    function stop () {
        this.fim = new Date ()

        if (this.rodando) this.rodando = false
            
         else console.log(new Error("Já está parado"))
       
    }

    function duracao () {
        console.log((this.fim.getTime() - this.inicio.getTime())/1000)
    }

    function reset () {
        this.rodando = false
        this.inicio = 0
        this.fim = 0
        this.duracao = 0
        this.reset = 0
    }


       
   

    let sw = new Stopwatch()



    // sw.start()
    // console.log(sw)
    // sw.stop()
    // console.log(sw)
    // sw.duracao

