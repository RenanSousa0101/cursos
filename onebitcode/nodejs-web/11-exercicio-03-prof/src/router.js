const express = require('express');
const playlistsController = require('./controllers/playlist-controller');


const router = express.Router();

router.get('/playlists', playlistsController.index);
router.get('/playlists/:id', playlistsController.show);
router.post('/playlists', playlistsController.save);
router.put('/playlist/:id', playlistsController.update);
router.delete('/playlists/:id', playlistsController.delete);

router.post('/playlists/:id/musics', playlistsController.addMusic);
router.delete('/playlists/:playlistId/musics/:musicId', playlistsController.removeMusic);

module.exports = router

