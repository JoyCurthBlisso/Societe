module.exports = function(sequelize, DataTypes)
{
	var suppliers = sequelize.define("suppliers",
	{
		name: DataTypes.STRING,
		contact: DataTypes.STRING,
		address1: DataTypes.STRING,
		address2: DataTypes.STRING,
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		postCode: DataTypes.STRING,
		country: DataTypes.STRING,
		phone1: DataTypes.STRING,
		phone2: DataTypes.STRING,
		fax: DataTypes.STRING,
		email1: DataTypes.STRING,
		email2: DataTypes.STRING,
		url: DataTypes.TEXT,
		notes: DataTypes.LONGTEXT,
	});

	suppliers.hasMany(material);

	return suppliers;
}