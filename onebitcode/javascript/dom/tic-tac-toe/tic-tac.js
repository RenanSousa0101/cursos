let vezJogador = 1
let nome1
let nome2
let cont1 = 0
let cont2 = 0
let celulasPreenchidas = 0

const nomeJogador = document.getElementById('jogador1Nome')
const nomeJogador2 = document.getElementById('jogador2Nome')
const jogadorVez1 = document.getElementById('jogador1Vez')
const jogadorVez2 = document.getElementById('jogador2Vez')
const euVenci = document.getElementById('euVenci')
const contador = document.getElementById('contador')
const resetar = document.getElementById('resetar')
const limpei = document.getElementById('limpar')

const house1 = document.getElementById('house1')
const house2 = document.getElementById('house2')
const house3 = document.getElementById('house3')
const house4 = document.getElementById('house4')
const house5 = document.getElementById('house5')
const house6 = document.getElementById('house6')
const house7 = document.getElementById('house7')
const house8 = document.getElementById('house8')
const house9 = document.getElementById('house9')

let jogador1 = document.getElementById('jogador1')
let jogador2 = document.getElementById('jogador2')

contador.innerText = cont1 + " - " + cont2
jogadorVez1.innerHTML = 'X'

resetar.addEventListener('click', function(){
    cont1 = 0
    cont2 = 0
    contador.innerText = cont1 + " - " + cont2
    limpar()
})

limpei.addEventListener('click', function(){
    limpar()
})

jogador1.addEventListener('blur', function(){
    nome1 = jogador1.value
    nomeJogador.innerText = nome1
})

jogador2.addEventListener('blur', function(){
    nome2 = jogador2.value
    nomeJogador2.innerText = nome2
})

function adicionaEvento(nome){
    nome.addEventListener('click', function(){
        marcar(nome)
    })
}
adicionaEvento(house1), adicionaEvento(house2), adicionaEvento(house3)
adicionaEvento(house4), adicionaEvento(house5), adicionaEvento(house6)
adicionaEvento(house7), adicionaEvento(house8), adicionaEvento(house9)

const ticTac = [
    [house1,house2,house3],
    [house4,house5,house6],
    [house7,house8,house9]
]

function limpar(){
    celulasPreenchidas = 0
    euVenci.innerText = ''
    for(let i = 0; i < ticTac.length; i++){
        for (let j = 0; j < ticTac[i].length; j++) {
            ticTac[i][j].value = ''
            ticTac[i][j].innerText = ''
            ticTac[i][j].disabled = false
            ticTac[i][j].classList.remove('vencedor')
        }
    }
}

function atualizarPlacar(resu){
    if(resu === 1){
        euVenci.innerText = nome1 + ' venceu!'
        cont1 += 1
        contador.innerText = cont1 + " - " + cont2
    }else{
        euVenci.innerText = nome2 + ' venceu!'
        cont2 += 1
        contador.innerText = cont1 + " - " + cont2
    }
}

function vencedor(){
    celulasPreenchidas = 0
    for(let i = 0; i < ticTac.length; i++){
        for (let j = 0; j < ticTac[i].length; j++) {
            ticTac[i][j].disabled = true
        }
    }
}

function marcar(clicado){
    if(vezJogador === 1){
        clicado.value = 'X'
        clicado.innerHTML ='<h1 style=" text-shadow: -12px 10px 6px black;" class = "X">X<h1>'
        clicado.disabled = true
        vezJogador = 2
        celulasPreenchidas += 1
        jogadorVez2.innerText = 'O'
        jogadorVez1.innerText = ''
        

    } else{
        clicado.value = 'O'
        clicado.innerHTML ='<h1 style=" text-shadow: -12px 10px 6px black;" class = "O">O<h1>'
        clicado.disabled = true
        vezJogador = 1
        celulasPreenchidas += 1
        jogadorVez1.innerText = 'X'
        jogadorVez2.innerText = ''
    }

        
    for (let i = 0; i < ticTac.length; i++) {
        for (let j = 0; j < ticTac[i].length; j++) {
            if((ticTac[i][0].value === 'X' && ticTac[i][1].value === 'X'  && ticTac[i][2].value === 'X')){
            ticTac[i][0].classList.add('vencedor');
            ticTac[i][1].classList.add('vencedor');
            ticTac[i][2].classList.add('vencedor');
            vencedor()
            atualizarPlacar(1)
            break;
        }else if((ticTac[0][i].value === 'X' && ticTac[1][i].value === 'X' && ticTac[2][i].value === 'X')){
            ticTac[0][i].classList.add('vencedor');
            ticTac[1][i].classList.add('vencedor');
            ticTac[2][i].classList.add('vencedor');
            vencedor()
            atualizarPlacar(1)
            break;
        }else if((ticTac[i][0].value === 'O' && ticTac[i][1].value === 'O' && ticTac[i][2].value === 'O')){
            ticTac[i][0].classList.add('vencedor');
            ticTac[i][1].classList.add('vencedor');
            ticTac[i][2].classList.add('vencedor');
            vencedor()
            atualizarPlacar(2)
            break;

        }else if((ticTac[0][i].value === 'O' && ticTac[1][i].value === 'O' && ticTac[2][i].value === 'O')){
            ticTac[0][i].classList.add('vencedor');
            ticTac[1][i].classList.add('vencedor');
            ticTac[2][i].classList.add('vencedor');
            vencedor()
            atualizarPlacar(2)
            break;
        }
        }
    }

    if((house1.value === 'X' && house5.value === 'X' && house9.value == 'X')){
        house1.classList.add('vencedor')
        house5.classList.add('vencedor')
        house9.classList.add('vencedor')
        vencedor()
        atualizarPlacar(1)
       
    }else if((house3.value === 'X' && house5.value === 'X' && house7.value === 'X')){
        house3.classList.add('vencedor')
        house5.classList.add('vencedor')
        house7.classList.add('vencedor')
        vencedor()
        atualizarPlacar(1)
    }else if((house1.value === 'O' && house5.value === 'O' && house9.value == 'O')){
        house1.classList.add('vencedor')
        house5.classList.add('vencedor')
        house9.classList.add('vencedor')
        vencedor()
        atualizarPlacar(2)
    }else if((house3.value === 'O' && house5.value === 'O' && house7.value === 'O')){
        house3.classList.add('vencedor')
        house5.classList.add('vencedor')
        house7.classList.add('vencedor')
        vencedor()
        atualizarPlacar(2)
    }else if(celulasPreenchidas === 9){
        euVenci.innerText = 'Empate!'
    }
}
