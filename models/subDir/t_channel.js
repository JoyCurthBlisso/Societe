module.exports = function(sequelize, DataTypes)
{
	var channel = sequelize.define("channel",
	{
		channel: DataTypes.TEXT
	});

	channel.associate = function(models)
	{
		channel.belongsTo(materials);
	}
}