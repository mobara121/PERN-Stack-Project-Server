module.exports = function(sequelize, DataTypes) {
    return sequelize.define ('info', {
        zipcode: DataTypes.INTEGER,
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        topping: DataTypes.STRING,
        soup: DataTypes.STRING,
        owner_id: DataTypes.INTEGER
    });
};