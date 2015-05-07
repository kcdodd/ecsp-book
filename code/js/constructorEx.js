var myPerson = makePerson({firstName: "John", lastName: "Doe"});

var sig1 = myPerson.getSignature();
// 'John Doe'

var myPro = makeProfessional({
    firstName: "John", 
    lastName: "Doe",
    title: "CEO"
});

var sig2 = myPro.getSignature();
// 'John Doe, CEO'