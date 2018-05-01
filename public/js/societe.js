$(function()
{
	$("#manualSubmit").on("click", function(event)
	{
		console.log("button clicked");
		var itemObject = getAllValues("manualSubmit");
		itemObject.method = "post";
		itemObject.tableName="material";
		dbPost(itemObject);
	});

	$("#submitQuery").on("click", function()
	{
		var searchQuery = $("#query").val().trim();
		console.log(searchQuery);
		//must find out column name & tableName somehow?
		dbGet(searchQuery, qCol, tableName);
	});
});

//this function gets all values from the fields with the given class and puts them
//into an object with the keys equal to the 'name' parameter of the input.
function getAllValues(classVal){
	var out = {};
	$("."+classVal).each(function(index, element){
		out[$(element).attr("name")] = $(element).val().trim();
	})
	console.log(out);
	$(":checkbox").each(function(index,element){
		if ($(element).attr("class")==classVal){
			out[$(element).attr("name")] = $(element).is(":checked");
		};
	})
	return out;
}
//this function posts the object to the database and returns success or failure.
function dbPost(object){
	$.ajax("/db",{
		type:"POST",
		data:object
	}).then(function(){
		console.log("posted successfully.");
	}).fail(function(err){
		console.log(err);
	})
}
//function to GET from the database. qString is the string to search for, 
//qCol is the name of the column it should be in
//tableName is the db table it lives in
//exact searches for exactly the string, setting it to false allows the returned objects to contain qString anywhere (%qString%)
//findAll will return either one match or all matching elements (false by default), (findOne vs findAll);
function dbGet(qString, qCol, tableName, exact=false, findAll=false){
	$.ajax("/db",{
		type:"GET",
		qString,
		qCol,
		tableName,
		exact,
		findAll
	})
}