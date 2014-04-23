// routine to figure out how the pistol sound should play (randomized or not)
function firetheMachinegun() {
	if ((!machinegunIsPlaying)) {
		// first we need to ensure we can't trigger another shotgun sound
		machinegunIsPlaying = true;

		// let's play a sound
		myContext = soundWpnMachineGunFire01.play();
		// gotta set the loop points
		myContext.loopStart = wpn_machinegun_fire_loop_start;
		myContext.loopEnd = wpn_machinegun_fire_loop_end;
		// and then enable looping
		myContext.loop = true;
	}
}
