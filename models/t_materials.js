module.exports = function(sequelize, DataTypes)
{
	var material = sequelize.define("material",
	{
		commonName: DataTypes.STRING,
		latinName: DataTypes.STRING,
		description: DataTypes.TEXT,
		cost: DataTypes.DECIMAL,
		unit: DataTypes.STRING,
		reorderPoint: INTEGER(11),
		lot: DataTypes.STRING,
		purchaseDate: DataTypes.DATE,
		packedDate: DataTypes.DATE,
		supplierId: DataTypes.INTEGER,
		sourcing: DataTypes.STRING,
		sku: DataTypes.STRING
	});

	return material;
}