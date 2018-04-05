$(function()
{
	$("#manualSubmit").on("click", function(event)
	{
		console.log("button clicked");
		var commonName = $("#itemName").val().trim();

		var latinName = $("#latinName").val().trim();
		var	description = $("#description").val().trim();
		var	cost = $("#cost").val().trim();
		var	unit= $("#unit").val().trim();
		var	reorderPoint = $("#reorderPoint").val().trim();
		var	lot = $("#lot").val().trim();
		var	purchaseDate = $("#purchaseDate").val().trim();
		var	packedDate = $("#packedDate").val().trim();
		var	supplierId = $("#supplierId").val().trim();
		var	sourcing = $("#sourcing").val().trim();
		var method = "POST";

		var itemObject = 
		{
			method,
			"tableName":"t_materials",
			commonName,
			latinName, 
			description,
			cost,
			unit,
			reorderPoint,
			lot,
			purchaseDate,
			packedDate,
			supplierId,
			sourcing 
			
		};

		console.log(itemObject);

		$.ajax("/db", {
			type: "POST",
			data: itemObject
		}).then(function()
		{
			console.log("added new item");
			location.reload();
		});
	});

	$("#submitQuery").on("click", function()
	{
		var searchQuery = $("#query").val().trim();
		var method = "GET"
		console.log(searchQuery);

		var getObject = {
			method,
			searchQuery
		};

	$.ajax("/db",{
		type: "POST",
		data: getObject
	}).then(function()
	{
		console.log("get stuff");
	});
	});
});