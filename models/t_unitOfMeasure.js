module.exports = function(sequelize, DataTypes)
{
	var unitMeasure = sequelize.define("unitOfMeasure",
	{
		unitOfMeasure: DataTypes.STRING
	});

	unitMeasure.associate = function(models)
	{
		unitOfMeasure.hasMany(materials);
	}
}