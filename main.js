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
        excluir.addEventListener('onmouseenter', function(){
            excluir.style.
        })
        excluir.addEventListener('click', function(){
          tarefa.innerHTML= ''

        })
    }
    else{
        alert('adicione algo na lista ')
    }
}
