module.exports = function(sequelize, DataTypes)
{
	var indications = sequelize.define("indications",
	{
		indications: DataTypes.STRING
	});

	source.associate = function(models)
	{
		indications.belongsTo()
	}
}