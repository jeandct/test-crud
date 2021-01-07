const db = require('../db');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSqlSet');

module.exports.createTrack = async (name, artist, playlist_id) => {
  try {
    const res = await db.query(
      'INSERT INTO song(name, artist, playlist_id) VALUES(?,?,?)',
      [name, artist, playlist_id]
    );

    if (res) {
      return { id: res.insertId, name, artist };
    }
  } catch (err) {
    console.error(err);
  }

  return null;
};

module.exports.deleteTrack = async (attributes) => {
  const { id, track_id } = attributes;
  return db.query('DELETE FROM song WHERE id = ? AND playlist_id = ? ', [
    track_id,
    id,
  ]);
};

module.exports.updateTrack = async (attributes, id) => {
  const result = await db.query(
    `UPDATE song SET ${definedAttributesToSqlSet(attributes)} WHERE id = :id`,
    { ...attributes, id }
  );

  if (result.affectedRows > 0) {
    const updatedTrack = await db.query('SELECT * FROM song WHERE id = ?', [
      id,
    ]);
    return updatedTrack;
  }
  return null;
};
