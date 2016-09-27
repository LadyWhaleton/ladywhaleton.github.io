// Javascript stuff for portfolio page of ladywhaleton.github.io

$(document).ready(function() {

	// slider for stationerry
	/*
    $('#stationerryGallery').lightSlider({
		gallery:false,
		pager: false,
		mode: 'fade',
		controls: false,
		// auto: true,
		// pause: 2500,
		// pauseOnHover: true,
		item:1,
		loop:true,
		thumbItem:9,
		slideMargin:0,
		enableDrag: false,
		enableTouch: false,
		currentPagerPosition:'left',
		onSliderLoad: function(el) {
			el.lightGallery({
				selector: '#stationerryGallery .lslide'
			});
		}   
	});
	*/

	// Work around to set divider widths according to text length. 
	var subsectionNames = ["work", "projects"];

	// Loop through array.
	for (i = 0; i < subsectionNames.length; i++)
	{
		var idName = "#" + subsectionNames[i];
		var width = $(idName).width();
		$(idName + "-bg").css("width", width);
	}

	// lightGallery initiation.
	$('#recollectGallery').lightGallery();
    $('#stationerryGallery').lightGallery();
    $('#pokequestGallery').lightGallery();
    $('#soenGallery').lightGallery();
    $('#kinjasGallery').lightGallery();
    $('#orangeGallery').lightGallery();
    $('#fistbumpGallery').lightGallery();

    // Work around to open gallery with links.
    $("#openRCG").click(function() { $('ul#recollectGallery li:first').click(); } );
    $("#openSG").click(function() { $('ul#stationerryGallery li:first').click(); } );
    $("#openPQG").click(function() { $('ul#pokequestGallery li:first').click(); } );
    $("#openSEG").click(function() { $('ul#soenGallery li:first').click(); } );
    $("#openKG").click(function() { $('ul#kinjasGallery li:first').click(); } );
    $("#openOBG").click(function() { $('ul#orangeGallery li:first').click(); } );
    $("#openFBG").click(function() { $('ul#fistbumpGallery li:first').click(); } );
});

