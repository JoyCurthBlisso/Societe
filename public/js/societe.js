$(function()
{
	$("#manualSubmit").on("click", function(event)
	{
		console.log("button clicked");
		var commonName = $("#commonName").val();

		var latinName = $("#latinName").val().trim();
		var	description = $("#description").val().trim();
		var	cost = $("#cost").val().trim();
		var	unit= $("#unit").val().trim();
		var	reorderPoint = $("#reorderPoint").val().trim();
		var	lot = $("#lot").val().trim();
		var	purchaseDate = $("#purchaseDate").val().trim();
		var	packedDate = $("#packDate").val().trim();
		var	supplierId = $("#supplierId").val().trim();
		var	sourcing = $("#sourcing").val().trim();
		// var sku = $("#sku").val().trim();
		var method = "POST";
		var tableName = "material";
		var itemObject = 
		{
			method,
			tableName,
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
			// sku
			
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