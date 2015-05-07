// random integers between 0 and 100
var BadRandom = {
    make : function (specs) {
        // only return 'out' object
        return BadRandom.extend(specs);
    },
    
    extend : function(specs, hide) {

        var out = {}, hide = {};
        
        hide.a = 12345;
        hide.c = 67891;
        hide.m = 100;
        hide.last = specs.seed;

        out.next = function () {
            hide.last = (hide.a * hide.last + hide.c) % hide.m;
            
            return hide.last;
        };

        // return both objects because someone 
        // might want to use or alter the hidden information
        return {out:out, hide:hide};
    }
};