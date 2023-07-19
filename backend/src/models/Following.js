const DataTypes = require('sequelize');

const sequelize = require('../config/sequelize');


const Follow = sequelize.define("Follow", {
  name: {
    type: DataTypes.STRING
  },
  amount:{
    type: DataTypes.INTEGER
  },
});



module.exports = Follow;