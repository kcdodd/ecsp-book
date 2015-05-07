/**
 * @param specs {radius:number} or {diameter:number}
 * @returns {radius:function, area:function}
 */
var makeCircle = function(specs) {

    var out = {};
    var radius;
    var area;
    
    if ("diameter" in specs) {
        // input used diameter , so define radius
        radius = specs.diameter / 2;
    }else{
        radius = specs.radius;
    }
    
    area = Math.pow(radius, 2) * Math.PI;
  
    out.radius = function() {
        return radius;
    };
    
    out.area = function() {
        return area;
    };
    
    return out;
};