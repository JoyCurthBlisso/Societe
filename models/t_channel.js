module.exports = function(sequelize, DataTypes)
{
	var channel = sequelize.define("channel",
	{
		channel: DataTypes.TEXT
	});
	return channel;
}