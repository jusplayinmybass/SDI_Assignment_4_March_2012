//Author: Myron Carroll
//SDI Assignment 4
//March 2012
//My library

alert(" works!");
/*
//1.Does a string follow a 123-456-7890 pattern like a phone number?
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



*/

//2.Does a string follow an aaa@bbb.ccc pattern like an email address?
var checkEmail = function (address) {
        var newAddy = address.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/); //Checks the string for the proper characters a-z, A-Z, 0-9, ._- followed by an @ then the same characters followed by a . then those characters again
        if (newAddy) {
            var good = console.log(address + " looks great! Thank You.");
            return good;
        } else {
            var invalid = console.log(address + " is an INVALID e-mail address!");
            return invalid;
        }
};
checkEmail("myronbennell@gmail.com")
/*
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