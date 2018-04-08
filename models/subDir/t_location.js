module.exports = function(sequelize, DataTypes)
{
	var location = sequelize.define("location",
	{
		location: DataTypes.TEXT
	});

	source.associate = function(models)
	{
		location.belongsTo()
	}
}