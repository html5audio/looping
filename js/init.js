//-------------------------
// 
// Initialize our sounds
// 
//----------

//machine gun
	soundWpnMachineGunFire01 = new Sound(wpn_machinegun_fire);


//-------------------------
// 
// Declare and initialize our variables
// 
//----------

	var myContext;
	var machinegunIsPlaying = false;
	var isSpaceBarDown = false;

	var theMachinegun = document.getElementById("machinegun");


//-------------------------
// 
// Declare our listeners
// 
//----------


//
// listen for the user to click or touch on the pistol icon
//
	theMachinegun.addEventListener('mousedown', 
			function(e){
				e.preventDefault();
				firetheMachinegun();
			}
		, false);
	theMachinegun.addEventListener('mouseup', 
			function(e){
				e.preventDefault();
				isSpaceBarDown = false;
				myContext.loop = false;
				machinegunIsPlaying = false;
			}
		, false);


//
// listen for key presses
//
	window.addEventListener("keydown",onKeyDown);
	
	function onKeyDown(e) {
		switch (e.keyCode) {
			// spacebar
			case 32:
				firetheMachinegun();
				isSpaceBarDown = true;
				break;
		}
	}

	window.addEventListener("keyup",onKeyUp);
	
	function onKeyUp(e) {
		switch (e.keyCode) {
			// spacebar
			case 32:
				isSpaceBarDown = false;
				myContext.loop = false;
				machinegunIsPlaying = false;
				break;
		}
	}
