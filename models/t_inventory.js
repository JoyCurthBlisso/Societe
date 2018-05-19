module.exports = function(sequelize, DataTypes)
{
	var Inventory = sequelize.define("Inventory",
	{
		inventory_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		commonName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		item_sku: {
			type: DataTypes.STRING
		},
		latinName: {
			type: DataTypes.STRING
		},
		item_description: {
			type: DataTypes.STRING
		},
		item_uom: {
			type: DataTypes.STRING
		},
		item_qty: {
			type: DataTypes.DOUBLE
		},
		item_unit_cost: {
			type: DataTypes.DECIMAL
		},
		item_retail_price: {
			type: DataTypes.DECIMAL
		},
		item_storage_location: {
			type: DataTypes.STRING
		},
		item_qty_onShelf: {
			type: DataTypes.INTEGER
		},
		item_qty_inStorage: {
			type: DataTypes.INTEGER
		}
	});
 	Inventory.associate = function(models) {
        Inventory.hasOne(models.Order_item);
    };
	
	return Inventory;
};