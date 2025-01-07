const express = require('express');
const playlistController = require('../src/controllers/playlistController');

const router = express.Router();

router.get('/playlist', playlistController.index);
router.get('/playlist/:playlistId', playlistController.showPlayList);

router.post('/playlist', playlistController.createPlaylist);
router.post('/playlist/:playlistId/musicList', playlistController.addMusicInList);

module.exports = router;