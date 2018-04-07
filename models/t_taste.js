module.exports = function(sequelize, DataTypes)
{
	var taste = sequelize.define("taste",
	{
		taste: DataTypes.STRING
	});

	source.associate = function(models)
	{
		taste.belongsTo()
	}
}