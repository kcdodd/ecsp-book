var makeCircle = function(specs) {

    var out = {};

    if ("diameter" in specs) {
        // input used diameter , so define radius
        specs.radius = specs.diameter / 2;
    }

    var area = Math.pow(specs.radius, 2) * Math.PI;

    out.radius = function() {
        return specs.radius;
    };

    out.area = function() {
        return area;
    };

    return out;
};