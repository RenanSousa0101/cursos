function register(element) {
  //children filhos do nó pai (nesse caso os filhos de section)
  //outra forma de pegar os valores dos inputs
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value
  
    if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
    } else {
      alert("As senhas não conferem")
    }
  }