module.exports = function(sequelize, DataTypes)
{
	var location = sequelize.define("location",
	{
		location: DataTypes.TEXT
	});

	location.associate = function(models)
	{
		location.belongsTo(materials);
	}
}