var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

// run onDeviceReady() method when device has loaded
document.addEventListener("deviceready", onDeviceReady, false);
		
// method called updateDisplay
// updates the html event divs to show how many times the application has been launched, paused and resumed	
function updateDisplay() {
	/*$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);*/
	document.getElementById('launched').text("Application launched: " + launched_count);
	document.getElementById('resumed').text("Application paused: " + paused_count);
	document.getElementById('paused').text("Application resumed: " + resumed_count);
}


// device APIs are available
//

	// method called onDeviceReady
	// ran when the device has loaded the app, contains resume and pause event listeners and runs the updateDisplay() method
    function onDeviceReady() {
	
	//event listeners run onResume method and onPause method respectively
	//if the application is paused the onDeviceReady method is stopped here and the onPause method is run
	//if the application is resumed the onDeviceReady method is stopped here and the onResume method is run
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	//increases launched_count variable by 1 and updates the display with new values
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }

	//method called onPause
	//increases paused_count variable by 1 and updates the display with new values
    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

	//method called onResume
	//increases resumed_count variable by 1 and updates the display with new values
    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
