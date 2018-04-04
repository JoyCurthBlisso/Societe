$(function()
{
	$("#manualSubmit").on("click", function(event)
	{
		console.log("button clicked");
		var commonName = $("#itemName").val().trim();
		var qtyOnHand = $("#amountMan").val().trim();
		// var measuringCup = $("#measuringCup").val().trim();
		// var dop = $("#dop").val().trim();

		var itemObject = 
		{
			commonName, 
			qtyOnHand, 
			// measuringCup, 
			// dop
		};

		$.ajax("/", {
			type: "PUT",
			data: itemObject
		}).then(function()
		{
			console.log("add new item");
			location.reload();
		});
	});
});