// Chapter 1 (Alerts)

// 1. Alert these following (individually):
// I. First Name
    alert("Huzaifa");

// II. Last Name
    alert("Abdul Qadir");

// III. Email
    alert("huzaifaqadir10@gmail.com");

// IV. Phone Number
    alert("0310-6733754");

// V. Password
    alert("pakistan123");

// 2. Correct this statement: alert"You're learning JavaScript!";
    alert("You're learning JavaScript!");

// 3. Code an alert statement displaying any message you like.
    alert("I live in Karachi!");

// Chapter 2 (Variables for string)

// 1. Declare any variable in the camelCase format.
    var myName;

// 2. Declare a variable of your choice without defining it. Then, in a
// second statement, assign it a string of your choice.
    var myName = "Huzaifa"


// 3. Declare the variable teamName and Alert your Team name.
    var teamName = "Pakistan";
    alert(teamName);


// 4. This statement has already been coded. var bestMan = "Charlie";
// Assign the variable a new string.
    var bestMan = "Charlie";
    var bestMan = "Huzaifa;";


// Chapter 3 (Variables for numbers)

// 1. Declare a variable “caseQty”
        var caseQty;

// 2. Assign to the variable caseQty, which has already been declared,
// the value 144.
        var caseQty = 144;

// 3. Rewrite this statement so the variable can be used in a math
// operation. var num = "9";
        var num = 9;

// 4. In one statement declare a variable. In a second statement assign
// it the sum of 2 numbers.
        var total = caseQty + num;
    
// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.
    var merchTotal = 100;
    var shippingCharge = 10;
    var orderTotal = merchTotal + shippingCharge;
    console.log(orderTotal);

// 6. In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number.
    
    var num = 1;
    var num = num + 1;
    console.log(num);

// Chapter 4 (Variable names Legal and Illegal)
        
// 1. Correct this statement.
// var product cost = 3.45;
    var productCost = 3.45;

// 2. Rewrite this using camelCase.
// var Nameofband;
    var nameOfBand;

// 3. In a single statement declare a legally-named variable and assign a
// number to it.
    var myNumber = 1;

// 4. Declare a variable that is a combination of your first and last
// names. Use camelCase.
    var firstName = "Huzaifa";
    var lastName = " Abdul Qadir";
    var myName = firstName + lastName;
    console.log(myName);

// 5. List the legal and Illegal Variables.

// Legal Variables:

myVariable
user123
_example
name
_count
$total
firstName
lastName
user_age
let, const, varName

// Illegal Variables:

123variable
2ndPlace
user name
my variable
total#amount
user@name
let, if, for

// Chapter 5 (Math Expression I)

/* 1. What is the name and symbol of the arithmetic operator that
 gives you the remainder when one number is divided by another?*/
The name of arithmetic operator is modulus and is represented by %.

// 2. What is the value of num?
// var num = 20 % 6;
    var num = 20 % 6;
    The output is 2

// 3. In a single statement, declare the variable largeNum and assign it
// the result of 1,000 multiplied by 2,000.
    var largeNum = 1000 * 2000;

// 4. Assign to a variable the value represented by one variable
// subtracted from the value represented by another variable.
    var a = 10;
    var b = 20;
    var result = a - b;

// 5. Assign to a variable the remainder when one number is divided by
// another. The variable hasn't been declared beforehand. Make up
// the variable name.
    var num1 = 10;
    var num2 = 20;
    var calc = num1 % num2;

// 6. Code an alert that displays the result of a multiplication on 2
// numbers.
    var num1 = 10;
    var num2 = 20;
    alert( num1 * num2 );

// Chapter 6 (Math Expression II)

// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.
    var x;
    x += 1;
    x++;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?
    var x = 100;
    --x;


// 3. var x = 50;
// var y = x++;
// What is the value of y?
    The value of y is 50

// 4. var y = 50;
//    var z = --y;
// What is the value of z?
    The value of z is 49

// 5. In a single statement, decrement num and assign its original value
// to newNum.
    var num = 10;
    var newNum = num--;

// 6. In a single statement add 1 to a variable and assign its original
// value to another variable.
    var num = 10;
     num += 1;
     var newNum = num;

