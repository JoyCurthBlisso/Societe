module.exports = function(sequelize, DataTypes)
{
	var materiamedica = sequelize.define("materiamedica",
	{
        commonName: DataTypes.STRING,
        summary: DataTypes.STRING,
		TCMName: DataTypes.STRING,
		ayurvedicName: DataTypes.TEXT,
		physicalDescription: DataTypes.TEXT,
		habitat: DataTypes.STRING,
		harvestCollection: DataTypes.TEXT,
		partsOfThePlantUse: DataTypes.TEXT,
		qualities: DataTypes.STRING,
		chemicalConstinuents: DataTypes.STRING,
		taste: DataTypes.STRING,
		drugInterations: DataTypes.TEXT,
        actions: DataTypes.TEXT,
        indications: DataTypes.TEXT,
        contraindications: DataTypes.TEXT,
        dosage: DataTypes.TEXT,
        infusion: DataTypes.TEXT,
        combinations: DataTypes.TEXT,
        energetics: DataTypes.TEXT,
        folklore: DataTypes.TEXT,
        flowerEssence: DataTypes.TEXT,
        applications: DataTypes.TEXT

	});

	return materiamedica;
}