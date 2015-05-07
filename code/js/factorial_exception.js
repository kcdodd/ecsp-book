// computes the factorial of an integer
var factorial = function(n) {

    if (n < 0) {
        throw "factorial undefined for " + n;
    }

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
};

var a = factorial(-1); // -> will cause an uncaught exception
