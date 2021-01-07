const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const playlistController = require('../controllers/playlist');
const trackController = require('../controllers/tracks');

router.get('/:id', asyncHandler(playlistController.findOne));
router.post('/', asyncHandler(playlistController.create));
router.post('/:id/tracks', asyncHandler(trackController.create));
router.get('/:id/tracks', asyncHandler(playlistController.findTracks));
router.delete('/:id', asyncHandler(playlistController.deletePlaylist));
router.put('/:id', asyncHandler(playlistController.updatePlaylist));
router.delete('/:id/tracks/:track_id', asyncHandler(trackController.delete));
router.put('/:id/tracks/:track_id', asyncHandler(trackController.update));

module.exports = router;
