const DataTypes = require('sequelize');

const sequelize= require('../config/sequelize');

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    photos:{
        type: DataTypes.STRING
    },
    salt: {
        type: DataTypes.STRING
    },
    hash: {
        type: DataTypes.STRING
    },
    birthday: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.BOOLEAN
    },
});

// Associations
User.associate = function (models) {
  User.hasMany(models.Following);
  User.hasMany(models.Favorites);

}



// Export Module
module.exports = User;
