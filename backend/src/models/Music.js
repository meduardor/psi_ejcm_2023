const DataTypes = require('sequelize');

const sequelize = require('../config/sequelize');


const Music = sequelize.define("Music", {
  name: {
    type: DataTypes.STRING
  },
  gender:{
    type: DataTypes.STRING
  },
});



module.exports = Music;