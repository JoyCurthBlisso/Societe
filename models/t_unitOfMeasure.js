module.exports = function(sequelize, DataTypes)
{
	var unitMeasure = sequelize.define("unitMeasure",
	{
		unitOfMeasure: DataTypes.STRING
	});
	return unitMeasure
}