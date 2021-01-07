const db = require('../db');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSqlSet');

module.exports.createPlaylist = async (attributes) => {
  const { name, genre } = attributes;
  const rows = await db.query(
    'INSERT INTO playlist(name, genre) VALUES(?, ?)',
    [name, genre]
  );
  if (rows) {
    return { id: rows.insertId, name, genre };
  }
  return null;
};

module.exports.findOne = async (id) => {
  const result = await db.query('SELECT * FROM playlist WHERE id = ?', [id]);
  if (result.length) {
    return result[0];
  }
  return null;
};

module.exports.findTracks = async (id) => {
  const sql =
    'SELECT p.id as playlist_id, s.id as song_id, s.name as song_name, s.artist as song_artist FROM song as s JOIN playlist as p WHERE p.id = ?';
  const result = await db.query(sql, [id]);
  if (result.length) {
    return result;
  }
  return null;
};

module.exports.deletePlaylist = async (id) => {
  const result = await db.query('DELETE FROM playlist WHERE id = ?', [id]);
  if (result.affectedRows > 0) {
    return true;
  }
  return null;
};

module.exports.updatePlaylist = async (attributes, id) => {
  const result = await db.query(
    `UPDATE playlist SET ${definedAttributesToSqlSet(
      attributes
    )} WHERE id = :id`,
    { ...attributes, id }
  );

  if (result.affectedRows > 0) {
    const updatedPlaylist = await this.findOne(id);
    return updatedPlaylist;
  }
  return null;
};
