module.exports = function(sequelize, DataTypes)
{
	var Order_item = sequelize.define("Order_item",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		item_sku: {
			type: DataTypes.STRING,
			allowNull: false
		},
		item_description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		organic: {
			type: DataTypes.STRING
		},
		item_cost: {
			type: DataTypes.DECIMAL
		},
		item_uom: {
			type: DataTypes.STRING
		},
		item_qty: {
			type: DataTypes.INTEGER
		},
		item_discount_amt: {
			type: DataTypes.DECIMAL
		},
		item_price: {
			type: DataTypes.DECIMAL
		},
		received_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	});
	Order_item.associate = function(models) {
		Order_item.belongsTo(models.Order, {
			foreignKey: {
                allowNull: false
            }
        });
	};

    return Order_item;
}