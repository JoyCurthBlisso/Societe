module.exports = function(sequelize, DataTypes)
{
	var material = sequelize.define("material",
	{
		commonName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		latinName: {
			type: DataTypes.STRING
		
		},
		description: {
			type: DataTypes.TEXT,
			validate: {
				notEmpty: true
			}
		},
		wholesaleCost: {
			type: DataTypes.DECIMAL
		},
		discount: {
			type: DataTypes.DECIMAL
		},
		societeRetailPrice: {
			type: DataTypes.DECIMAL
		},
		recommendedRetailPrice: {
			type: DataTypes.DECIMAL
		},
		unitOfMeasure: {
			type: DataTypes.STRING
		},
		qtyPurchased: {
			type: DataTypes.DECIMAL
		},
		qtyOnHand: {
			type: DataTypes.DECIMAL
		},
		// item_storage_location: {
		// 	type: DataTypes.STRING
		// },
		// item_qty_onShelf: {
		// 	type: DataTypes.INTEGER
		// },
		// item_qty_inStorage: {
		// 	type: DataTypes.INTEGER
		// },
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
};