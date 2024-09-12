// Create two string variables: firstName and lastName, and assign them your first and last names.
//  Then, create a third variable called fullName that concatenates the two strings with a space in between.
// Log fullName to the console.
// Hint: You can use the + operator to join strings.


// firstName="karthi";
// lastName="keyan";
// fullName=firstName+""+lastName;
// console.log(fullName);


// mam question
// 1. Greet a User by Name Write a program that takes a user’s first name and last name as separate variables and prints a 
// greeting using string concatenation. For example, if the user’s
//  first name is "John" and last name is "Doe", the program should print: "Hello, John Doe!".

// let firstName="john";
// let lastName="Doe";
// let fullName=firstName+" "+lastName;
// console.log("Hello,"+fullName)


// 2. Create a Full Sentence from Variables
// You have three variables: subject, verb, and object. Concatenate them to form a complete sentence.
//  For example, if subject = "The cat", verb = "chased", 
// and object = "the mouse", the output should be: "The cat chased the mouse.".

// let subject="The cat"
// let verb="chased"
// let object="the mouse"
// let end=subject+ " "+verb+" "+ object;
// console.log(end)

// 3. Form a Sentence About a Favorite Activity
// Ask the user for their name and favorite hobby. Create a sentence that 
// says: "Hello [name], your favorite hobby is [hobby].". For example, if the user inputs "Alice"
//  and "painting", the result should be: "Hello Alice, your favorite hobby is painting.".
a="Alice,"
b="painting"
console.log("Hello"+" "+a+"your favorite hobby is"+" "+b)





// 4. Combine Two Sentences
// You have two strings stored in variables. Concatenate them into a single string. 
// For example, if str1 = "JavaScript is fun" and str2 = "and
//  very useful.", concatenate them to produce: "JavaScript is fun and very useful.".
let can="Javascriptis fun ";
let van="and very useful."
let f=can+van;
console.log(f);


// 5. Create a Simple Introduction Write a program that takes two variables,
//  name and age, and forms a sentence that introduces 
// the person. For example, if name = "Emma" and age = 25, 
// the program should print: "Hi, my name is Emma and I am 25 years old."

let nam ="emma";
let age=23;
console.log(`Hi, my name is ${nam} and I am ${age} years old`);




// 6. Create a URL from Parts
// You have three variables: protocol, domain, and path. Use string concatenation to form a 
// complete URL. For example, if protocol = "https", domain = "example.com", and path = "/about",
//  the result should be: "https://example.com/about".

let protocol="https://"
let domain="example.com"
let path="/about"
console.log(protocol+domain+path)



// 7. Form a Product Description
// Write a program that takes two variables, product and price, and creates a sentence
//  describing the product. For example, if product = "laptop" 
// and price = "$800", the result should be: "This laptop costs $800.".


let product="laptop";
let price="$800.";
let result=("This "+product+" costs "+price)
console.log(result);



// 8. Favorite Movie Description
// Ask the user for their favorite movie and year of release. Use concatenation to print a sentence that
//  says: "Your favorite movie is [movie] which was released in [year].".

m="three";
y=3;
both=`Your fav movie is  ${m} which was released in  ${y}`
console.log(both);


// 9. Create a Sentence with a Time and Place You have two variables: time and place. Concatenate them into a 
// sentence like:  "The meeting is at [time] in [place]." For example, if time = "3 PM"
//  and place = "the conference room", the result should be: "The meeting is at 3 PM in the conference room.".
let time="3 PM ";
let place="the conference room"
let around=`The meeting is at ${time}in ${place} `
console.log(around);





// 10. Form a Basic Mathematical Statement
// Take two variables, num1 and num2, and use string concatenation to form a simple mathematical statement.
//  For example, if num1 = 5 and num2 = 10, the result should be: "5 plus 10 equals 15.".

let num1=5;
let num2=10;
let correct=`${num1} plus ${num2} equals 15`
console.log(correct);
