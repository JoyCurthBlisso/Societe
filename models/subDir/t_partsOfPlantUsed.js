module.exports = function(sequelize, DataTypes)
{
	var partsOfPlantUsed = sequelize.define("partsOfPlantUsed",
	{
		partsOfPlantUsed: DataTypes.TEXT
	});

	source.associate = function(models)
	{
		materiaMedica.belongsTo()
	}
}