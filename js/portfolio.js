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

    $('#stationerryGallery').lightGallery();
    $('#pokequestGallery').lightGallery();
    $('#soenGallery').lightGallery();
    $('#kinjasGallery').lightGallery();
    $('#orangeGallery').lightGallery();
    $('#fistbumpGallery').lightGallery();

    // Work around to open gallery with links.
    $("#openSG").click(function() { $('ul#stationerryGallery li:first').click(); } );
    $("#openPQG").click(function() { $('ul#pokequestGallery li:first').click(); } );
    $("#openSEG").click(function() { $('ul#soenGallery li:first').click(); } );
    $("#openKG").click(function() { $('ul#kinjasGallery li:first').click(); } );
    $("#openOBG").click(function() { $('ul#orangeGallery li:first').click(); } );
    $("#openFBG").click(function() { $('ul#fistbumpGallery li:first').click(); } );
});

