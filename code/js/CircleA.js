var makeCircle = function(radius) {

    var out = {};
    
    var area = Math.pow(radius, 2) * Math.PI;
  
    out.radius = function() {
        return radius;
    };
    
    out.area = function() {
        return area;
    };
    
    return out;
};