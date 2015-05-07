// how many times the increment function was called
var i = 0;

// add one to i every time it's called
var increment = function() {
    i = i + 1;

    return i;
};

increment(); // i -> 1
increment(); // i -> 2
increment(); // i -> 3

var number_of_calls_so_far = i; // -> 3
