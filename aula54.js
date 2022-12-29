const caixa = document.querySelector("#caixa")

let mapa = new Map()
mapa.set("curso","python")
mapa.set(2, 'css')
mapa.set(3, 'djando')
mapa.set(4, 'flask')

mapa.delete(2 )

let pes = 5
let res = ""
if(mapa.has(pes)){
  res = "A chave existe no array: " + mapa.get(pes)
}else{
res= 'A chave Não existe no array'
} 


res += '<br/> O tamanho da coleção é de : ' + mapa.size
caixa.innerHTML = res

mapa.forEach((el)=>{
  console.log(el)
})