let tarefas = document.getElementById("inserir-tarefa")
let lista = document.querySelector("div.lista")
let marcado = false
function Adicionar(){
    if(tarefas.value !='' ){
        let tarefa = document.createElement("p")
        lista.appendChild(tarefa,)
        tarefa.innerHTML = '- '+ tarefas.value
        tarefas.value=''
       
        tarefa.addEventListener('click', function(){
            if(marcado ==false){
                tarefa.style.textDecoration= 'line-through'
                marcado = true
            }else{
                tarefa.style.textDecoration= 'none'
                marcado = false
            }
        })
        tarefa.addEventListener('dblclick', function(){
            lista.removeChild(tarefa)
        })
    
    }
    else{
        alert('adicione algo na lista ')
    }
    
}
 
