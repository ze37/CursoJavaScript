class Pessoa{
  constructor(nome,idade){
    this.nome = nome
    this.idade = idade
  }
}

let p1 =new Pessoa("jose",39)
let p2 =new Pessoa("ana",23)
let p3 = new Pessoa("luana",19)
console.log(p1.nome)
console.log(p2.nome)
console.log(`a pessoa ${p3.nome} tem ${p3.idade} de idades`)