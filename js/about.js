
$(document).ready(function() {

	// Work around to set divider widths according to text length. 
	var subsectionNames = ["interests", "education", "skills", "orgs", "extras", "awards"];

	// Loop through array.
	for (i = 0; i < subsectionNames.length; i++)
	{
		var idName = "#" + subsectionNames[i];
		var width = $(idName).width();
		$(idName + "-bg").css("width", width);
	}

})