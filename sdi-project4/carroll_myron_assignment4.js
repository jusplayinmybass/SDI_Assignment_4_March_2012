//Author: Myron Carroll
//SDI Assignment 4
//March 2012
//My library

alert(" works!");

//Does a string follow a 123-456-7890 pattern like a phone number?
var checkNumber = function (myNumber) {
    var dashCheck = /^(\d{3})-(\d{3})-(\d{4})$/; //Checks to see if the number has dashes in the right place.
    if (myNumber.match(dashCheck)) {
            var numberGood = console.log(myNumber + " is valid, thanks."); //If dashes in the right place, says it's valaid and thanks.
            return numberGood;
        } else {
            var numberBad = console.log("Sorry, " + myNumber + " is not valid. Please follow this format: XXX-XXX-XXXX"); //If dashes in wrong places, returns an error.
            return numberBad;
        }
    };
checkNumber("765-236-6355");
/*
var phone = "407-555-1212"; // Phone number to be checked
var numberString = phone.split("-");  //seperate the number into 3 different parts at the "-"
console.log (numberString);
// Make sure the strings are the right length.
if (numberString.length[0] === 4 && numberString.length[1] === 4 && numberString.length[2] === 4) {
console.log("You're phone number ", phone, "appears to be correctly formatted");
} else {
console.log(phone, "You're phone number is incorrectly formatted. Please use: 123-456-7890");
}


*/




//Does a string follow an aaa@bbb.ccc pattern like an email address?
/*
var say = function (message){
	console.log(message);
};
if () {
        //is there an @ and a . in the string? If index of = -1 ask for valid email address.
    var mystring.indexOf("@") = a;
    var mystring.indexOf(".") = p;
    if a < 0 || > 
    if (p < 0){
    	say("Sorry, please enter a valaid email address.")
    };
}; else{
	console.log("Sorry, please enter a valaid email address.")
};

//Is the string a URL? (Does it start with http: or https:?)

if () {
				//Are the first 5 characters in the string http: or https:
}; else{
	console.log("Please enter a valaid web URL.");
};

//Title-case a string (split into words, then uppercase the first letter of each word)
if () {
				//Find where the spaces are and make the next character upper case.	
};

//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".


//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
	toFixed(x)

//Fuzzy-match a number: is the number above or below a number within a certain percent?

//Find the number of hours or days difference between two dates.

//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
	toString()
//Find the total value of just the numbers in an array, even if some of the items are not numbers.

//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/