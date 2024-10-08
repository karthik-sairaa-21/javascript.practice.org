// 1.Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of 
// a train in 24-hour format, find the earliest train to depart.


// train_departures=[10, 15, 7, 20, 5]
// b=train_departures[0]
//     for(i=1;i<train_departures.length;i++){
//         if(b>train_departures[i]){
//             b=train_departures[i]

//         }
//     }
// console.log(b);
    

// 2.Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is
//  available, count the total number of available seats.

// seats = [1, 0, 1, 1, 0, 0, 1, 0]
// total=0;
// for(i=0;i<seats.length;i++){
//     if(seats[i]==0){
//         total+=1
        
   
//     }
//     // else{
//     //     console.log("seats is booked");
        
//     // }

// }
// console.log(`total ${total} are avaiable`); 



// 3.Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers
//  assigned to different regions, find the region with the highest number of soldiers.

// soldiers = [120, 300, 250, 180, 150]
// a=soldiers.length;
// b=soldiers[0]
// for(i=1;i<=a;i++){
//     if(b<soldiers[i]){
//         b=soldiers[i]
//     }
// }
// console.log(b);



// 4.Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian 
// state over the last 5 years, calculate the average population.

// populations = [50, 60, 70, 80, 90]
// let a=populations.length;
// let total=0;
// for(i=0;i<a;i++){
//     total+=populations[i]
   
    
// }
// console.log(total/a);



// 5.Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level 
// in a tank, find the tank with the lowest water level.

// water_levels = [30, 50, 20, 40, 60]
// sum=water_levels[0];
// b=water_levels.length;
// for(i=1;b>=i;i++){
//     if(sum>water_levels[i]){
//         sum=water_levels[i]
        
//     }
// }
// console.log(sum);



// 6.Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of
//  days left until an important festival, find the closest upcoming festival.

// days_until_festival = [30, 15, 45, 10, 25]
// c=days_until_festival.length
// sum=days_until_festival[0]
// for(i=1;c>=i;i++){
//     if(sum>days_until_festival[i]){
//         sum=days_until_festival[i]
//     }   
// }console.log(sum)



// 7.Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is 
// scheduled to land, check if any two helicopters are scheduled to land at the same time.


// landing_times = [ 12, 12, 18, 20,12]
// let b=landing_times.length;
// let a=[0];
// for(i=0;b>=i;i++){
//      if(landing_times[i]==a){
//           console.log(i)

//      }
// }



// 8.Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific
//  region of a forest, identify which regions have temperatures above 80 degrees.

// temperatures = [75, 80, 72, 85, 90]
// b=temperatures.length
// c=temperatures[0]
//  for(i=1;b>i;i++){
//        if(temperatures[i]>80){
//                c=temperatures[i]  
//             console.log(temperatures[i])             
//        } 
          
// }



// 9.Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students 
// assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 
// 50 students.


// students_per_route = [45, 55, 30, 60, 40] 
// sum=0;
//    for(i=0;students_per_route.length>i;i++){
//        if(students_per_route[i]>50){
//                   sum=sum+2
//        }
//        else{
//             sum=sum+1
//        } 
//    }
//    console.log(sum);



// 10.You have an array of daily expenses for a week. Write a function that calculates the total expenses for 
// the week



// n=[20,30,22,33,44,55,66]
// let sum=0;
// function nam(n){
//     for(i=0;i<n.length;i++){
//           sum=sum+n[i]
//     }
//     console.log(sum);
// }
// nam(n)


// 11. You are given an array of student grades. Write a function that calculates the average grade.
  
// n=[20,30,22,33,44,55,66]
// let sum=0;
// function nam(n){
//     for(i=0;i<n.length;i++){
//           sum=sum+n[i]
//     }
//     console.log(sum/n.length);
// }
// nam(n)

   
            
// 12.You have an array of people ages. Write a function that filters out people who are 18 years old or older.



// n=[2,3,4,7,8,33,22]
// function nam(n) {
//     for(i=0;n.length>i;i++){
//            if(n[i]>=18){
//             console.log(n[i]);
//            }
//     }  
       
         
// }
// nam(n)



// 13.You have an array of integers. Write a function that returns the count of the even numbers in the array.

// n=[2,3,4,7,8,33,22]
// for(i=0;n.length>i;i++){
//     if(n[i]%2==0){
//         console.log(n[i]);
        
//     }
// }


















