module.exports = function(sequelize, DataTypes) {
    return sequelize.define ('info', {
        zipcode: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        topping: DataTypes.STRING,
        soup: DataTypes.STRING,
        owner_id: DataTypes.INTEGER
    });
};