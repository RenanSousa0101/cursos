function register(ev) {
    console.log(ev)
    //currentTarget pega o alvo do evento, nesse caso o button. E o parentNode vai pegar o nó pai desse botão, que no caso é a section
    // vai pegar todos os dados preenchidos nos campos dos inputs.
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value
  
    if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
    } else {
      alert("As senhas não conferem")
    }
  }
  
  function removeEvent() {
    //com isso remove um evento que seja do tipom click, e que tenha a função register
    // depois disso o botao não tera mais o evento de click
    // obs.: o evento mouseover não será removido 
    button.removeEventListener("click", register)
    alert("Event Removed")
  }

  //chamando os eventos diretamenta da página js
  // armazenando o id do button na página html
  const button = document.getElementById("register-button")
  //adicionando um evento de click ao button no html com o id "register-button", é como um onclick
  //usando a função register como paramentro, quando clicado vai pegar os valores do input
  button.addEventListener("click", register)
  
  //mouseover ativa um gatilho se o ponteiro do mouse passar por cima do evento
  button.addEventListener("mouseover", function (ev) {
    console.log(ev)
  })
  //é possível adicionar mais de um evento ao mesmo tempo a um elemento.
  // ex.: o botton tem dois eventos, o de click e o de mouseover.