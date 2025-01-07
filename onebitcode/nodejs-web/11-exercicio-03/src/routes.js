const express = require('express');
const playlistController = require('../src/controllers/playlistController');

const router = express.Router();

router.get('/playlist', playlistController.index);
router.get('/playlist/:playlistId', playlistController.showPlayList);

router.post('/playlist', playlistController.createPlaylist);
router.post('/playlist/:playlistId/musicList', playlistController.addMusicInList);

router.put('/playlist/:playlistId', playlistController.updatePlaylist);

router.delete('/playlist/:playlistId', playlistController.deletePlaylist);
router.delete('/playlist/:playlistId/musicList/:musicId', playlistController.deleteMusic);

module.exports = router;