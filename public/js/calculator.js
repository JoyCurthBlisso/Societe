// JavaScript Document

$("#discount").on("change", function() {
	var wholesaler = $("#wholesaleCost").val();
	var disc = $("#discount").val();
	if (disc > 100) {
		console.log("Discount too high");
		M.toast({html: "Please enter a percentage at or below 100."});
	}
	else {
		var discPCT = (disc * 0.01);
		var calcedDisc = (wholesaler * discPCT);
		var totDisc = (wholesaler - calcedDisc);
		console.log("Discount Dollars:", calcedDisc);
		console.log("Discounted Price:", totDisc);
		$("#calculatedDisc").val(calcedDisc);
		$("#recommendedRetailPrice").val(totDisc);
	}

});