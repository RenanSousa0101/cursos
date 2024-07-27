
// getElementById: é usado para acessar um elemento HTML específico 
// em uma página da web com base no valor do atributo id desse elemento.
// getElementById: é particularmente útil quando você deseja interagir com elementos específicos 
// em uma página da web e modificar ou acessar suas propriedades usando JavaScript.

// getElementsByTagName: é usado para obter uma lista de elementos que correspondem a um determinado nome de tag HTML.
// getElementsByTagName: é útil quando você deseja realizar uma ação em todos os elementos com uma determinada tag na página ou quando deseja 
// iterar por uma coleção de elementos para realizar operações em cada um deles.

// getElementsByClassName: é usado para obter uma lista de elementos que possuem uma determinada classe CSS.
// getElementsByClassName: é útil quando você deseja interagir com vários elementos que compartilham a mesma classe CSS, 
// permitindo que você aplique mudanças ou comportamentos a todos eles de uma vez.

// querySelectorAll: ele permite selecionar elementos em uma página da web usando seletores CSS, de maneira muito flexível e poderosa.
// querySelectorAll: é especialmente útil quando você precisa selecionar elementos de maneira mais avançada ou quando deseja selecionar 
// um conjunto específico de elementos para manipulação ou interação usando JavaScript.

// getElementsByName: ele permite selecionar uma lista de elementos que têm um atributo name específico.
// getElementsByName: é frequentemente usado em elementos de formulário, onde você deseja agrupar elementos de entrada relacionados 
// sob um mesmo nome para processamento. Embora seja menos comum em outros contextos, ele ainda é útil para lidar 
// com situações específicas em que elementos de formulário precisam ser selecionados e manipulados como um grupo.

// querySelector: ele permite selecionar um único elemento na página da web usando um seletor CSS. Ao contrário do 
// querySelectorAll, que retorna uma lista de todos os elementos correspondentes, o querySelector retorna apenas 
// o primeiro elemento que corresponde ao seletor especificado.
// querySelector: é uma maneira eficaz de selecionar um elemento único em uma página usando seletores CSS, 
// o que pode ser útil para manipulações e interações específicas.

function show() {
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}