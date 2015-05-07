var curNum = 86;
var myRand = BadRandom.make({seed: curNum});

curNum = myRand.next();
// 61
curNum = myRand.next();
// 36
curNum = myRand.next();
// 11
curNum = myRand.next();
// 86
curNum = myRand.next();
// 61, it's repeating already, not very random