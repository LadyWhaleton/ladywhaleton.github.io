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

    // Work around to open gallery with links.
    $("#openSG").click(function() { $('ul#stationerryGallery li:first').click(); } );
});

