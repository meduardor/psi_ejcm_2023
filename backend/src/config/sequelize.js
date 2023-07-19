const { Sequelize } = require('sequelize');
const fs = require('fs');

// Leitura da pastas que contém os models
const model = fs.readdirSync('./src/models', {withFileTypes: true})
  .map((item) => item.name.split('.')[0]);

// Condição para conexão com a criação do tipo de banco de dados
const sequelize = (process.env.DB_CONNECTION === 'sqlite')
  ? new Sequelize ({
    dialect: 'sqlite',
    storage: process.env.DB_HOST + process.env.DB_DATABASE,
})
: new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    models: [`${__dirname}/../models`],
  },
);

module.exports = sequelize;


// Require Models
require('../models/User');
require('../models/Following');
require('../models/Favorites');

// Associação do Models
for (mod in sequelize.models) {
  if(sequelize.models[mod].associate instanceof Function){
    sequelize.models[mod].associate(sequelize.models);
  }
}
