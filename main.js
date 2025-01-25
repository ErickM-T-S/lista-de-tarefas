let tarefas = document.getElementById("inserir-tarefa")
let lista = document.querySelector("div.lista")
function Adicionar(){
    if(tarefas.value !='' ){
        var tarefa = document.createElement("p")
        lista.appendChild(tarefa)
        tarefa.innerHTML = '-'+ tarefas.value
    }
    else{
        alert('adicione algo na lista ')
    }

}