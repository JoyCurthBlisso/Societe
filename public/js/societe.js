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

		var getObject = {
			method:"get",
			searchQuery
		};
		dbPost(getObject);
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