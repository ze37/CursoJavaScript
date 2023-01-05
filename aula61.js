const Pessoa = {
  nome,
  idade,
  getNome:function(){
    return this.nome
  },
  getIdade:function(){
    return this.idade
  },
  setNome:function(nome){
    this.nome = nome
  },
  setIdade:function(idade){
    this.idade = idade
  }
}