
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

function get_geoloc(){
	if ("geolocation" in navigator) {
  		/* geoloc disponible */
		navigator.geolocation.getCurrentPosition(stocker_position);
	} else {
  		alert("I'm sorry, but geolocation services are not supported by your browser.");
	}
}

function stocker_position(position){
	alert("position : " + position.coords.latitude + " : " + position.coords.longitude);
}
