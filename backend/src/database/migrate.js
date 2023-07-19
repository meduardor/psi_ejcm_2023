require('../config/dotenv');
const sequelize = require('../config/sequelize');

(async () => {
  try{
    await sequelize.sync({force: true});
    console.log('Connection in database');
  }catch(error){
    console.log('error');
  }
})();
