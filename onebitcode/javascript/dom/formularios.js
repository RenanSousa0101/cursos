const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev){
    ev.preventDefault() // --> ele impede a página de atualizar, pois o submit atualiza a página depois de enviar as informações.
    //outra forma de pegar os valores do compo input.
    //ele está pegando o valor do campo input com o nome = name.
    const name = document.querySelector('input[name = "name"]').value
    const address = document.querySelector('input[name = "address"]').value

    //Guardando o valor de um Select
    //nesse caso ele devolve o value da opção selecionada
    const breadType = document.querySelector('select[name = "breadType"]').value

    //Guardando o valor de um Radio
    // elevai devolver a opção marcada
    const main = document.querySelector('input[name = "main"]').value


    //Guardando o texo da textarea
    const observations = document.querySelector('textarea[name = "observations"]').value
    //Guardando as opções marcadas na checkBox
    let salad = ''
    // checked pega os inputs marcados
    // o querySelectorAll devolve uma nodeList
    // item está com os valores que foram marcados
    document.querySelectorAll('input[name = "salad"]:checked').forEach(function (item){
        salad += ' - ' + item.value + '\n'
    })

    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        observations
      })

      alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salad +
        "Observações: " + observations
      )
})