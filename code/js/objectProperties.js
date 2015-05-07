/*
 * Adding properties when the object is created
 */

var myObject = { // variable name, =, and open brace on same line.
    // each property on its own line
    // 'var' is NOT used to define properties
    
    aNumber : 3.5, // property name, then colon, then value of property
    
    // a comma is placed after each property until the last one
    
    aString : "some text",
    
    aBoolean: true,
    
    anObject : { // we can put an object literal inside another object literal
        anotherNumber : 98.6
    }
    
    // no comma after the last property
    
}; // a semi-colon after closing brace


// the properties of the object can also be defined on a single line
var anotherObject = {aNumber : 3, aString : "some text"};
