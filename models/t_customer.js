module.exports = function(sequelize, DataTypes)
{
	var Customer = sequelize.define("Customer",
	{
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING,
		dob: DataTypes.DATEONLY,
		loyalty: DataTypes.BOOLEAN,
		mailing_list: DataTypes.BOOLEAN,
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		phone: DataTypes.STRING,
		workshop_ind: DataTypes.BOOLEAN,
		subscription_type: DataTypes.STRING,
		subscribe_start_date: DataTypes.DATEONLY,
		patient_first_visit_date: DataTypes.DATEONLY
	});

	return Customer;
};