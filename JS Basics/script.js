/*
 * Variables and data types
 */
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

/*
Variable mutation and type coercion
*/

var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;
console.log(
  firstName +
    " is a " +
    age +
    " year old" +
    job +
    ". Is he married? " +
    isMarried
);

/* Variable mutation */
age = "twenty eight";
job = "driver";
alert(
  firstName +
    " is a " +
    age +
    " year old" +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);

/*
Basic Operators
*/
var year, yearJohn, yearMark;
var now = 2018;
ageJohn = 28;
ageMark = 33;
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

/*
Logical Operators
*/

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");

var x;
console.log(typeof x);

/**
 * Operator precedence
 */
var now = 2019;
var yearJohn = 1984;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var averageAge = (ageJohn + ageMark) / 2;

/**
 * Multiple assignments
 */
var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

/*
 *More operators
 */

x = x * 2;
x *= 2;

x = x + 1;
x++;

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK ðŸ˜€
*/

var massMark = 78;
var heightMark = 1.68;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's " + markHigherBMI);

/**
 * If-else statements
 */

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will married soon");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will married soon");
}

/**
 * Boolean logic
 */
var name = "Jim";
var ages = 16;
if (age < 16) {
  console.log(name + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(name + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(name + " is a man");
}
