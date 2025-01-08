document.getElementById('enviarPlaylist').addEventListener('submit', function (event) {
    event.preventDefault();  // Evita o envio do formulário e a recarga da página
    alert('hello')
    const tagsPlaylist = document.getElementById('tagsPlaylist').value;
    const namePlaylist = document.getElementById('namePlaylist').value;

    const playlistData = { namePlaylist, tagsPlaylist };

    fetch('http://localhost:3000/playlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(playlistData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Aqui você pode manipular a resposta da criação
    })
    .catch(error => console.error('Error:', error));
});