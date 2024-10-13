// 1.Average of Scores
// Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.


// let a=[22,3,44,55,21]
// let average=0
// for(i=0;i<a.length;i++){
//            average+=a[i]
// }
// console.log(average/a.length);





//2. Finding Maximum Score
// You have an array of test scores for 7 students. Write a program to find and print the highest score using 
// the Math.max() function along with the spread operator.




// let a=[22,33,44,55,66]
// let total=a[0];
// b=a.length;
// for(i=1;i<b;i++){
//            if(total<a[i]){
//             total=a[i]
//         }
// }
// console.log(total);





// 3.Number System Conversion
// Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent 
// using the toString(2) method and print the binary values.




// let a=[5,10,15]
// b=[]
// for(i=0;i<a.length;i++){
//      d=a[i].toString(2);
//      b.push(d)
// }
// console.log(b);





// 4.Boolean Algebra (AND Operation)
// Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]).
//  Perform an AND operation on corresponding elements from both arrays and store the result in a new array. 
//  Print the resulting array.


// d=[]
// a=[true, true, true] 
//  b=[false, true, true]
//  for(i=0;i<a.length;i++){
//     f=a[i] && b[i]
//     d.push(f)
//  }
//  console.log(d);



// 5.Percentage Increase in Prices
// Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate 
// and print the percentage increase for each item.


// a=[22,33,44,55]
// b=[73,44,45,76]
// j=[]
// for(i=0;i<a.length;i++){
//     d=((b[i]-a[i])/a[i])*100
// console.log(Math.floor(d)+"%");
// }





// 6.Set Theory (Union of Two Sets)
// Write a program that takes two arrays of numbers representing two sets. Create a new array that 
// represents the union of both sets (without duplicates) and print the result.


// a=[7,4]
// b=[2,4]
// c=[]

// for(i=0;i<a.length;i++){
//        if(!c.includes(a[i])){
//          c.push(a[i]);
//        }
// }
// for(i=0;i<b.length;i++){
//    if(!c.includes(b[i])){
//       c.push(b[i])
//    }
// }
// console.log(c);



 


// 7.Finding the Mode (Most Frequent Element)
// Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers.
//  If there are multiple modes, print any one of them.











// 8.Modulus Operation for Time Calculation
// Create an array of times (in minutes) that different tasks take to complete. Write a program to find out 
// how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators, 
// and save the result in the same array. Print the array.


// a=[20,44,55,77,120]
// b=[]
// for(i=0;i<a.length;i++){
//    mintues=a[i]
//    hours=Math.floor(mintues/60);
//    min=mintues%60;

// b.push(`${hours} and ${min} mins`)
// }
// console.log(b);




// 9.Simple Interest Calculation
// Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. Find the 
// simple interest for each array object and store it in a new array. Print this array.
// For example: 
// details = [
// { principal : 10000, rateOfInterest : 5, noOfYears: 4},
// { principal : 15000, rateOfInterest : 4, noOfYears: 3},
// ]
// Output:
// [ 2000, 1800 ]



// simple_intrest=[]
// details = [
//      { principal : 10000, rateOfInterest : 5, noOfYears: 4},
//      { principal : 15000, rateOfInterest : 4, noOfYears: 3},
//      ]
//   for(i=0;i<details.length;i++){
//     intrest=details[i].principal*details[i].rateOfInterest*details[i].noOfYears/100;
//     simple_intrest.push(intrest)
//   }
//   console.log(simple_intrest);
  
     






//10. Calculating Total Marks of Students 
// You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks,
//  and subject3Marks. Write a program to calculate the total marks for each student and store them in a new array. 
//  Print the new array.
// Example:
// students = [
// { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
// { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
// ]
// Output:
// [ 240, 175 ]

// students = [
//     { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//     { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
//     { subject1Marks: 33, subject2Marks: 40, subject3Marks: 6 },
//     { subject1Marks: 62, subject2Marks: 5, subject3Marks: 75 },
//     ]
//  new_arrays=[];
//         for(i=0;i<students.length;i++){
//        const  sum = students[i].subject1Marks + students[i].subject2Marks + students[i].subject3Marks;
//             new_arrays.push(sum)
//         }
// console.log(new_arrays)





// 11.Calculating Total Monthly Expenses
// You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities.
//  Write a program to calculate the total monthly expense for each object and store it in a new array. Print the
//   new array.
// Example:
// expenses = [
// { rent: 1000, groceries: 500, utilities: 200 },
// { rent: 800, groceries: 400, utilities: 150 },
// ]
// Output:
// [ 1700, 1350 ]


expenses = [
   { rent: 1000, groceries: 500, utilities: 200 },
   { rent: 10, groceries: 10, utilities: 10 },
   ]

a=[]
sum=0
for(i=0;i<expenses.length;i++){
sum=expenses[i].rent+expenses[i].groceries+expenses[i].utilities
a.push(sum)
}   
console.log(a)