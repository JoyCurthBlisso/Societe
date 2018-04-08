module.exports = function(sequelize, DataTypes)
{
	var variation = sequelize.define("variation",
	{
		variation: DataTypes.TEXT
	});

	variation.associate = function(models)
	{
		variation.hasMany(materials);
	}
}