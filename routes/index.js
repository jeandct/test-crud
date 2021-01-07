// const thingsRoutes = require('./things');
const playlistRouter = require('./playlist');
// const trackRouter = require('./tracks');

// eslint-disable-next-line
module.exports = (app) => {
  // app.use('/things', thingsRoutes);
  app.use('/playlists', playlistRouter);
  // app.use('/track', trackRouter);
};
