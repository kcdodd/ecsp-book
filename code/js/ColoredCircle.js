var makeColoredCircle = function (specs) {
    
    var out = makeCircle(specs);
    
    out.getColor = function() {
        return specs.color;
    };
    
    return out;
};