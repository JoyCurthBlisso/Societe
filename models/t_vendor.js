module.exports = function(sequelize, DataTypes)
{
	var Vendor = sequelize.define("Vendor",
	{
		name: DataTypes.STRING,
		contact: DataTypes.STRING,
		address1: DataTypes.STRING,
		address2: DataTypes.STRING,
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		zipCode: DataTypes.STRING,
		country: DataTypes.STRING,
		mobile_phone: DataTypes.STRING,
		office_phone: DataTypes.STRING,
		fax_phone: DataTypes.STRING,
		email: DataTypes.STRING,
		url: DataTypes.STRING,
		notes: DataTypes.TEXT('long')
	});
	// Vendor.associate = function(models) {
 //        Vendor.hasMany(models.Order);
 //    };

	return Vendor;
};