// 7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert 
    var num = 10;
    newNum = ++num;
    alert(newNum);

// Chapter 7 (Math Expression III)

// 1. var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?
    The output is 14. 

// 2. var calculatedNum = (2 + 2) * 6;
// What is the value of calculatedNum?
    The output is 24. 

// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?
    The output is 24. 

// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?
    The output is 18. 

// Note: Try all the above equations yourself.
// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 56.
    var calculatedNum = (2 + 2) * (4 + 10);

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 20.
    var calculatedNum = (2 + (2 * 4)) + 10;

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
// clarified with parentheses, producing 5.
    var calculatedNum = (4 / 2) * 4;


// Chapter 8 (Concatenating Text Strings)
    
// 1. var num = "2" + "2";
// What is the value of num? Include quotation marks.
    var num = "2" + "2"
    console.log(num) 
// The output is 22.

// 2. message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement
    var message = ("Hello," + "Dolly");
    alert(message);
//  The output is Hello,Dolly

// 3. alert("33" + 3);
// What message displays in the alert box?
    alert("33" + 3);
//   The output is 333.

// 4. Write an alert that displays the concatenation of the two parts of
// "Pakistan Zindabad".
    alert("Pakistan" +" Zindabad.");

// 5. Write a statement that assigns to a variable the concatenation of
// a string with a number.
    var con = "332" + 3;
// The output is 3323

// 6. Assign strings to two variables. Then concatenate them and assign
// the result to a third variable.
    var str1 = "H";
    var str2 = "Q";
    var str = str1 + str2;
    console.log(str);

// Chapter 9 (Prompts)

// 1. Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
    var firstName = prompt("Enter first name");

// 2. Code a prompt with the message "Country?" and the default
// answer "China". The user's response is assigned to country.
    var country = prompt("Country?", "China");

// 3. Correct this statement
// var yourName = prompt(Enter Your Name");
    var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a
// default input.
    var name = prompt("Enter your name","Huzaifa");

// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.
    var name1 = "Enter your name";
    var name2 = "Huzaifa";
    var name3 = prompt(name1, name2);

// 6. Display a prompt, including both a message and a default
// response.
// Display the user's response in an alert.
    var name1 = "Enter your name";
    var name2 = "Huzaifa";
    var name3 = prompt(name1, name2);
    alert("My name is " + name3);

// Chapter 10 (if statments)

// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself
    var city = "Karachi"
    if (city == "Karachi") {
    console.log("The City OF Lights")
    }



// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.
    var x = 10
    var y = 10

    if (x === y) {
        var z = prompt("What is the value of Z");
        } 

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")

    var zipCode = 10010;

    if (zipCode===10010) {
        alert("Karachi");
    } else {
        alert("Please write correct city");
    }

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
x = 1;
if (x===1) {
    alert("Numerical value has been changed");
    var x = 19999
} else {
    alert("Numerical has not been changed")
}
// Chapter 11 (Comparison Operators)
    
// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)
    var a = 10; 
    var b = 10; 
    if (!(a===b)) {
        console.log("Equal");
    } else {
        console.log("Not Equal");
    }

// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.
    var a = 15;
    var b = 10;
    if (a > b) {
        console.log("a is greater than b");
    }

// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.
    var a = 9
    if (a!==10) {
        var a = 20;
    }
    console.log(a);

// 4. Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.
    var a = 10;
    var b = 15;
    if (a!==b) {
        alert("Congratulation");
    }

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No
// match"

var firstName = prompt("Enter your first name");
var anotherName = "Huzaifa";
if (firstName!== anotherName) {
    alert("No Match");
}

// Chapter 12 (if...else and else if statements)
    
// 1. Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.
    var x = 10;
    var y = 10;
    if (x===y) {
        alert("Varaibles are equal");
    } else  {
        alert("Varaibles are not equal");
    }

/*2. Write a program using if else and else if statement which take
marks from user. And the program will calculate your percentage
and give you grade A/C to Your percentage. (MARKSHEET)*/

