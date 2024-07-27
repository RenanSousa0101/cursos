const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function (){
    //Utilizando um ternário, se o campo estiver vazio, ele escreve 'Olá, mundo!'. se ele não estiver vazio, ele limpa o campo.
    input.value = input.value === '' ? 'Olá, mundo!' : ''
    console.log(input.value) // tem um comportamento dinâmico, tempo real
    console.log(input.getAttribute('value')) // pega o valor que já está predefinido no html
})

document.getElementById('type').addEventListener('click', function (){
    input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function (){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function (){
    const data = input.dataset.something
    console.log("O valor do atributo data-something é: " + data)
})