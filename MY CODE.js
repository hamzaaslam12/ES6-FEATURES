// DIFFERENCE BETWEEN VAR AND LET:

/* VAR:
1) Variables declared with the var keyword can not have Block Scope.

2) Variables declared inside a block {} can be accessed from outside the block. 
{ 
    var x = 2;
} 
// x CAN be used here


3) Redeclaring a variable using the var keyword can impose problems.

4) Redeclaring a variable inside a block will also redeclare the variable outside the block:

var x = 10;
// Here x is 10
{ 
    var x = 2;
    // Here x is 2
}
// Here x is 2

5) Using var, the variable declared in the loop redeclares the variable outside the loop.
var i = 5;
for (var i = 0; i < 10; i++) {
    // some statements
}
// Here i is 10

6) Redeclaring a JavaScript variable with var is allowed anywhere in a program:
var x = 2;  // Now x is 2
var x = 3; // Now x is 3

7) Redeclaring a let variable with var, in the same scope, or in the same block, is not allowed:
let x = 2;       // Allowed
var x = 3;       // Not allowed

8) Redeclaring a variable with let, in another scope, or in another block, is allowed:
let x = 2;     // Allowed

{
    let x = 3;   // Allowed
}

9) You can use a variable before it is declared:
var carName;
carName = "ALTO";

*/


/* LET:
1) Variables declared with the let keyword can have Block Scope.

2) Variables declared inside a block {} can not be accessed from outside the block:
{ 
    let x = 2;
}
// x can NOT be used here


3) Redeclaring a variable using the let keyword can solve this problem.

4) Redeclaring a variable inside a block will not redeclare the variable outside the block:

var x = 10;
// Here x is 10
{ 
    let x = 2;
    // Here x is 2
}
// Here x is 10

5) Using let, the variable declared in the loop does not redeclare the variable outside the loop.
let i = 5;
for (let i = 0; i < 10; i++) {
    // some statements
}
// Here i is 5

6) Redeclaring a var & let variable with let, in the same scope, or in the same block, is not allowed:
var x = 2;       // Allowed
let x = 3;       // Not allowed

let x = 2;       // Allowed
let x = 3;       // Not allowed

8) Using a let variable before it is declared will result in a ReferenceError.
// you can NOT use carName here
let carName;

*/


/* CONST

1) JavaScript const variables must be assigned a value when they are declared:
INCORRECT:
const PI;
PI = 3.14159265359;

CORRECT:
const PI = 3.14159265359;

2) You can change the elements of a constant array:

const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");

But you can NOT reassign a constant array:

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

3) Redeclaring or reassigning an existing var or let variable to const,
 in the same scope, or in the same block, is not allowed:

 var x = 2;         // Allowed
const x = 2;       // Not allowed

{
    let x = 2;     // Allowed
    const x = 2;   // Not allowed
}

4) Redeclaring or reassigning an existing const variable,
 in the same scope, or in the same block, is not allowed:

const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed

4) Redeclaring a variable with const, in another scope, or in another block, is allowed:
const x = 2;       // Allowed

{
    const x = 3;   // Allowed
}

5) A const variable is cannot be used before it is declared:
carName = "Volvo";    // You can NOT use carName here

*/

/* Syntax Of map():
      array.map(function(value, index) { return thisValue; });

value: the elements of array on which map is working.

If this parameter is empty, the value "undefined" will be passed as its "this" value

1) It doesnot break.
2) It always return something or if we tell it what to return, it will return.
3) It start from starting point and iterate till end of array length.

EXAMPLE:
arr = [1,2,3,4];
let plus = arr.map((val, i, arr) => {
    return val + 5;
});
ANSWER: plus = [6,7,8,9] */ 


/* Syntax Of some():
function(value, index) {

  //   console.log("index", index);

  return value == someValue;
});

1) It breaks if condition is true.
2) It always return true or false.
3) It start from starting point and iterate till the condition is true.


Syntax of Ternary Operator:
variablename = (condition) ? value1:value2 ;

var voteable = (age < 18) ? "Too young":"Old enough";



















