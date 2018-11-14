function add(){
	var x = document.getElementById("numOne").value;
	// get the value inside the id numOne
	var y = document.getElementById("numTwo").value;
	// get the value inside the id numOne
	
	var total = parseFloat(x) + parseFloat(y);
	//parse the x and y, return them with number and then add them together
	
	document.getElementById("para").innerHTML = total;
	// print the sum within the id"para"
};