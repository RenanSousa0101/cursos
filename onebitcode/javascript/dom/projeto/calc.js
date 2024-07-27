//pegando a tag main
const main = document.querySelector('main')
//pegando a classe css root
const root = document.querySelector(':root')
//pegando o input 
const input = document.getElementById('input')
//pegando o input que mostra o resultado
const resultInput = document.getElementById('result')
//caracteres que são permitidos no input
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
//Função para pegar os valores dos botões clicados
document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})
//Função para limpar o input
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus() //foca no input depois de limpo
})
//Quando o = for clicado, vai ativar a função de calcular
document.getElementById('equal').addEventListener('click', calculate)
//keydown, quando uma tecla for apertada
// ev, evento padão da função
input.addEventListener('keydown', function (ev){
    ev.preventDefault() // para que não seja armazenado o valor da tecla no input
    if (allowedKeys.includes(ev.key)){ //ev.key, se a tecla precionada estiver  na lista de teclas válidas
        input.value += ev.key //Ele armazena o valor da tecla no input
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1) // remove o ultimo caractere
    }
    if(ev.key === 'Enter') {
        calculate()
    }
})

function calculate(){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    //cuidado.
    //a função eval é perigosa, Ela executa código javascript
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText ='Copied!'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    } else{
        button.innerText === 'Copy'
        button.classList.remove('success')
    }
})

//Trocar cor do background
document.getElementById('themeSwitcher').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})