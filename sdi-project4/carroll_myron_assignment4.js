//Author: Myron Carroll
//SDI 1203 Assignment 4
//22 March 2012
//My JavaScript Library

alert(" works!");

//1.Does a string follow a 123-456-7890 pattern like a phone number?
var checkNumber = function (myNumber) {
    var dashCheck = /^(\d{3})-(\d{3})-(\d{4})$/; //Checks to see if the number has numbers and dashes in the right place.
    if (myNumber.match(dashCheck)) {
            var numberGood = console.log(myNumber + " is valid, thanks."); //If dashes in the right place, says it's valaid and thanks.
            return numberGood;
        } else {
            var numberBad = console.log("Sorry, " + myNumber + " is not valid. Please follow this format: XXX-XXX-XXXX"); //If dashes in wrong places, returns an error.
            return numberBad;
        }
    };
checkNumber("765-236-6355");





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
checkEmail("myronbennell@fullsail.edu")

//3.Is the string a URL? (Does it start with http: or https:?)
var checkURL = function (myURL) {
        var urlCheck = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (myURL.match(urlCheck)) {
            var urlGood = console.log("Perfect! Your URL, " + myURL + ", looks great.");
            return urlGood;
        } else {
            var urlBad = console.log("Oh no! This won't work. Make sure your URL, " + myURL + ", follows the following format:  http://mydomain.com");
            return urlBad;
        }
};
checkURL("https://www.facebook.com/")


//4.Title-case a string (split into words, then uppercase the first letter of each word)
var titleCase = function (words){
	words = words.toLowerCase().replace(/\b[a-z]/g, //Makes all letters in string Lower Case
	function(letter) {
    return letter.toUpperCase(); //Makes first letter of each word Upper Case
	});
	console.log(words); 
};
titleCase("fuLl saIl Rules!");



//5.Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
var fixNumber = function(myNumber) {
    var finalNum = console.log(myNumber.toFixed(2));
    return finalNum;
};
fixNumber(3.0896);



//6.Given a string version of a number such as "42", return the value as an actual Number, such as 42.
var myNum = function(number){
        var finalNum = parseInt(number);
        var output = console.log(finalNum);
        return output;
        };
    
myNum("42");

