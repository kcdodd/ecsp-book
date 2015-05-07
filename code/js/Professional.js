var makeProfessional = function(specs) {

    var out = makePerson(specs);
    
    var title = specs.title;
    
    // store the original method privatly before it's overwritten
    var super_getSignature = out.getSignature;
    
    // overwrite method
    out.getSignature = function () {
        // can still re-use previous definition because we saved it
        return super_getSignature() + ", " + title;
    };
    
    // add new method
    out.earnMoney = function () {
        return "cha-ching!";
    };
    
    return out;
};