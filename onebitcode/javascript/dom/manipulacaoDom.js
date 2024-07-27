function addContact (){
    //selecionando a section no html
    const contactSection = document.getElementById('contacts-list')
    //criando um título no html
    const h3 = document.createElement('h3')
    h3.innerText = "Contato"
    //criando uma lista não ordenada no html
    const ul = document.createElement('ul')
    //criando uma li para guardar o nome do contato
    const nameList = document.createElement('li')
    nameList.innerText = "Nome: "
    //criando um input
    const nameInput = document.createElement('input')
    //definindo o input como do tipo texto
    nameInput.type ='text'
    //definindo o nome do input
    nameInput.name ='fullname'
    //Salvando(colocando) o nameInput dentro do nameList
    nameList.appendChild(nameInput)
    //colocando o nameList dentro do ul
    ul.appendChild(nameList)

    //criando diretamente dentro do ul um br(quebra de linha)
    ul.appendChild(document.createElement('br'))

    //Criando o compo de telefone
    //crianndo uma li para guardar o telefone
    const phoneList = document.createElement('li')
    phoneList.innerText = "Telefone: "
    //criando um input para receber o telefone
    const phoneInput = document.createElement('input')
    //definindo o input como do tipo texto
    phoneInput.type = 'text'
    //definindo o name do input
    phoneInput.name = 'phone'
    //Salvando(colocando) o phoneInput dentro do phoneList
    phoneList.appendChild(phoneInput)
    //colocando o phoneList dentro do ul
    ul.appendChild(phoneList)

    //criando diretamente dentro do ul um br(quebra de linha)
    ul.appendChild(document.createElement('br'))

    //criando o campo do endereço
    //criando uma li para guardar o endereço
    const addressList = document.createElement('li')
    //Usando o innerHTML  para criar a label
    addressList.innerHTML ='<label for="address">Endereço: </label>'
    //criando um input para receber o endereço
    const addressInput = document.createElement('input')
    //definindo o input como do tipo texto
    addressInput.type = 'text'
    //definindo o nome do input
    addressInput.name ='address'
    //definindo o id do input
    addressInput.id = 'address'
    //colocando o addressInput dentro do addressList
    addressList.appendChild(addressInput)
    //Colocando o addressList dentro do ul
    ul.appendChild(addressList)

    //criando diretamente dentro do ul um br(quebra de linha)
    ul.appendChild(document.createElement('br'))

    //colocando o h3 e o ul dentro do contactSection
    contactSection.append(h3, ul)
}

function removeContact() {
    //selecionando a section no html
    const contactSection = document.getElementById('contacts-list')
    // Selecionando todos os h3 da lista
    const titles = document.getElementsByTagName('h3')
    // Selecionando os ul da pagina
    const contacts = document.getElementsByTagName('ul')
    // Pegando o ultimo título para apagar
    contactSection.removeChild(titles[titles.length -1 ])
    // pegando o ultimo contato para remover
    contactSection.removeChild(contacts[contacts.length -1 ])

}