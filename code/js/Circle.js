var makeCircle =  function(specs) {
        
    var out = {};

    var area = Math.pow(specs.radius, 2) * Math.PI;

    out.radius = function() {
        return specs.radius;
    };

    out.area = function() {
        return area;
    };

    return out;
};