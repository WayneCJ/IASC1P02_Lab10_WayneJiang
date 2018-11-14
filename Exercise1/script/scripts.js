var start = new Date();
var currTime = start.getTime();

function stopTime(){
	var finish = new Date();
	var finTime = finish.getTime();
	var lTime= (finTime -currTime)/1000;
	/* getTime() is the number of milliseconds since 1 January 1970 00:00:00
	   So we need to divide the subtraction with 1000 
	*/
	var myAlert = alert("You have been on the page for: " + lTime + " seconds.");
	console.log(myAlert);
};