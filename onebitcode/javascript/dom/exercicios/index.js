function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type ='text', placeholder =''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn') // pegando o botão de adicionar tecnologias
const form = document.getElementById('devForm') // capturando o formulário
const developers = [] // array para salvar os desenvolvedores
let inputRows = 0 // número de linhas de tecnologias adicionadas

addTechBtn.addEventListener('click', function (ev){

    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows // salvando o número de linhas atual
    inputRows++ // aumentando o número de linhas
    newRow.id = 'inputRow-' + rowIndex //nome do id + o número da linha
    newRow.className = 'inputRow' //adicionando o nome da classe

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex) // Nome da tecnologia
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName') // input da tecnologia

    //Agora vamos adicionar o input de radio

    const expLabel = createLabel('Experiência: ') 
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio') //eles tem que ter o mesmo nome
    const expLabel1 = createLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio') //eles tem que ter o mesmo nome
    const expLabel2 = createLabel('3-4 anos', id2)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio') //eles tem que ter o mesmo nome
    const expLabel3 = createLabel('5+ anos', id3)

    const removeRowBtn = document.createElement('button') // criando o botão para remover tecnologia
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function (){
        stackInputs.removeChild(newRow)
    }) //adicionando um evento de click que aciona a função de remover linha


    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    ) // adicionando todos dentro do li

    stackInputs.appendChild(newRow) // adicionando o li dentro do ul
})

//Agora vamos armazenar os valores do formulário

form.addEventListener('submit', function (ev){
    ev.preventDefault() //evita que o formulário seja atualizado quando apertar o botão cadastrar

    const fullNameInput = document.getElementById('fullname') //pegando o id do desenvolvedor
    const inputRows = document.querySelectorAll('.inputRow') //pegando todas as linhas que tenham a classe inputRow
    //desse forma temos uma nodeList

    let technologies = [] //array para salvar as tecnologias
    inputRows.forEach(function (row){  
        //Estamos selecionando o id que vai ser a linha, e então pegamos o input[name="techName"] que no caso é o nome da tecnologia
        const techName = document.querySelector('#' + row.id + ' input[name = "techName"]').value
        const techExp = document.querySelector('#' + row.id +  ' input[type = "radio"]:checked').value
        technologies.push({name: techName, exp: techExp}) //salvando como objeto o nome e o tempo de experiência dentro do array

    })

    const newDev = {fullname: fullNameInput.value, technologies: technologies} // criando um objeto com o nome do desenvolvedor e o array tecnologias
    developers.push(newDev) // salvando o objeto newDev dentro do array desenvolvedores
    alert('Dev Cadastrado com sucesso!')

    fullNameInput.value = '' // linpando o campo do nome do desenvolvedor

    fullNameInput.value = ''
    inputRows.forEach(function (row) { // limpando o campo de adicionar nova tecnologias
    row.remove()
    })

    console.log(developers) // mostrando no console o array desenvolvedores

})
