const DataTypes = require('sequelize');
const sequelize= require('../config/sequelize');


const Favorites= sequelize.define("Favorites", {
  likes: {
    type: DataTypes.STRING
  },
  collectionPhoto: {
    type: DataTypes.STRING
  },
});

// Associations  

module.exports = Favorites;