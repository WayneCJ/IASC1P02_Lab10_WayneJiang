var userAge = prompt("What is your age?");    // use prompt box to ask user's age
console.log(userAge);

var newD = new Date();
var currYear = newD.getFullYear();            // get the current year

var userCalAge = currYear - userAge;          // calculate the user's age by current Year - user's age

document.getElementById("para").innerHTML = userCalAge;
//print out the user's age with in the id "para"

