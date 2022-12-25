const p_array = document.querySelector('#array')

const btnVerificar = document.querySelector('#btnVerificar')

const resultado = document.querySelector('#resultado')

const elementos_array = [12,14,15,16,17,18]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener("click",(evt)=>{
  
  const retorno = elementos_array.some((e,ind)=>{
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
