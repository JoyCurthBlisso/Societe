module.exports = function(sequelize, DataTypes)
{
	var material = sequelize.define("material",
	{
		commonName: DataTypes.STRING,
		latinName: DataTypes.STRING,
		description: DataTypes.TEXT,
		wholesaleCost: DataTypes.DECIMAL,
		discount: DataTypes.DECIMAL,
		societeRetailPrice: DataTypes.DECIMAL,
		recommendedRetailPrice: DataTypes.DECIMAL,
		unitOfMeasure: DataTypes.STRING,
		qtyPurchased: DataTypes.DECIMAL,
		qtyOnHand: DataTypes.DECIMAL,
		reorderPoint: DataTypes.INTEGER,
		lot: DataTypes.STRING,
		locationId: DataTypes.INTEGER,
		channelId: DataTypes.INTEGER,
		purchaseDate: DataTypes.DATE,
		packedDate: DataTypes.DATE,
		supplierId: DataTypes.INTEGER,
		sourcing: DataTypes.STRING,
		sku: DataTypes.STRING,
		shopify: DataTypes.BOOLEAN,
		productLabel: DataTypes.TEXT,
		productImage: DataTypes.TEXT
	});
	return material;
}