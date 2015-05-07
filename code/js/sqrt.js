// computes the approximate positive square root of a number
var sqrt = function(x) {
    var guess = 0.5 * x;
    var max_error = 0.001;

    while(absolute(guess*guess - x) > max_error) {
        guess = 0.5 * (guess + x/guess);
    }

    return guess;
};

var y = sqrt(2); // -> 1.4142156...
// exact square root of 2 is closer to 1.4142135...
