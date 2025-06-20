let inserirTarefa = document.getElementById("inserir-tarefa")
let erro = document.getElementById('erro')
let tarefas = []
let botaoPrincipal = document.getElementById('botao')
botaoPrincipal.onclick = () => adicionar()

function adicionar(){
    if(inserirTarefa.value.trim() != '' ){ 

        tarefas.push(inserirTarefa.value)
        renderizarTarefa()
        erro.innerHTML =''
    
    }
    else{
        erro.innerHTML ='<strong> adicione algo na lista </strong>'
    }
    inserirTarefa.value=''
     
}
function renderizarTarefa(){
        let lista = document.querySelector("ul.lista")
        lista.innerHTML =''

        for(let i =0; i< tarefas.length; i++){

            let tarefa = document.createElement("li")
            tarefa.textContent = '- '+ tarefas[i]

            let botaoRemover = document.createElement('button')
            botaoRemover.className ='remover'
            botaoRemover.textContent ='remover'
            botaoRemover.onclick = () => remover(i)

            let botaoEditar = document.createElement('button')
            botaoEditar.className ='editar'
            botaoEditar.textContent ='editar'
            botaoEditar.onclick = () => editar(i)


            tarefa.appendChild(botaoRemover)
            tarefa.appendChild(botaoEditar)
            lista.appendChild(tarefa)

            localStorage.setItem('tarefas', JSON.stringify(tarefas))
         }
}

function remover(i) {
    tarefas.splice(i, 1)
    renderizarTarefa()
}

function editar(i){
   
    botaoPrincipal.value = 'Alterar'
    inserirTarefa.value = tarefas[i]
    botaoPrincipal.onclick = () => alterar(i)
    
}

function alterar(i){
    tarefas[i] = (inserirTarefa.value)
    renderizarTarefa()
    botaoPrincipal.value = 'Adicionar Tarefa'
    inserirTarefa.value=''
    botaoPrincipal.onclick = () => adicionar()
}

function recuperarTarefas(){
    tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    renderizarTarefa()
    console.log(localStorage.getItem('tarefas'))
}