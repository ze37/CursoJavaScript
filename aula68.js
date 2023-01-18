class Carro{
  constructor(tipo,estagioTurbo){
    this.turbo = new Turbo(estagioTurbo)
    if(tipo == 1){
      this.velMaximo = 120
      this.nome = "normal"
    }else if(tipo == 2){
      this.velMaximo = 150
      this.nome = 'esportivo'
    }else if(tipo == 3){
      this.velMaximo = 250
      this.nome = 'SuperEsportivo'
   }
   this.velMaximo += this.turbo.potencia
  }
  info(){
    console.log(`O nome : ${this.nome}`)
    console.log(`O velocidade : ${this.velMaximo}`)
    console.log(`O Turbo : ${this.turbo}`)
    console.log('------------------')
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
    console.log(`O Turbo : ${this.turbo}`)
    console.log('------------------')
  }
}

const c1 = new Carro(1,0)
const c2 = new Carro(1, 1)
const c3 = new carroEspecial(3)

c1.info()
c2.info()
c3.info()