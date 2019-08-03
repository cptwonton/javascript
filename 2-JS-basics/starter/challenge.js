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
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/

/**
 * Function Statements and Expressions
 */

// Function Declaration
/*
function whatDoYouDo(job, firstName) {

}
*/

 // Function Expression
/*var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/**
 * Arrays
 */
/* 
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 1948);

 console.log(names[0]);
 console.log(names.length);

 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

console.log(john.push('blue'));
console.log(john.unshift('Mr. '));
console.log(john);
console.log(john.shift());

console.log(john.pop());
console.log(john);

console.log(john.indexOf(23));

john.indexOf('designer') === -1 ? console.log('not a designer') : console.log('is a designer');

 */

 /**
  * CODING CHALLENGE 3
  * 
  * john went to 3 different restaurants, bills were $124, $48, and $268
  * 20% of bill if under $50
  * 15% if bill is between $50 and $200
  * 10% if bill is more than $200
  * 
  * 2 arrays:
  * one containing all three tip amounts
  * one containing all three final paid amounts
  */

/*   var firstBill = 124;
  var secondBill = 48;
  var thirdBill = 268;

  var tips = [calculateTip(firstBill), calculateTip(secondBill), calculateTip(thirdBill)];
  var total = [firstBill + tips[0], secondBill + tips[1], thirdBill + tips[2]];

  function calculateTip(billAmount) {
      switch (true) {
        case billAmount < 50:
            return billAmount * 0.20;
        case billAmount < 200:
            return billAmount * 0.15;
        default:
            return billAmount  * 0.10;
      }
  }

  console.log(tips);
  console.log(total); */

/**
 * Objects and properties
 */
/* 
 // Object literal
 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false
 };
 console.log(john);
 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);

 john.job = 'designer';
john['isMarried'] = true;
 console.log(john);

 // new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = '1969';
jane['lastName'] = 'Smith';
console.log(jane);  */

/**
 * Objects and Methods
 */

/* var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();

console.log(john);

 */

 /**
  * CODING CHALLENGE 4
  */
 //full name, mass, height
 //method for calculating BMI
 //save BMI to object, return it from method
 //log to console who has highest BMI, along with full name and BMI
 // BMI = mass / height ^ 2
/* 
 var calculateBMI = function() {
     this.BMI = this.mass / this.height**2;
     return this.BMI;
 }

 var john = {
     name: 'John Smith',
     mass: 92,
     height: 1.95,
     calculateBMI: calculateBMI
 }

 var mark = new Object();
 mark.name = 'Mark Derp';
 mark['mass'] = 55,
 mark.height = 1.8;
 mark.calculateBMI = calculateBMI;

 console.log(john, mark);

 console.log(john.calculateBMI());
 console.log(mark.calculateBMI());

 if (john.BMI > mark.BMI) {
     console.log('John has a higher BMI of ' + john.BMI);
 } else if (john.BMI < mark.BMI) {
     console.log('Mark has a higher BMI of ' + mark.BMI);
 } else {
     console.log('John and Mark have the same BMI of ' + john.BMI);
 }
  */

/**
 * Loops and iteration
 */

 console.log(1);

 for (var i = 0; i < 10; i++) {
     console.log(i);
 }







