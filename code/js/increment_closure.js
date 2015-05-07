
// increasing integers starting from 0
var makeIncrement = function() {
    // how many times the increment function was called
    var i = 0;

    var increment = function() {
        i = i + 1;

        return i;
    };

    return increment;
};

var myIncrement = makeIncrement();

console.log(myIncrement()); // i -> 1
console.log(myIncrement()); // i -> 2

var anotherIncrement = makeIncrement();

console.log(anotherIncrement()); // i -> 1
console.log(anotherIncrement()); // i -> 2
console.log(anotherIncrement()); // i -> 3
console.log(anotherIncrement()); // i -> 4

console.log(myIncrement()); // i -> 3
