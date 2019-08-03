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

 /*
 var firstName = 'John';
 var age = 16;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age < 20) { // between 13 and 20
    console.log(firstName + ' is a teenager.');
 } else if (age < 30) {
    console.log(firstName + ' is a young man.');
 }
 else {
     console.log(firstName + ' is a man.');
 }

*/

/**
 * The Ternary Operator and Switch Statements
 */

 /*
 var firstName = 'John';
 var age = 16;

 console.log(firstName + ((age >= 18) ? ' would like a beer.' : ' would like a juice box.'));

var job = 'driver';

switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age < 30:
        console.log(firstname + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/

/**
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values
/*
 var height;

 height = 23;

 if (height || height === 0) {
     console.log('Variable is defined.');
 } else {
     console.log('Variable has NOT been defined.');
 }

// Equality operators
if (height == '23') {
    console.log('The == does type coercion!');
}
*/
/*
var johnAverage = (89+120+103)/3;
var mikeAverage = (116+94+123)/3;
console.log(johnAverage, mikeAverage);

if (johnAverage === mikeAverage) {
    console.log('it\'s a tie! Score is : johnAverage');
} else if (johnAverage > mikeAverage) {
    console.log('John\'s team has won! Final average: ' + johnAverage);
} else {
    console.log('Mike\'s team has won! Final average: ' + mikeAverage);
}
*/

/**
 * Functions
 */












