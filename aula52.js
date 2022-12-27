const caixa = document.querySelector("#caixa")
let cursos = ["HTML","JS","CSS","PYTHON"]

cursos.unshift("python")
cursos.shift("python")
cursos.map((el)=>{
  let p =document.createElement("p")
  p.innerHTML = el
  caixa.appendChild(p)
})
