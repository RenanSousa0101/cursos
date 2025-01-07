let playLists = [
    {   id: "1",
        namePlaylist: "Minhas músicas", 
        tags: ["#rock", "#pop", "#kpop"], 
        musicList: [
            {
                id: "1",
                title: "Burn The House Down",
                artist: "AJR",
                album: "The Click",
                year: "2017",
                url: "https://youtu.be/UnyLfqpyi94?si=5uu5A8Wh4-wD07el"
            },
            {
                id: "2",
                title: "Heat Waves",
                artist: "Glass Animals",
                album: "Dreamland",
                year: "2020",
                url: "https://youtu.be/mRD0-GxqHVo?si=pU-YCxgLdMnRbkvF"
            }
        ]
    },
    {   id: "2",
        namePlaylist: "Músicas de Amanda", 
        tags: ["#rock", "#pop", "#kpop", "#samba", "jpop"], 
        musicList: [
            {
                id: "1",
                title: "Rude",
                artist: "MAGIC!",
                album: "Don't Kill the Magic",
                year: "2014",
                url: "https://youtu.be/PIh2xe4jnpk?si=D1jRTVb-ymyCxQ7R"
            },
            {
                id: "2",
                title: "Adventure Of A Lifetime",
                artist: "Coldplay",
                album: "A Head Full of Dreams",
                year: "2015",
                url: "https://youtu.be/QtXby3twMmI?si=nLmryEDT8e4J6aXY"
            }
        ]
    }
]

const playlistModel = {
    //Mostra todas as Playlists
    getAllPlaylists(){
        return playLists;
    },
    //Mostra apenas os dados de uma única PlayList
    getPlaylistById(id){
        const findPlayList = playLists.find(playList => playList.id === id);
        return findPlayList;
    },
    //Separa String de tags em um array
    splitTags(tags){
        return tags.replace(",", " ").replace(", ", " ").split(" ");
    },
    //Retira vazios do array
    validationArray(array){
        return array.filter(item => item !== "");
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
        return playList;
    },

    // Atualizar os dados de uma Playlist
    playlistUpdate(playListID, newDataPlaylist){
        const playList = this.getPlaylistById(playListID);
        if (playList) {
            if (newDataPlaylist.namePlaylist){
                playList.namePlaylist = newDataPlaylist.namePlaylist;
            }
            if (newDataPlaylist.tags){
                playList.tags = this.splitTags(newDataPlaylist.tags);
                playList.tags = this.validationArray(playList.tags);
            }
            return playList;
        } else {
            return {message: "A playlist não foi encontrada!"};
        }
    },

    // Deletar uma Playlist
    deletePlaylist(playListID){
        const playList = this.getPlaylistById(playListID);
        if (playList) {
            playLists = playLists.filter(playList => playList.id !== playListID);
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

        this.addMusicInPlaylist(playListID, music);
    },

    //adiciona a música a Playlist
    addMusicInPlaylist(playListID, music){
        const playList = this.getPlaylistById(playListID);

        // Verifica se a playlist foi encontrada
        if (!playList) {
            throw new Error(`Playlist com ID ${playListID} não encontrada.`);
        }

        playList.musicList.push(music);
    },

    // Deletar uma música de uma Playlist
    deleteMusic(playListId, musicId) {
        const findPlaylist = this.getPlaylistById(playListId);
        if (findPlaylist) {
            findPlaylist.musicList = findPlaylist.musicList.filter(music => music.id !== musicId);
            return findPlaylist;
        } else {
            return {message: "A playlist não foi encontrada!"};
        }
    }
}



module.exports = playlistModel