class Carro{
  constructor(pnome,ptipo){
    this.pnome = pnome
    this.ptipo = ptipo
    if(ptipo == 1){
      this.tipo = "Esportivo"
      this.velmax = 300
    }else if(this.ptipo == 2){
      this.tipo = "Utilitario"
      this.velmax = 120
    }else if(this.ptipo == 3){
      this.tipo = "Carro Popular"
      this.velmax = 250
    }else{
      this.tipo = "Militar"
    }
  }
  getNome(){
    return this.pnome
  }
  gettipo(){
    return this.tipo
  }
  getvelmax(){
    return this.velmax
  }
  getinfo(){
    return [this.pnome,this.tipo,this.velmax]
  }
  setNome(pnome){
    this.pnome = pnome
  }
  setTipo(tipo){
    this.tipo = tipo
  }
  setVelmax(velmax){
    this.velmax = velmax
  }
    info(){
      console.log(`Ǹome : ${this.pnome}`)
      console.log(`O tipo : ${this.tipo}`)
      console.log(`V.Maxima : ${this.velmax}`)
    }
   
  }


let c1 =new Carro("Fiat", 1)
let c2 =new Carro("Toyota", 2)
let c3 = new Carro("Volvo", 4)
let c4 = new Carro('jegue', 3)

c1.setVelmax(500)
c1.setNome("fuusca")
c1.setTipo("Esportivo")
c1.info()
//console.log(c1.getinfo()[0])