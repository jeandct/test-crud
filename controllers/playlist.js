const Playlist = require('../models/playlist');

module.exports.create = async (req, res) => {
  const playlist = await Playlist.createPlaylist(req.body);
  if (playlist) {
    return res.status(201).send(playlist);
  }
  return res.status(400).send('Error in creating playlist');
};

module.exports.findOne = async (req, res) => {
  const playlist = await Playlist.findOne(req.params.id);
  if (playlist) {
    return res.status(200).send(playlist);
  }
  return res.status(400).send('Error retrieving playlists in database');
};

module.exports.findTracks = async (req, res) => {
  const playlist = await Playlist.findTracks(req.params.id);
  if (playlist) {
    return res.status(200).send(playlist);
  }
  return res.status(400).send('Error retrieving playlists in database');
};

module.exports.deletePlaylist = async (req, res) => {
  const deleted = await Playlist.deletePlaylist(req.params.id);
  console.log(deleted);
  if (deleted) {
    return res.sendStatus(200);
  }
  return res.status(400).send('Error in deleting playlist');
};

module.exports.updatePlaylist = async (req, res) => {
  const updatedPlaylist = await Playlist.updatePlaylist(
    req.body,
    req.params.id
  );
  if (updatedPlaylist) {
    return res.status(200).send(updatedPlaylist);
  }
  return res.status(400).send('Error in updating playlist');
};
