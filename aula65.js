const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_blindagem = document.querySelector('#f_blindagem')
const f_municao = document.querySelector('#f_municao')
const carros = document.querySelector('#carros')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')
const btn_addCarro = document.querySelector('#btn_addCarro')


let a_carros = []
const removerCarro = (quem)=>{
  a_carros = a_carros.filter((el)=>{
    return el.nome != quem
  })
}

f_tipoMilitar.addEventListener('click',(evt)=>{
  f_nome.value = ""
  f_portas.value = 0
  f_blindagem.value = 0
  f_municao.value = 0
  f_blindagem.removeAttribute('disabled')
  f_municao.removeAttribute('disabled')

})
f_tipoNormal.addEventListener('click', (evt) => {
  f_nome.value = ''
  f_portas.value = 0
  f_blindagem.value=0
  f_municao.value = 0
  f_blindagem.setAttribute('disabled','disabled')
  f_municao.setAttribute('disabled','disabled')
    
})

const gerenciarExCarros = ()=>{
  carros.innerHTML = ''
  a_carros.forEach((c)=>{

    const div = document.createElement('div')
    const btn = document.createElement('button')
    btn.innerHTML += 'remover'
    btn.addEventListener('click',(evt)=>{
      const Quemremover = evt.target.parentNode.dataset.nome
      removerCarro(Quemremover)
      gerenciarExCarros()
      
    })
    div.setAttribute('class','carro')
    div.setAttribute('data-nome', c.nome)
    div.innerHTML = `Nome_Carro: ${c.nome}<br/>`
    div.innerHTML += `Quantidade_Portas :${c.portas}<br/>`
    div.innerHTML += `Cor :${c.cor}<br/>`
    div.innerHTML += `Blindagem :${c.blindagem}<br/>`
    div.innerHTML += `Muniçao :${c.municao}<br/>`
    div.appendChild(btn)
    carros.appendChild(div)
    
  })
}
btn_addCarro.addEventListener('click',()=>{
  if(f_tipoNormal.checked){
    const c = new Carro(f_nome.value, f_portas.value)
    a_carros.push(c)
  }else{
    const c = new Militar(f_nome.value, f_portas.value,f_blindagem.value,f_municao.value)
    a_carros.push(c)
  }
  gerenciarExCarros()
})


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
  constructor(nome,portas,blindagem,municao){
    super(nome, portas)
    this.blindagem = blindagem
    this.municao = municao
    this.setCor("Amarelo")
  }
  atirar=function(){
    if(this.municao > 0){
      this.municao --
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
console.log(`Munição : ${c2.municao}`)
console.log(`cor : ${c2.cor}`)
console.log(`Ligado : ${c2.ligado ? 'Sim' : 'Não'}`)
console.log('---------------')


