$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});
var hamburger = $('#nav-icon');
var mNav = $('.nav-links');


function dropDown(){
	var status = mNav.hasClass('active');

	if (!status) {
		mNav.addClass('active');
	} else {
		mNav.removeClass('active');
	}

}
$('#nav-icon').click(dropDown);




       /*global document, $, console*/

(function () {
    'use strict';

    $(document).ready(function () {

        /* ----- Begin writing your JavaScript here  ------*/

        var slideDuration = 500; // milliseconds

        function readMore(e) {
            console.log('readMore');
            e.preventDefault();
            $('.readmore').hide();
            $('#show-this-on-click').slideDown(slideDuration);
            $('.readless').show();
        }

        function readLess(e) {
            //console.log('readLess');
            e.preventDefault();
            $('.readless').hide();
            $('#show-this-on-click').slideUp(slideDuration);
            $('.readmore').show();
        }        

        $('.readmore').click(readMore);
        $('.readless').click(readLess);      

        /* ----- Finish writing your JavaScript here  -----*/

    });
})();
      