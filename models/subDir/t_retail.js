module.exports = function(sequelize, DataTypes)
{
	var retail = sequelize.define("retail",
	{
		commonName: DataTypes.STRING,
		description: DataTypes.STRING,
		qtyOnHand: DataTypes.DECIMAL,
		reorderPoint: DataTypes.DECIMAL,
		locationId: DataTypes.INTEGER,
		channelId: DataTypes.INTEGER,
		sku: DataTypes.STRING
	});

	return retail;
}