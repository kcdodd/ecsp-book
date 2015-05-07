var x = 1;
var divisor = 1;

while(x < 5) {

    if (x % divisor === 0){
        x /= divisor;
        divisor++;
    }

    x++;
}
