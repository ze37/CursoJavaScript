
const pessoa = {
  nome:'zeneto',
  idade:39,
  cuso:'javascript',
  alas:{
    aula1:'intrdução',
    aula2: 'loops',
    aula3: 'for of'
  }

}
const string_pessoa = {"nome":"zeneto","idade":39,"cuso":"javascript","alas":{"aula1":"intrdução","aula2":"loops","aula3":"for of"}}
const string_json = JSON.stringify(pessoa) // Convert objeto em string json
const o_string_json = JSON.parse(string_json) // Convert string json em objeto

console.log(pessoa)
console.log(string_json)
console.log(o_string_json)