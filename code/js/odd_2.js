
var myNumber = 321;
var halfInteger;

if (myNumber % 2 === 0) {
    console.log(myNumber + " is even.");
    halfInteger = myNumber/2;
} else {
    console.log(myNumber + " is odd.");
    halfInteger = (myNumber - 1)/2;
}

console.log(halfInteger + " is half integer.");
