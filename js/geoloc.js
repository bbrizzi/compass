// Mes variables
var saved_latitude = null;
var saved_longitude = null;

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
	saved_latitude = JSON.parse(localStorage.getItem("latitude"));
	saved_longitude = JSON.parse(localStorage.getItem("longitude"));
}

/*
	display_last_position()
	Display on the screen the last position on a pop-up.
	@call : get_position()
*/
function display_last_position(){
	get_position();
	alert("Last Position : " + saved_latitude + ":" + saved_longitude);
	navigator.geolocation.watchPosition(update_compass, {enableHighAccuracy:true, maximumAge:30000, timeout:27000});
}

if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

// Mettre à jour la fleche
function update_compass(position){
	var lat1 = saved_latitude;
	var lon1 = saved_longitude;
	var lat2 = position.coords.latitude;
	var lon2 = position.coords.longitude;
	
	var R = 6371; // km
	var dLat = (lat2-lat1).toRad();
	var dLon = (lon2-lon1).toRad();
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;
	
	alert("Distance : " + d);
}