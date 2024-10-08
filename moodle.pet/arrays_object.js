// 1. Push Multiple Elements
// Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array




// a=["red","orange"]
//  a.push("fi","yy")
//  console.log(a);



//  2. Shift Multiple Times
// Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, and print the array after 
// each removal.
 
// a=["red","orange","juice","mango","papaya"]
// for(i=0;1>=i;i++){
//     a.shift();
// }
// console.log(a);


// 3. Unshift with Multiple Arguments
// Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the beginning 
// in a single line and print the array.


// a=["football","kabadi","circket"]
// a.unshift("cocco","basketball","bike")
// console.log(a);


// 4. Find Non-Existing Element with indexOf()
// Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.

// a=["football","kabadi","circket"]
// b=a.indexOf("football")
// console.log(b);





// 5. Split String with Different Delimiter
// Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.




// array="html-css-java";
// b=array.split("-")
// console.log(b);




// 6. Reverse Order of Array Using pop()
// Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in
//  a new array in reverse order. Print the reversed array.


let a=[1,2,3,4]
b=[]
for(i=0;0<a.length;i++){
    n=a.pop()
    b.push(n);
    
}
console.log(b);




// 7. Joining Array Elements Without a Separator
// Create an array of 4 fruits. Use join() without any separator to combine the array elements into 
// a single string and print the result.




// fruits=["apple","manngo","orange","grape"]
// b=fruits.join(", ")
// console.log(b);





// 8. Object with Simple Properties
// Write a program to create an object car with properties make, model, and year. Print the model of the car.


// const car={
//          make:"steel",
//          model:"10mac",
//          year:1010
//  };
//  console.log(car.make);





// 9. Array of Objects (Books)
// Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book.




// const books={
//             title:"blue umberlla",
//             author:"karthi"
// }; console.log(books["title"]);





// 10. Adding New Property to Objects in an Array  
// You have an array of 4 objects, each representing a car with properties brand and model. Write a program 
// to add a new property year to each object and assign a value, then print the updated array.

//    Example:
//    cars = [
//      { brand: "Tata", model: "Nano" },
//      { brand: "Honda", model: "Civic" }
//    ]
//     Output:
//     cars = [
//      { brand: 'Tata', model: 'Nano' , year: '2009' },
//      { brand: 'Honda', model: 'Civic', year: '2021' }
//    ]




// const cars = [
//           { brand: "Tata", model: "Nano" },
//           { brand: "Honda", model: "Civic" }
//        ]
//    for(i=0;i<cars.length;i++){
//           cars[i].year=2023
//           cars[1].year=2021
//    }
//    console.log(cars);
   
       


// 11. Summing Object Property Values in an Array  
//    You have an array of 3 objects, each representing a product with properties name and price. Write a
//  program to calculate and print the total price of all the products in the array.

//    Example:
//    products = [
//      { name: "Laptop", price: 800 },
//      { name: "Phone", price: 500 },
//    ]
//     Output:
//    1300


// products =[
//           { name: "Laptop", price: 800 },
//           { name: "Phone", price: 800 },
//           { name: "Phoe", price: 800 },
//         ]

// total=0
// for(i=0;i<products.length;i++){
//     total+=products[i].price
// }
// console.log(total);

    


// 12. Finding an Object by Property Value in an Array  
//    You have an array of 5 objects, each representing a student with properties name and grade.
//  Write a program to find and print the name of the student whose grade is "A".

//    Example:
//    students = [
//      { name: "Amar", grade: "A" },
//      { name: "Akbar", grade: "B" },
//      { name: "Anthony", grade: "A" },
//    ]
//    Output:
//    [ 'Amar', 'Anthony' ]



// students = [
//           { name: "Amar", grade: "A" },
//           { name: "Akbar", grade: "B" },
//           { name: "Anthony", grade: "A" },
//           { name: "karthi", grade: "A" },
//           { name: "Ramya", grade: "A" }
//         ]

//         for(i=0;i<students.length;i++){
//             if(students[i].grade=="A"){
//                 console.log(students[i].name);
//             }
//         }





