$(document).ready(function(){
	$(".dropdown-trigger").dropdown();
	$('.datepicker').datepicker();
	$('select').formSelect();
	$('.slider').slider();

// JavaScript Document

console.log("Javascript Initiated.");

$("#actionSelector").on("change", function(e) {
	
	var actionTaken = $(this).val(); //document.getElementsByName("actionSquad")[0].value;
	
	// Declaring If statements to Decide Action to Take
	if (actionTaken === "searchBy") {
		console.log("Search Initiated.");
		$("#query").removeClass("hidden");
	}
	
	else if (actionTaken === "addRecipe") {
		console.log("Add Recipe Initiated.");
		document.getElementById("newRecipe").classList.remove("hidden");
	}
	
	else if (actionTaken === "editDBItem") {
		console.log("Editing Database Entry.");
	}
	
	else if (actionTaken === "editDBRecipe") {
		console.log("Editing Database Recipe.");
		document.getElementById("query").classList.remove("hidden");
	}
	
	else if (actionTaken === "manualEntry") {
		console.log("Manual Entry Mode Initiated.");
		$("#dbTable").addClass("hidden");
		$("#manualEnter").removeClass("hidden");
		//Get the units of measure
		$.get('/db/units', function(units){
			// units.sort(function(a, b){
			// 	return a.unitOfMeasure > b.unitOfMeasure;
			// });
			$.each(units, function(index, unit){
				$('#unitOfMeasure')
				.append(`<option value="${unit.unitOfMeasure}">${unit.unitOfMeasure}</option>`);
			});
			
		});
	}
	
	else if (actionTaken === "addOther") {
		console.log("Add Other Product Initiated.");
	}
	
	else if (actionTaken === "profitReport") {
		console.log("P&L Report Initiated.");
	}
	
	else if (actionTaken === "currentInventory") {
		console.log("Accessing Inventory.");
		$('#manualEnter').addClass('hidden');
		$("#dbTable").removeClass("hidden");
		//Need to load all of the items
		$.get('/db/inventory', function(data){
			
			var html = '';
			$.each(data, function(index, item){
				html += `<tr><td>${item.commonName}</td>
				<td>${item.description}</td>
				<td>${item.societeRetailPrice}</td>
				<td>${item.qtyOnHand}</td>`;
			});
			$('#dbTable > tbody').html(html);
		});
		
	}
	
	else if (actionTaken === "lowInventory") {
		console.log("Accessing Low Inventory.");
	}
	
	else if (actionTaken === "none") {
		console.log("None selected. Throwing all fields");
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


// $("#manualSubmit").on("click", function() {
// 	var commonName = document.getElementById("commonName").value;
// 	var latinName = document.getElementById("latinName").value;
// 	var description = document.getElementById("description").value;
// 	var cost = document.getElementById("totalCost").value;
// 	var unit = document.getElementById("unitOfMeasure").value;
// 	var reorderPoint = document.getElementById("reorderPoint").value;
// 	var lot = document.getElementById("lot").value;
// 	var purchaseDate = document.getElementById("purchaseDate").value;
// 	var packDate = document.getElementById("packDate").value;
// 	var supplierId = document.getElementById("supplierId").value;
// 	var sourcing = document.getElementById("sourcing").value
	
// 	console.log("  Common Name: " + commonName);
// 	console.log("   Latin Name: " + latinName);
// 	console.log("  Description: " + description);
// 	console.log("         Cost: " + cost);
// 	console.log("         Unit: " + unit);
// 	console.log("Reorder Point: " + reorderPoint);
// 	console.log("          Lot: " + lot);
// 	console.log("Purchase Date: " + purchaseDate);
// 	console.log("    Pack Date: " + packDate);
// 	console.log("  Supplier ID: " + supplierId);
// 	console.log("       Source: " + sourcing);
// //	Your Submit to Database Will Go Here
// });

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


//Cancel Button clear form will reload page
$("#clear").on("click", function(event) {
    event.preventDefault();
    window.location.reload();
});

//Calculate amount after discount
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
  
	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.datepicker');
		var instances = M.Datepicker.init(elems, options);
	  });
});