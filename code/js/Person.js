var makePerson = function(specs) {

    var out = {};
    var first = specs.firstName;
    var last = specs.lastName;
   
    out.getSignature = function () {
        return first + " " + last;
    };
    
    return out;
};