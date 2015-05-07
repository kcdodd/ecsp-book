var specs = {radius: 2};

var myCircleA = makeCircle(specs);

specs.radius = 3;

var myCircleB = makeCircle(specs);

var areaA = myCircleA.area();
// 12.5663...
var radiusA = myCircleA.radius();
// 3, ut-oh! should be 2!

var areaB = myCircleB.area();
// 28.274...
var radiusB = myCircleB.radius();
// 3