class Pessoa{
    constructor(pnome, pidade) {
        this.nome = pnome
        this.idade = pidade
    }
    getNome() {
        return this.nome
    }
    getidade() {
        return this.idade
    }
    setNome(nome) {
        this.nome = nome
    }
    setidade(idade) {
        this.idade = idade
    }

    info() {
        console.log(`Ǹome : ${this.nome}`)
        console.log(`A sua idade : ${this.idade}`)
        
    }
}

let pessoas = []
const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const AddPessoa = ()=>{
  res.innerHTML = ""
  pessoas.map((p)=>{
    const div =  document.createElement('div')
    div.setAttribute('class','pessoa')
    div.innerHTML = `Nome : ${p.getNome()}<br/>Idade: ${p.getidade()}`
    res.appendChild(div)
  })
}

btn_add.addEventListener("click",(evt)=>{
  const nome = document.querySelector('#f_nome')
  const idade = document.querySelector('#f_idade')
  const p = new Pessoa(nome.value, idade.value)
  pessoas.push(p)
  nome.value = ''
  idade.value = ''
  nome.focus()
  AddPessoa()
  //console.log(pessoas)
})