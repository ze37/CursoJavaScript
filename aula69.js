class Carropadrao{
  constructor(){
    if(this.constructor === Carropadrao){
      throw new TypeError('Esta class não pode ser instanciada !')
    }
    if(this.ligar === undefined){
      throw new TypeError('É obrigatorio implementar o metodo ligar')
    }
      if (this.desligar === undefined) {
          throw new TypeError('É obrigatorio implementar o metodo desligar')
      }
    this.portas = 4
    this.rodas = 4
    this.ligado = false
  }

}

class Carro extends Carropadrao {
    constructor(tipo, estagioTurbo) {
        super()
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMaximo = 120
            this.nome = 'normal'
        } else if (tipo == 2) {
            this.velMaximo = 150
            this.nome = 'esportivo'
        } else if (tipo == 3) {
            this.velMaximo = 250
            this.nome = 'SuperEsportivo'
        }
        this.velMaximo += this.turbo.potencia
    }
    info() {
        console.log(`O nome : ${this.nome}`)
        console.log(`O velocidade : ${this.velMaximo}`)
        console.log(`O turbo : ${this.turbo}`)
        console.log((this.portas = 4))
        console.log((this.rodas = 4))
        console.log((this.desligado = false))
        console.log('------------------')
    }
    ligar() {
      this.ligar= true
    }
    desligar() {
      this.desligar = false
    }
}

class Turbo{
  constructor(e){
    if (e == 0) {
        this.potencia = 0
    } else if (e == 1) {
        this.potencia = 50
    } else if (e == 2) {
        this.potencia = 150
    } else if (e == 3) {
        this.potencia = 250
    }
  }
}
class carroEspecial extends Carro{
  constructor(estagioTurbo){
    super(4,estagioTurbo)
    this.velMaximo = 300 + this.turbo.potencia
    this.nome = 'Carro especial'
  }
  info(){
    console.log(`O nome : ${this.nome}`)
    console.log(`O velocidade : ${this.velMaximo}`)
    console.log(`O turbo : ${this.turbo}`)
    console.log('------------------')
  }
}

const c1 = new Carro(1,0)
const c2 = new Carro(1, 1)
const c3 = new carroEspecial(3)
//const c4 = new Carropadrao()

c1.info()
c2.info()
c3.info()