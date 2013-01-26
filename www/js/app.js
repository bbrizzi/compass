// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    var $ = require('zepto');

    // Need to verify receipts? This library is included by default.
    // https://github.com/mozilla/receiptverifier
    //require('receiptverifier');

    // Want to install the app locally? This library hooks up the
    // installation button. See <button class="install-btn"> in
    // index.html
    require('./install-button');

    // Write your app here.

});
/*
	get_geoloc()

	If the geolocation is available in the navigator.
	Get it and callback the set_position function
	in order to save it.
	
	Else display a pop-up with an error message.
*/
function get_geoloc(){
	if ("geolocation" in navigator) {
  		/* geoloc disponible */
		navigator.geolocation.getCurrentPosition(set_position);
	} else {
  		alert("I'm sorry, but geolocation services are not supported by your browser.");
	}
}
/*	
	set_position(position)

	Display a pop-up with the current latitude ans logitude
	and save them in JSON format in localStorage.
*/
function set_position(position){
	alert("position : " + position.coords.latitude + " : " + position.coords.longitude);
	localStorage.setItem("latitude",JSON.stringify(position.coords.latitude));
	localStorage.setItem("longitude",JSON.stringify(position.coords.longitude));
}
/*
	get_position()

	Get the local stored latitude and logitude
	with and return it.
*/
function get_position()
{
	return [JSON.parse(localStorage.getItem("latitude")),
		JSON.parse(localStorage.getItem("longitude"))];
}
/*
	display_last_position()

	Display on the screen the last position on a pop-up.
	@call : get_position()
*/
function display_last_position()
{
	alert("Last Position : " + get_position());
}
