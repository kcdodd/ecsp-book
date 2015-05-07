// random integers between 0 and 100
var BetterRandom = {
    make : function (specs) {
        return BetterRandom.extend(specs).out;
    },
    
    extend : function(specs) {

        // extend from the generator we already have
        var random = BadRandom.extend(specs);
        
        // make some changes to the constants
        
        // a-1 divisible by all factors of m = 100 (2x2x5x5)
        random.hide.a = 341; // a-1 = 2x2x5x17 -> a = 341: 
        
        // c and m relatively prime
        random.hide.c = 143; // c = 11x13 = 143

        return random;
    }
};