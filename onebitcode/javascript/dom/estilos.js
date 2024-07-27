function useLightTheme(){
    //Style serve para mexer diretamente nas propriedades do css
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
    //Ele faz um inline diretamente na tag
}

function useDarkTheme(){
    //Style serve para mexer diretamente nas propriedades do css
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
    //Ele faz um inline diretamente na tag
}

function switchTheme(){
    //classList permite que manipule a lista de classes desse elemento
    //toggle ele altenar entre as classes
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}


//passando o id do botão lightBtn, para que quando o botão for clicado chamar a função useLightTheme 
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)