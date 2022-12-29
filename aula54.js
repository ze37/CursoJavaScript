const caixa = document.querySelector("#caixa")


let  musicas = new Set(["Eu gosto","forro","samba"])

musicas.add("chora coração")
musicas.delete("forro")

console.log(musicas)

//musicas.forEach((el)=>{

  //caixa.innerHTML += el + '<br/>'
//})

for(let m of musicas){
  caixa.innerHTML += m + '<br/>'
}