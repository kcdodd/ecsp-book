// absolute value function
var absolute = function(x) {

    if (x < 0) {
        return -x;// -(-1) -> 1
    }

    return x; // 1 -> 1
};

var y = absolute(-3.5); // -> 3.5
