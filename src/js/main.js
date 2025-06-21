let inserirTarefa = document.getElementById("inserir-tarefa")
let erro = document.getElementById('erro')
let tarefas = []
let botaoPrincipal = document.getElementById('botao')
botaoPrincipal.onclick = () => adicionar()

recuperarTarefas()
function adicionar(){
    if(inserirTarefa.value.trim() !== '' ){ 

        tarefas.push({
            texto:inserirTarefa.value.trim(),
            concluida: false
        })
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
        let textoTarefa = document.createElement('p')
        textoTarefa.textContent = '- '+ tarefas[i].texto

        let checkbox = document.createElement('input')
        checkbox.type ='checkbox'
        checkbox.className ='check'
        checkbox.checked = tarefas[i].concluida

        if(checkbox.checked){
            textoTarefa.style.textDecoration ='line-through'

        }
        checkbox.onchange= () =>marcaConcluido(i, checkbox,textoTarefa)

        let botaoRemover = document.createElement('button')
        botaoRemover.className ='remover'
        botaoRemover.textContent ='remover'
        botaoRemover.onclick = () => remover(i)

        let botaoEditar = document.createElement('button')
        botaoEditar.className ='editar'
        botaoEditar.textContent ='editar'
        botaoEditar.onclick = () => editar(i)

        tarefa.appendChild(checkbox)
        tarefa.appendChild(textoTarefa)
        tarefa.appendChild(botaoRemover)
        tarefa.appendChild(botaoEditar)
        lista.appendChild(tarefa)

    }
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function marcaConcluido(i, checkbox,textoTarefa){
    tarefas[i].concluida = checkbox.checked
    if(checkbox.checked){
        textoTarefa.style.textDecoration ='line-through'

    }
    else{
        textoTarefa.style.textDecoration ='none'
    }
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function remover(i) {
    tarefas.splice(i, 1)
    renderizarTarefa()
}

function editar(i){
   
    botaoPrincipal.value = 'Alterar'
    inserirTarefa.value = tarefas[i].texto
    botaoPrincipal.onclick = () => alterar(i)
    
}

function alterar(i){
    tarefas[i].texto = inserirTarefa.value
    renderizarTarefa()
    botaoPrincipal.value = 'Adicionar Tarefa'
    inserirTarefa.value=''
    botaoPrincipal.onclick = () => adicionar()
}

function recuperarTarefas(){
    tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    renderizarTarefa()
}