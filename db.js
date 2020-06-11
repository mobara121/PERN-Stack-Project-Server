const Sequelize = require('sequelize');

const sequelize = new Sequelize('Ramen', 'postgres', 'RomeoOhRomeo', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function(){
        console.log('connect to pern-stack postgres database');
    },
    function(err){
        console.log(err)
    }
);

module.exports = sequelize;