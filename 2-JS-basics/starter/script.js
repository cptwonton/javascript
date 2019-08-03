console.log('derp')

//Multiple assignments
var x, y;
//assignment is right to left, which is why this works
x = y = (3+5) * 4 - 6;
console.log(x, y);

x *= 2;
console.log(x,y);
x--;
console.log(x,y);