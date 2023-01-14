function Animal(name,age){
  this.name = name
  this.age = age
}  

// Adição de uma propriedade 
Animal.prototype.speak = function(){
  console.log(`O animal ${this.name} fala e tem ${this.age}`)
}

// Criação de um novo objeto animal chamdo "dog"

const dog =new Animal("dog",5)
const vaca = new Animal("vaca",10)
dog.speak()
vaca.speak()