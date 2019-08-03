/* var markHeight = 1.6;
var johnHeight = 1.8;
var markMass = 51;
var johnMass = 55;

//BMI is mass / height^2, mass in kg and height in meter

//calculate their BMIs
var markBMI, johnBMI;
markBMI = markMass / markHeight**2;
johnBMI = johnMass / johnHeight**2;
//print to console, whether Mark's BMI is higher than John's
console.log('marks BMI:' + markBMI);
console.log('johns BMI:' + johnBMI);
console.log('johns is higher than marks: ' + (johnBMI > markBMI));

*/
/**
 * 5.9 to binary:
 * 5/2 = 2, remainder 1;
 * 2/2 = 1; remainder 0
 * 1/2 = 0; remainder 1
 * 
 * reverse remainders, we get 101;
 * 
 * now, on to the decimal 0.9....
 * 0.9 * 2 = 1.8, integral part is 1
 * 0.8 * 2 = 1.6, integral part is 1
 * 0.6 * 2 = 1.2, integral part is 1
 * .2 * 2 = .4, integral part is 0
 * .4 * 2 = .8, integral part is 0
 * .8 * 2 = 1.6, integral part is 1
 * .6 * 2 = 1.2, integral part is 1
 * .2 * 2 = .4, integral part is 0
 * repeat....
 * 
 * 101.111001100110011001100......
 */

/**
 * If / else statements
 */

 /*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}

var markHeight = 1.6;
var johnHeight = 1.8;
var markMass = 51;
var johnMass = 55;

//BMI is mass / height^2, mass in kg and height in meter

//calculate their BMIs
var markBMI, johnBMI;
markBMI = markMass / markHeight**2;
johnBMI = johnMass / johnHeight**2;
//print to console, whether Mark's BMI is higher than John's
console.log('marks BMI:' + markBMI);
console.log('johns BMI:' + johnBMI);
//console.log('johns is higher than marks: ' + (johnBMI > markBMI));

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is greater than John\'s');
} else {
    console.log('John\'s BMI is greater than Mark\'s');
}

*/

/**
 * Boolean logic
 */

 var firstName = 'John';
 var age = 16;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age < 20) { // between 13 and 20
    console.log(firstName + ' is a teenager.');
 }
 else {
     console.log(firstName + ' is a man.');
 }

