const fs = require('node:fs');
const path = require("node:path");

let playLists = [];

//memória
function storesData (){
    fs.writeFile('dataBase/data.json',JSON.stringify(playLists), "utf-8", (error) => {
})
}

function readData () {
    fs.readFile('dataBase/data.json', "utf-8", (error, data) => {
        playLists = JSON.parse(data);
    })
}

readData();

const playlistModel = {

    //Mostra todas as Playlists
    getAllPlaylists(){
        return playLists;
    },
    //Mostra apenas os dados de uma única PlayList
    getPlaylistById(id){
        const findPlayList =  playLists.find(playList => playList.id === id);
        return findPlayList;
    },
    //Separa String de tags em um array
    splitTags(tags){
        return tags.replace(",", " ").replace(", ", " ").split(" ");
    },
    //Retira vazios do array
    validationArray(array){
        return  array.filter(item => item !== "");
    },
    //cria uma nova Playlist
    createPlaylist(namePlaylist, tagsPlaylist){
        const playList = {
            id: Math.floor(Math.random() * 999999),
            namePlaylist: namePlaylist,
            tags: [],
            musicList: []
        }

        playList.tags = this.splitTags(tagsPlaylist);
        playList.tags = this.validationArray(playList.tags);

        this.savePlaylist(playList);
        return playList;
    },

    //Salva a Playlist no array
    savePlaylist(playList){
        playLists.push(playList);
        storesData ()
        return playList;
    },

    // Atualizar os dados de uma Playlist
    playlistUpdate(playListID, newDataPlaylist){
        const playList =  this.getPlaylistById(playListID);
        if (playList) {
            if (newDataPlaylist.namePlaylist){
                playList.namePlaylist = newDataPlaylist.namePlaylist;
            }
            if (newDataPlaylist.tags){
                playList.tags = this.splitTags(newDataPlaylist.tags);
                playList.tags = this.validationArray(playList.tags);
            }
            storesData ()
            return playList;
        } else {
            return {message: "A playlist não foi encontrada!"};
        }
    },

    // Deletar uma Playlist
    deletePlaylist(playListID){
        const playList =  this.getPlaylistById(playListID);
        if (playList) {
            playLists = playLists.filter(playList => playList.id !== playListID);
            storesData ()
            return playLists;
        } else {
            return {message: "A playlist não foi encontrada!"};
        }
    },

    //cria um objeto música 
    createMusic(musicTitle, artist, album, year, url, playListID){
        const music = {
                id: Math.floor(Math.random() * 999999),
                title: musicTitle,
                artist: artist || 'Desconhecido',
                album: album || 'Não informado!',
                year: year || 'Não informado!',
                url: url
        }

        this.addMusicInPlaylist(Number(playListID), music);
    },

    //adiciona a música a Playlist
    addMusicInPlaylist(playListID, music){
        const playList =  this.getPlaylistById(playListID);

        // Verifica se a playlist foi encontrada
        if (!playList) {
            throw new Error(`Playlist com ID ${playListID} não encontrada.`);
        }
        playList.musicList.push(music);
        storesData ()
    },

    // Deletar uma música de uma Playlist
    deleteMusic(playListId, musicId) {
        const findPlaylist =  this.getPlaylistById(playListId);
        if (findPlaylist) {
            findPlaylist.musicList = findPlaylist.musicList.filter(music => music.id !== musicId);
            storesData ()
            return findPlaylist;
        } else {
            return {message: "A playlist não foi encontrada!"};
        }
    }
}



module.exports = playlistModel;