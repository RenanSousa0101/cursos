function addInput() {
    // Pega a referência para a lista com o ID 'inputs'
    const ul = document.getElementById('inputs');

    // Cria um novo elemento de lista
    const newLi = document.createElement('li');
    // Define a classe do novo elemento como 'list-item'
    newLi.className = 'list-item';
    // Define o texto dentro do elemento de lista como 'Novo input: '
    newLi.innerText = 'Novo input: ';

    // Cria um novo elemento de entrada (input)
    const newInput = document.createElement('input');
    // Define o tipo do elemento de entrada como 'text'
    newInput.type = 'text';
    // Define o nome do elemento de entrada como 'input'
    newInput.name = 'input';

    // Adiciona o elemento de entrada (input) dentro do elemento de lista
    newLi.appendChild(newInput);
    // Adiciona o elemento de lista com o elemento de entrada à lista (ul)
    ul.appendChild(newLi);
}