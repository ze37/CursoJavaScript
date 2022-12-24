const p_array = document.querySelector('#array')

const btnVerificar = document.querySelector('#btnVerificar')

const resultado = document.querySelector('#resultado')

const elementos_array = [20,22,18,43,24,60]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener("click",(evt)=>{
  
  const retorno = elementos_array.every((e,ind)=>{
    if(e <18){
      
    resultado.innerHTML = `Array não conforme na posição ${ind}`
  }
    
    return e >= 18
  })
  if(retorno){
    resultado.innerHTML = "OK"
  }
  console.log(retorno)
})
