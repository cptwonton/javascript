///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1965);

// function declaration, gets hoisted
function calculateAge(year) {
    console.log(2016 - year);
}



//function expression, does NOT get hoisted
var calculateRetirement = function(year) {
    console.log(65 - (2016-year));
}

calculateRetirement(1990);












///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









