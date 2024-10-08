
// 1. Write a program where a robot must complete 10 laps around a circuit. 
// Use a while loop to count the laps and display the lap number each time the robot completes one.




// function nam(n) {
//     let i=1;
//     while (n>=i) {
//         console.log(`Lap ${i}` )
//         i++;
//     }  

// }
// nam(10)




// 2. A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's 
// movement, decreasing the battery level by 5% after each step and displaying the remaining battery level.
//  Once the battery level is below 20%, Display Battery is low.


// function nam(p) {
//     while (p >= 20) {
//         console.log(p)
//         p = p - 5;
//         console.log(p);
        
//         if (p < 20) {
//             console.log("Low battery")
//         }

//     }

// }
// nam(100)




// 3.A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the 
// robot move in the direction entered by the user and print the robot's new position after each movement.

// function nam(s) {
//     let x=0;
//     let y=0;
// switch (s.lowercase()) {
//     case 1:
//         console.log("West")
//         break;
//     case 2:
//         console.log("East")
//         break;
//     case 3:
//         console.log("North")
//         break;
//     case 4:
//         console.log("South")
//         break;
//     default:
//         break;
// }
// nam(3)
// }




// 4. An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program
//  which will print “Flight arrived” when the airplane altitude reaches 0ft.



// function mam(flight) {
//     while (flight>=0) {
//         console.log( `current altitude ${flight}`)
//         flight=flight-10;
        
//     }
//     console.log("Flight arrived")
    
// }
// mam(1000)



// 5.Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement
//  to assign the runway depending on the destination entered by the user.

//  function fl(flight) {
//     // let a;
//     switch (flight) {
//         case 'Madurai':
//             runway="runwayC4"
//             break;
//             case 'Chennai':
//                 runway="runwayB2"
//                 break;
//                 case 'Mumbai':
//                     runway="runwayP4"
//                     break;
//         default:
//             runway="No runway"
//             break;
//     }
//     console.log(`destination ${flight} runway ${runway}`);
//  }
//  fl('Mumbai')





// 7. Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals.
//  Use a for loop to display the altitude after each interval.


// function nam(totalaltitude,interval) {
//     let currentaltitude=0;
//     let total=totalaltitude/interval;
//     for(i=1; i<=interval; i++){
//         currentaltitude+=total;
//         console.log(`Interval  ${i}  ${currentaltitude} Ft`);
        
//     }
    
// }
// nam(1000,10)














