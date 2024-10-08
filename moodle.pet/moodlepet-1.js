// debugging

// 1.calculateArea();
// greetUser();
// function calculateArea() {
//  const radius = 5;
// //  let area;
//  let area = Math.PI * radius * radius;
//  console.log(area);
// }
// function greetUser() {
//  var userName = "John";
//  console.log(userName);

// }




//2. let count = 1;
// while (count <= 100) {
//  console.log("Counting down: " + count);
//  count = count + 1;
// }




// 3.let temperature = 30;
// if (temperature == 20) {
//     console.log("It's cold outside.");
//    } else {
//     console.log("It's warm outside.");
//    }




// 4.checkNumber(-5);
// checkNumber(0);
// checkNumber(10, 20);
// function checkNumber(num) {
//   if (num > 0){
//     console.log("Positive");
//   }
//   else if (num < 0) {
//     console.log("Negative");
//   } else {
//     console.log("Zero");
//   }
// }

// 5. Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers 
// from 1 to n using a while loop

// function sumNumbers(n){
//     let sum=0;
//    let i=0;
//     while(n>=i){
//         sum=sum+i;
//         i++;

//     }
//     return sum;    
// }
// console.log(sumNumbers(6))

//6. Write a function calculateFactorial that takes a number n as a parameter and returns the factorial
//  of that number using a while loop.

// function calculateFactorial(n){
//     let sum=1;
//     let i=1
//     while (n>=i) {
//         sum=sum*i;
//         i++;        
//     }
//     return sum;  

// }
// console.log(calculateFactorial());





// 7. Write a function printEvenNumbers that takes a number n as a parameter and prints all even 
// numbers from 1 to n using a while loop.


// function printEvenNumbers(n){
//     let count=0;
//     let array=0;
//    let  i=1;
//     while(n>=i){
//         i++;
//         if(i%2==0){
//             array=array+1
//              console.log(i); 
//              count=count+i;
//         }


//     }
//     console.log(array);
// }
// printEvenNumbers(10);




// function sumNumbers(n) {
//     let sum = 0;
//     let i = 0;  
//     while (i <=n) {
//       sum += i;
//       i++;
//     }  return sum;
//   }
//   console.log(sumNumbers(2))


// 9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:
// If the number is divisible by 3, return "Divisible by 3".
// If the number is divisible by 5, return "Divisible by 5".
// If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
// If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".


// function classifyNumber(n){
//      if(n%3==0 && n%5==0){
//         return "Divisible by both 3 and 5"
//     }
//        else if(n%3==0){
//          return "Divisible by 3";  
//      }
//     else if(n%5==0){
//         return "Divisible by 5"
//      }
//     else {
//         return "Not divisible by 3 or 5"
//     }

// }
// console.log(classifyNumber(9))


// 10. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding 
// day of the week.

// function nam(a) {
//     switch (a) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuseday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             break;
//     }
// }
// nam(4)


// 11. Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
// For example, if n =5 and r = 6
// Expected O/P
// 5 * 6 = 30
// 5 * 5 = 25
// 5 * 4 = 20
// 5 * 3 = 15
// 5 * 2 = 10
// 5 * 1 = 5

// function printMultiplicationTable(n,r){
//     for(i=1;i<=r;r--){
//         console.log(n+ "*"+r+"="+n*r);

//     }

// }
//  printMultiplicationTable(5,6)




// 12. Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the 
// laps and display the lap number each time the robot completes one.


// let count=0;
// while (count<=10){
//     console.log("lap:"+count); 
//     count++;
// }  



// 13. A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's
//  movement, decreasing the battery level by 5% after each step and displaying the remaining battery level.
//   Once the battery level is below 20%, Display Battery is low.


// let batterylevel=100
// while (batterylevel>=20) {
//     console.log("Battrylevel="+batterylevel);
//     batterylevel=batterylevel-5
//     if(batterylevel<20)  {
//         console.log("Low battery");

//     }  

// }

// 14.A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move 
// in the direction entered by the user and print the robot's new position after each movement

// function nam(n) {
//     switch (n) {
//         case 1:
//             console.log("North")
//             break;
//         case 2:
//             console.log("South")
//             break;
//         case 3:
//             console.log("East")
//             break;
//         case 4:
//             console.log("West")
//             break;

//         default:
//             break;
//     }

// }
// // nam(3)



// 15. An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write
//  a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

// n=1000;
// while (n>0) {
//     console.log(n+"ft")
//     n=n-10
// }
// console.log("Flight arrived");


// 16. Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement 
// to assign the runway depending on the destination entered by the user.

// function run(n){
// // let n="Delhi";
// // runway = "";
// switch (n) {
//     case "Mumbai":
//         runway="runwayR4" ;
//         break;
//     case "Delhi": runway="runwayP6";
//         break;
//     case "Pallavaram":runway="runwayT0";
//         break;
//     case "Avadi":runway="runwayE7" ;
//         break;
//     case "Taj":runway="runwayH4" ;
//         break;
//     default:
//         break;
// }
// console.log(`destination-${n}runway:${runway}`)
// }
// run("Mumbai");



// 17. Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a 
// for loop to display the altitude after each interval.





// function nam(totalaltitude,interval) {
//     let empty=0;
//     total=totalaltitude/interval;
//     for(i=1;i<=interval;i++){
//          empty=empty+total;
//          console.log(`Interval${i} altitude ${empty}ft`);
//      }
// }
// nam(1000,10)




 


