var subject1 = parseInt(prompt("Enter your marks"));
var subject2 = parseInt(prompt("Enter your marks"));
var subject3 = parseInt(prompt("Enter your marks"));
var totalMarks = subject1 + subject2 + subject3
var percentage = (totalMarks/300)*100;
if (percentage >="80") {
    alert("You got A+");
} else if (percentage <= 79 && percentage >=70 ) {
    alert("You got A");
} else if (percentage <= 69 && percentage >=60 ) {
    alert("You got B");
} else if (percentage <= 59 && percentage >=50 ) {
    alert("You got C");    
} else if (percentage <= 49 && percentage >=40 ) {
    alert("You got D");
} else {
    alert("You failed");
}     

// 3. This is the if statement that begins the code.
// if (a === 10) {
// alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// ____
// Note: Try this by yourself
var a = parseInt(prompt("Enter a"));
if (a === 10) {
    alert("a is 10");
    } else {
        alert("The correct value of a is 10")
    }


// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.

var city = prompt("Enter city name");
if (city==="Karachi") {
    alert("It is Karachi");
} else if (city==="Lahore") {
    alert("It is Lahore");
} else {
    alert("It is unknown ctiy");
}

// Chapter 13 (Testing sets of conditions)
    
// 1. Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.

var a = 10;
var b = 10;
var c = 10;
var d = 10;
if (a===b && c===d) {
    console.log("true");
} else {
    console.log("false");
}    
// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn't have the
// same value as d.
var a = 10;
var b = 10;
var c = 9;
var d = 10;
if (a===b || c===d) {
    console.log("true");
} else {
    console.log("false");
} 

// 3. Code the first line of an if statement that tests whether
// I. name is either "Hamza" or "Arsalan".
// II. age is Less than 60.

var name = prompt("Enter name");
var age = prompt("Enter age");
if (name==="Hamza"||name==="Arsalan" && age<60) {
    console.log("Verified")
}

// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than
// the second variable, display an alert.
var a = 10;
var b = 15;
if (a>b||a<b) {
    alert("The condition is true");
}

// 5. Declare 2 variables. Assign one of them your first name and the
// other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.

var firstName = "Huzaifa"; 
var lastName = "Abdul Qadir";
var fname = prompt("Enter first name");
var lname = prompt("Enter last name");
if (fname===firstName && lname===lastName) {
    alert("Matched Successfully");
} else {
    alert("Match Not found")
}

// Chapter 14 (If statements nested)
// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says "Password must be greater than 5" if greater
// than 5 then Alert "OK".

var password = prompt("Enter your password");
if (password!=="") {
    if (password.length <= 5) {
        alert("Password must me greater than 5");
    } else {
        alert("OK");
    }
}

