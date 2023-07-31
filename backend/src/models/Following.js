const DataTypes = require('sequelize');

const sequelize = require('../config/sequelize');


const Following = sequelize.define("Following", {
  name: {
    type: DataTypes.STRING
  },
  amount:{
    type: DataTypes.INTEGER
  },
});

// Associations

Following.associate = function(models){
  Following.hasMany(models.User);
}

module.exports = Following;
