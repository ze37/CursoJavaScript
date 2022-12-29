const caixa = document.querySelector("#caixa")

let ul = `<ul>`
const carros = ["gol","palio","fiat","toyota"]
carros.map((el)=>{
  ul += `<li>${el}</li>`
})
ul+  `</ul>`


caixa.innerHTML = ul 