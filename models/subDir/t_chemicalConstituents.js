module.exports = function(sequelize, DataTypes)
{
	var chemicalConstituents = sequelize.define("chemicalConstituents",
	{
		chemicalConstituents: DataTypes.TEXT
	});

	source.associate = function(models)
	{
		chemicalConstituents.belongsTo()
	}
}