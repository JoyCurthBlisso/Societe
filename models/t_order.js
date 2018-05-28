module.exports = function(sequelize, DataTypes)
{
	var Order = sequelize.define("Order",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		purchase_order_item: {
			type: DataTypes.STRING
		},
		vendorName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		order_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		shipping_amt: {
			type: DataTypes.DECIMAL
		},
		total_amount: {
			type: DataTypes.DECIMAL
		}
	});
	Order.associate = function(models) {
        Order.hasMany(models.Order_item, {
            onDelete: "cascade"
        });
    };

	return Order;
};