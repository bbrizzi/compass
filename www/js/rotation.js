
function rotate(angle) {
	aiguille.setAttribute("transform", "translate(125,125) rotate("+angle+")");
}

function setAngle() {
	//var e_entry = document.getElementById("e_angle");
	var e_entry = document.querySelector("#e_angle");
	rotate(parseInt(e_entry.value));
}

if ( window.DeviceOrientationEvent ) {
    window.addEventListener("deviceorientation", function( event ) {
    //alpha: rotation around z-axis
    var rotateDegrees = 360 - event.alpha;
	document.querySelector("#orientation").innerHtml = rotateDegrees;
	rotate( rotateDegrees );
    
    }, false);
}