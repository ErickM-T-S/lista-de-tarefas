let tarefas = document.getElementById("inserir-tarefa")
let lista = document.getElementsByClassName("lista")
function Adicionar() {
    let tarefa = tarefas.value
    if(lista.length <= 0 ){
        alert('adicione algo na lista ')
    }
    else{
        lista.innerHTML = `${tarefa}`
    }

}