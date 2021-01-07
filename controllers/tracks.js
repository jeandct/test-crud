const Tracks = require('../models/tracks');

module.exports.create = async (req, res) => {
  const { name, artist } = req.body;
  if (!name || !artist) {
    return res.status(400).send('Please provide a valid song name and artist');
  }
  const track = await Tracks.createTrack(name, artist, req.params.id);
  if (track) {
    return res.status(201).send(track);
  }
  return res.status(400).send('Error in creating track');
};

module.exports.delete = async (req, res) => {
  await Tracks.deleteTrack(req.params);
  return res.sendStatus(200);
};

module.exports.update = async (req, res) => {
  const updatedTrack = await Tracks.updateTrack(req.body, req.params.track_id);
  return res.status(200).send(updatedTrack);
};
