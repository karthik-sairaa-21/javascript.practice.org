// 1: Parameter-less Function with No Return Type
// Write a function called greet that takes no parameters and simply logs "Hello, world!" to the console.
// - Call the function to see the output in the console.
// Hint: This function doesn't need to return anything, just output to the console.


function greet() {
    console.log("hello world!")
    
}
greet()


// 2: Parameter-less Function with a Return Type
// Create a function named getRandomNumber that takes no parameters and returns a random number between 0 and 1.
// - Call the function and store the result in a variable, then log that variable to the console.
// Hint: You can use JavaScript's built-in Math.random() function.


function getRandomNumber() {
    return(Math.random());
}
let num=getRandomNumber( );
console.log(num)

// 3: Parameterized Function with No Return Type
// Write a function called displayGreeting that takes a `name` as a parameter and logs a greeting message like "Hello, [name]!" to the console.
// - Call the function with different names to display personalized greetings.
// Hint: How can you insert the name variable into a string?

function displayGreeting(name) {
    console.log("hello:" + name);   
}
displayGreeting("karthi");

// 4: Parameterized Function with a Return Type
// Create a function called calculateSquare that takes a number as a parameter and returns its square.
// - Call the function with different numbers and log the results.
// Hint: How would you multiply a number by itself to find its square?

let a=4;
function calculateSquare(a) {
    return a*a;
}