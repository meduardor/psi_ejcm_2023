const DataTypes = require('sequelize');

const sequelize= require('../config/sequelize');


const Favorites= sequelize.define("Favorites", {
  playlist: {
    type: DataTypes.STRING
  },
  dearSongs: {
    type: DataTypes.STRING
  },
});


module.exports = Favorites;