module.exports = function(sequelize, DataTypes)
{
	var source = sequelize.define("source",
	{
		sourcing: DataTypes.TEXT
	});

	return source;
}