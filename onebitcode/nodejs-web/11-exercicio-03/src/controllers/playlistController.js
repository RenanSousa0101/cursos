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
        const playList = playlistModel.getPlaylistById(playlistId);
        res.json(playList);
    },
    // POST /playlist
    //Adicionar uma nova Playlist
    createPlaylist: (req, res) => {
        const {namePlaylist, tagsPlaylist} = req.body;
        const {title, artist, album, year, url} = req.body;
        const music = {title, artist, album, year, url};
        module.exports.validation(namePlaylist, 'name playlist', res);
        module.exports.validation(tagsPlaylist, 'tags', res);

        const newPlayList = playlistModel.createPlaylist(namePlaylist, tagsPlaylist, music);
        res.status(201);
        res.json(newPlayList);
    },

    validation (validation, nameError, res){
        if (!validation || typeof validation !== 'string') {
            return res.status(400).json({ message: `Invalid ${nameError}!` });
        }
    }
    // POST /playlist/:playlistId/musicList
    //Adicionar uma nova música a uma Playlist

    // PUT /playlist/:playlistId
    // Atualizar os dados de uma Playlist 

    // DELETE /playlist/:playlistId
    // Deletar uma Playlist

    // DELETE /playlist/:playlistId/musicList/:musicId
    // Deletar uma música de uma Playlist
}

module.exports = playlistController;