class Carro{
  //Propriedades da classe
  constructor(nome,portas){
    this.nome=nome
    this.portas=portas
    this.ligado=false
    this.vel=0
    this.cor=undefined
  }
  //Criar metodos
  ligar=function(){
    this.ligado=true
  }
  desligar=function(){
    this.ligado=flase
  }
  setCor=function(cor){
    this.cor=cor
  }
}
class Militar extends Carro{
  constructor(nome,portas,blindagem,munição){
    super(nome, portas)
    this.blindagem = blindagem
    this.munição = munição
    this.setCor("Amarelo")
  }
  atirar=function(){
    if(this.munição > 0){
      this.munição --
    }

  }

}

const c1=new Carro("fusca",2)
c1.ligar()
c1.setCor("Verde")

const c2=new Militar("tanque",1,100,50)
c2.vel = 100



console.log(`Nome : ${c1.nome}`)
console.log(`Porta : ${c1.portas}`)
console.log(`Velocidade : ${c1.vel}`)
console.log(`cor : ${c1.cor}`)
console.log(`Ligado : ${(c1.ligado ?"Sim":"Não")}`)
console.log("---------------")

console.log(`Nome : ${c2.nome}`)
console.log(`Porta : ${c2.portas}`)
console.log(`Velocidade : ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição : ${c2.munição}`)
console.log(`cor : ${c2.cor}`)
console.log(`Ligado : ${c2.ligado ? 'Sim' : 'Não'}`)
console.log('---------------')


