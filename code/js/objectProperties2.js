/*
 * Adding properties after the object is created
 */

// start with an empty object
var thirdObject = {};

// properties are added when they are referenced on the object.

// refering to a property with the dot notation
thirdObject.aNumber = 3;

// refering to a property using the bracket notation
thirdObject["aString"] = "some text";

var stringVariable = "aBoolean";

// use a variable that has a string value to get the property
thirdObject[stringVariable] = true;