const DataTypes = require('sequelize');

const sequelize= require('../config/sequelize');

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    avatar: {
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


// Export Module
module.exports = User;