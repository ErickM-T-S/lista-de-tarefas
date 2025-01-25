let tarefas = document.getElementById("inserir-tarefa")
let lista = document.querySelector("div.lista")

function Adicionar(){
    if(tarefas.value !='' ){
        let tarefa = document.createElement("p")
        let excluir = document.createElement("p")
        excluir.innerHTML = ' &#x2715;'
        lista.appendChild(tarefa, excluir)
        tarefa.innerHTML = '-'+ tarefas.value + excluir.innerHTML
        tarefas.value=''
        excluir.classList
    
    }
    else{
        alert('adicione algo na lista ')
    }
}
