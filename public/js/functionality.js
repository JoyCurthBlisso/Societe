// JavaScript Document

console.log("Javascript Initiated.");

$("actionSelector").on("change", function() {
	var actionTaken = document.getElementById("actionSelector")[0].value;
	
	// Declaring If statements to Decide Action to Take
	
	if (actionTaken === "searchBy") {
		console.log("Search Initiated.");
		document.getElementById("query").classList.remove("hidden");
	}
	
	else if (actionTaken === "addRecipe") {
		console.log("Add Recipe Initiated.");
	}
	
	else if (actionTaken === "editDBItem") {
		console.log("Editing Database Entry.");
	}
	
	else if (actionTaken === "editDBRecipe") {
		console.log("Editing Database Recipe.");
	}
	
	else if (actionTaken === "manualEntry") {
		console.log("Manual Entry Mode Initiated.");
		document.getElementById("manualEnter").classList.remove("hidden");
	}
	
	else if (actionTaken === "addOther") {
		console.log("Add Other Product Initiated.");
	}
	
	else if (actionTaken === "profitReport") {
		console.log("P&L Report Initiated.");
	}
	
	else if (actionTaken === "currentInventory") {
		console.log("Accessing Inventory.");
		document.getElementById("dbTable").classList.remove("hidden");
	}
	
	else if (actionTaken === "lowInventory") {
		console.log("Accessing Low Inventory.");
	}
	
	else {
//		Error Handler
		console.log("Internal Server Error. Please refresh.");
	}
});

//$("#databaseOpener").on("click", function() {
//	$("#activityDiv").html("Database Open");
//	document.getElementById("query").classList.remove("hidden");
//	document.getElementById("submitQuery").classList.remove("hidden");
//	document.getElementById("dbTable").classList.remove("hidden");
//	
//});
//
//$("#addToDB").on("click", function() {
//	$("#activityDiv").html("Adding to Database");
//	document.getElementById("newRecipe").classList.remove("hidden");
//});
//
//$("#manualEntry").on("click", function() {
//	console.log("Manual Entry Mode Active");
//	document.getElementById("manualEnter").classList.remove("hidden");
//});

$("#itemlist").on("change", function() {
	var listValue = document.getElementsByName("addtheItem")[0].value;
	console.log(listValue);
	if (listValue === "Add Item") {
		document.getElementById("ifAddItemIsSelected").classList.remove("hidden");
	}
});

$("#manualSubmit").on("click", function() {
	var manualName = document.getElementById("itemName").value;
	var manualAmount = document.getElementById("amountMAN").value;
	var manualMeasure = document.getElementById("measuringCup").value;
	var manualDop = document.getElementById("dop").value;
	var manualLatin = document.getElementById("latin").value;
	var manualDealerName = document.getElementById("dealerName").value;
	var manualDealerAddress = document.getElementById("dealerAddress").value;
	var manualDealerPhone = document.getElementById("dealerPhone").value;
	var manualNotes = document.getElementById("notes").value;
	
	console.log(manualName);
	console.log(manualAmount);
	console.log(manualMeasure);
	console.log(manualDop);
	console.log(manualLatin);
	console.log(manualDealerName);
	console.log(manualDealerAddress);
	console.log(manualDealerPhone);
	console.log(manualNotes);
//	Your Submit to Database Will Go Here
});

$("#rawMaterialsOne").on("change", function() {
	document.getElementById("rawMaterialsTwo").classList.remove("hidden");
	document.getElementById("qtyTwo").classList.remove("hidden");
	document.getElementById("measureTwo").classList.remove("hidden");
});

$("#rawMaterialsTwo").on("change", function() {
	document.getElementById("rawMaterialsThree").classList.remove("hidden");
	document.getElementById("qtyThree").classList.remove("hidden");
	document.getElementById("measureThree").classList.remove("hidden");
});

$("#rawMaterialsThree").on("change", function() {
	document.getElementById("rawMaterialsFour").classList.remove("hidden");
	document.getElementById("qtyFour").classList.remove("hidden");
	document.getElementById("measureFour").classList.remove("hidden");
});

$("#rawMaterialsFour").on("change", function() {
	document.getElementById("rawMaterialsFive").classList.remove("hidden");
	document.getElementById("qtyFive").classList.remove("hidden");
	document.getElementById("measureFive").classList.remove("hidden");
});
