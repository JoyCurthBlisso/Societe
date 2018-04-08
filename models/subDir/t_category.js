module.exports = function(sequelize, DataTypes)
{
	var category = sequelize.define("category",
	{
		category: DataTypes.TEXT
	});

	category.associate = function(models)
	{
		category.hasMany(materials);
	}
}