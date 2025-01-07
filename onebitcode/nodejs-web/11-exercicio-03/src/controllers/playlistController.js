const playlistModel = require("../models/playlistModel");

const playlistController = {
    // GET /playlist
    //Mostrar todas as Playlists 
    index: (req, res) => {
        const playLists = playlistModel.getAllPlaylists();
        res.json(playLists);
    },
    // GET /playlist/:playlistId
    //Mostrar apenas os dados de uma única PlayList
    showPlayList: (req, res) => {
        const {playlistId} = req.params;
        const playList = playlistModel.getPlaylistById(Number(playlistId));
        res.json(playList);
    },
    // POST /playlist
    //Adicionar uma nova Playlist
    createPlaylist: (req, res) => {
        const {namePlaylist, tagsPlaylist} = req.body;
        const {confirm} = req.body;
        module.exports.validation(namePlaylist, 'A playlist precisa de um nome!', res);
        module.exports.validation(tagsPlaylist, 'Você precisa informar as tags da playlist!', res);
        
        if(namePlaylist && tagsPlaylist) {
            const newPlayList = playlistModel.createPlaylist(namePlaylist, tagsPlaylist);

            if (confirm) {
                const {title, artist, album, year, url} = req.body;
                const music = {title, artist, album, year, url};
                module.exports.validationMusic(music, newPlayList, res);
            } else {
                res.status(201);
                res.json(newPlayList);
            }
        }
    },

    validation (validation, nameError, res){
        if (!validation || typeof validation !== 'string') {
            return res.status(400).json({ message: `${nameError}!` });
        }
    },

    validationMusic(music, newPlayList, res){
        if (music.title && music.url){
            playlistModel.createMusic(music.title, music.artist, music.album, music.year, music.url, Number(newPlayList.id));
            res.status(201);
            res.json(newPlayList);
        } else {
            module.exports.validation(music.title, 'A música precisa de um nome!', res);
            module.exports.validation(music.url, 'Link da música não informado!', res);
        }
    },
    // POST /playlist/:playlistId/musicList
    //Adicionar uma nova música a uma Playlist
    addMusicInList: (req, res) => {
        const {playlistId} = req.params;
        const playList = playlistModel.getPlaylistById(Number(playlistId));
        const {title, artist, album, year, url} = req.body;
        const music = {title, artist, album, year, url};
        
        module.exports.validationMusic(music, playList, res);
    },
    // PUT /playlist/:playlistId
    // Atualizar os dados de uma Playlist 
    updatePlaylist: (req, res) => {
        const {playlistId} = req.params;
        const {namePlaylist, tags} = req.body
        const newDataPlaylist = {namePlaylist, tags};

        if(namePlaylist || tags) {
            const update = playlistModel.playlistUpdate(Number(playlistId), newDataPlaylist);
            res.status(201);
            res.json(update);
        } else {
            module.exports.validation(undefined, 'É necessário informar pelo menos um campo!', res);
        }
    },
    // DELETE /playlist/:playlistId
    // Deletar uma Playlist
    deletePlaylist: (req, res) => {
        const {playlistId} = req.params;
        const deleteList = playlistModel.deletePlaylist(Number(playlistId));
        res.json(deleteList);
    },

    // DELETE /playlist/:playlistId/musicList/:musicId
    // Deletar uma música de uma Playlist
    deleteMusic: (req, res) => {
        const {playlistId, musicId} = req.params;
        const deleteMusic = playlistModel.deleteMusic(Number(playlistId), Number(musicId));
        res.json(deleteMusic);
    }

}

module.exports = playlistController;