// 2. Try this statement by yourself
// if (a === 1) {
// if (c === "Max") {
// alert("OK");
// }
// }
var a = 1
var c = "Max"
if (a === 1) {
    if (c === "Max") {
    
    alert("OK");
    }
}

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) {
// if (c === "Max") {

// alert("OK");
// }
// }

if (a===1 && c==="Max") {
    alert("OK");
}


// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.

var num1 = 10;
var num2 = 10;

if (num1 === num2) {
  if (num1 <= num2) {
    alert("Conditions passed: Equal and less than or equal");
  }
}

// Chapter 15 (Array I)

// 1. Declare an empty array.
    var array = [];

// 2. Code an array with 1 string element
    var array = ["Huzaifa"];

// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert
// using array index
    var alphabet = ["h","i","j","k"]
    alert(alphabet[2]);

// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total
// length of array.
    var alphabet=["h","i","j","k", "l","m", "n", "o"]
    console.log(alphabet.length);

// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.
    var array = ["a"];
    array[1] = "b";
    alert(array[1]);

// Chapter 16 (Array II)

// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.
    var array = ["a"];
    array.push("b");
    alert(array[1]); 



// 2. var Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet.
    var Alphabet = ["h","i","j","k"];
    Alphabet.pop();


// 3. var Alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.
    var Alphabet=["h","i","j","k"]
    Alphabet.push(1);

// Chapter 16 (Array III)

// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.
    var sizes = ["S", "M", "XL", "XXL", "XXXL"];
    sizes.shift();

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.
    var sizes = ["S", "M", "XL", "XXL", "XXXL"];
    sizes.unshift("A", "B", "C");

// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.
    var array = ["B"];
    array.unshift("A");
    alert(array[0]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".
    var sizes = ["S", "M", "XL", "XXL", "XXXL"]
    sizes.splice(2, 0, "L")

// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.
    var sizes = ["S", "M", "XL", "XXL", "XXXL"];
    var regSizes = sizes.slice(0,3);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
    var pets = ["dog", "cat", "ox", "duck", "frog"];
    pets.splice(1, 0, 2);
    pets.splice(1,3);

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".
    var pets = ["dog", "cat", "ox", "duck", "frog"];
    pets.splice(1, 2);

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.
    var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
    var pet1 =  pets.slice(3, 5);



// Chapter 17 - 20 (for Loops)

// 1. Write a statement in which loop is to run 10 times.
    for ( i=1; i<=10; i++ ) {
        console.log(i)
    }

// 2. Code the first line of a for loop with the usual counter name, usual
// starting value, and usual increment. Run it 12 times using <= to
// specify how many loops.
    for (i=1; i<=12; i++) {
        console.log(`Iteration:${i}`);
    }
// 3. What are the 5 characters missing from this code, excluding any
// spaces that are missing? Type them in order, with no spaces or
// commas between them.
// for var i = 0 i <= 4 i++
// Note: Complete this statement by yourself
    for (var i=0; i <= 4; i++) {
    }

// 4. Code the first line of a for loop with a counter name that's not i.
// Code the usual starting value and usual increment. Run it 100
// times using < to specify how many loops.

    for (counter=1; counter<=100; counter++) {
        console.log(`Iteration:${counter}`);
    }


// 5. Code the first line of a for loop with the usual counter and the
// usual starting value. Run it 3 times using > to specify how many
// loops. Decrement it with each iteration.
    for (i=3; i>0; i--) {
        console.log(`Iteration: ${i}`);
    }


// 6. The statement assigns the number of elements in the array to the
// variable.
    var flag = [];
    flag.length

// 7. Set a variable named “flag” with an initial Boolean value of your
// choice.
var flag;
for (i=0; i<flag.length; i++) {

}

// 8. Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array pets.
    var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
    for (i=0; i<pets.length; i++) { 
        console.log(`Pets:${pets[i]}`);
    }

// 9. Coding Exercise:
// Set a for loop to run 10 iterations.
// On the second iteration, display the counter in an alert. (It should
// be 1.)
// Break out of the loop.
    for (i=0; i<=10; i++) {
        if(i===2) {
            alert("1");
            break;
        }
    }


// 10. Create an array which contains user names
// Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array user names.
// Code an if statement that tests the presense of (user name) in an
// array.

// If user name match Alert that "Enter". if not then alert ("Please
// write correct user name").

var userNames = ["Huzaifa", "Abuzar", "Bilal", "Hassan", "Zaman"];
var firstName = prompt("Enter first name");
for (i=0; i<userNames.length; i++) {
    if (firstName===userNames[i]) {
        alert("Enter");
        break;
    } else {
        alert("Please correct the username");
    }
}




// 11. Complete this code to display an alert if a match isn't found.
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
// if (userInput === list[i]) {
// alert("Match found");
// matchFound = true;
// break;
// }
// };
var list = ["list1", "list2", "list3"]
var userInput = prompt("enter list");
var matchFound = false;
for (var i = 0; i < list.length; i++) {
if (userInput === list[i]) {
alert("Match found");
matchFound = true;
break;
    } 
};
if (!matchFound) {
    alert("Match is not found");
}   
// 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
// var secondArr = [1, 2, 3, 4, 5, 6];
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array firstArr.
// In the scope of main loop Code the nested loop. Limit the number
// of nested loops by the number of elements in the array
// secondArr.
// After that concatenate the both loops.
// Expected Output:
// a1
// a2
// a3
// a4
// ...
// f6

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (i=0; i<firstArr.length; i++) {
    for(j=0; j<secondArr.length; j++) {
        console.log(`Iterations: ${firstArr[i]+secondArr[j]}`);
    }
}