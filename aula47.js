const p_array = document.querySelector("#array")

const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")

const resultado = document.querySelector("#resultado")

const elementos_array = ["python","lua","css","django"]
p_array.innerHTML = elementos_array

btnPesquisar.addEventListener("click",(evt)=>{
  const retor = elementos_array.find((ele,ind)=>{
    resultado.innerHTML = "Valr não encontrado !"
    if(ele.toUpperCase() == txt_pesquisar.value.toUpperCase()){
      resultado.innerHTML = `O valor encontrado : ${ele} na posição ${ind}`
      return ele
    }
  })
  console.log(retor)
})