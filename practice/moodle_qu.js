// Write a program that completes the printCharacters(charc, n) function which prints the number of characters n times.

// Example: printCharacters('*', 5), prints the output as *****


// function printCharacters(charc, n){
//  a="";
//     for(i=0;n>i;i++){
//          a+=charc;       
                
//     }
//     console.log(a);
    
// }
// printCharacters("+",50)



// Write a function areaOfRectangle(length, breadth) which will return the area




// function areaOfRectangle(length, breadth){
//        a=length*breadth

//        console.log(a);

// }
// areaOfRectangle(10,10)






// Complete the program printAllMultiplesOf5Bet(a, b) 
// eg, printAllMultiplesOf5Bet(10, 30)
// print 10, 15, 20, 25, 30
 
// Hint use , str.slice() and str.length if required



// function printAllMultiplesOf5Bet(a,b){
//     let n="";
//     for(i=a;b>=i;i++){
//         if(i%5==0){
//          n+=i+",";
//         } 
//     }
//     n=n.slice(0,n.length-1)
//     console.log(n);
// }
// printAllMultiplesOf5Bet(11, 49)




// Find the Sum of first n even numbers sumOfNEven(5) prints 30 (which is 2 + 4 + 6 + 8 + 10)


// function sumOfNEven(n){
//      a=n*(n+1)
//      console.log(a)
// }
// sumOfNEven(5)





// Write a function greetByNames(fname, sname) returns the Greeting message. 

// example greetByNames("Ram", "Raheem") returns Welcome Ram and Raheem




// function greetByNames(fname, sname) {

//     console.log(`Welcome ${fname} and ${sname}`)
// }
// greetByNames("Ram", "Raheem")





// Find the sum of the digits of the positive integer num . Given the function digitSum(num), return the sum of 
// the digits of the number. 

// sum=0;
// function digitSum(num){
//       while(num>0){
//         let a=num%10;
//           sum+=a;
//        num=Math.floor(num/10);     

//       }
//       return sum;

// }
// console.log(digitSum(123))




// Given an address string, print the different parts of the address separated by commas, on different lines.
// Hint : trim(): Removes any leading or trailing spaces from each part before printing.
// Sample Input:
// "Freshworks, Global Infocity, Perungudi, Chennai - 600096"

// Expected Output:
// Freshworks
// Global Infocity
// Perungudi
// Chennai - 600096


// function nam(address){
//    let a=address.split(", ");
//   for (i=0;i<a.length;i++){
//     console.log(a[i])
//   }
// }
// nam("Freshworks, Global Infocity, Perungudi, Chennai - 600096")



// Print the first power of 5 that is greater than 10000.

// function square(n){
//     for(i=1;n<10000;i++){
//         n*=5
//     }
//     console.log(n);
    
// }
// square(5)




// Return the sum of all even numbers between a and b. if a = 5, and b = 10 then the function should
//  return 24. (both a and b included) Hint: Between 5 and 10 there is 6, 8 and 10 and their sum is 24




// function nam(a,b){
//     let count=0
//     for(i=a;i<=b;i++){
//         if(i%2==0){
//             // console.log(i)
//             count=count+i
//         }
        
//     }
//     console.log(count)
// }
// nam(5,10)


// Given a number 'N' print the sum of each digit to the power of number of digits in given input.
// Example :
// Input => 1234



// function total(n){
//     let sum=0
//     let a=n.toString().split("")
//     b=a.length;
//     for(i=0;b>i;i++){
//            let p=(a[i]**b)
//            sum+=p
//     }
//     console.log(sum);  
// }
// total(123)


// function nam(n){
//     a=n.toLowerCase();
//     if(a=="a"){
//         return true;
//     }
//     else if(a=="def"){

//         return false;
//     }
//     else{
//         return 1;
//     }
   
// }
// console.log(nam("hhh"))

// a=[1,2,3,4,5,6,7,8,9,10]
// function nam(a){
// b=a.length
// total=0;
// for(i=0;i<b;i++){
//       total+=a[i]
     

// }
// console.log(total);
// if(total%3==0){
//     console.log("True");
    
// }
// }
// nam([1,2,3,4,5,6,7,8,9,10])

// function nam(n){
//     sum=0;
//     b=n.length;
//     for(i=0;i<b;i++){
//         if(n[i]%2==1){
//             sum+=n[i]
            
//         }
        
      
      
//     }
//     console.log(sum);
 
    
// }
// nam([1,2,3])



// function nam(a,b){
//     sum=[]
//     sum2=[]
//     for(i=a;i<=b;i++){
//         // console.log(i);
//         sum.push(i)
//     }
//     console.log(sum);
    
//     for(i=0; a<=b;b--){
//         // console.log(b);
//         sum2.push(b)
//     }
//     console.log(sum2);
    
// }
// nam(1,5)


// function nam(n,m){
//     a=[]
//  for(i=n;i<m;i++){
//     if(i%2==0){
//         a.push(i)  
//     }
//     console.log(a);  
//  }
//  for (i=n;i<m;i++){
//     if(i%2==1){
//         a.push(i)
//     }
//     console.log(a);
    
//  }

// }
// nam(1,10)


// a=[22,33,44,55,11,10]
// b=a[0]
// assesding=[]
// for(i=1;a.length>i;i++){
//     if(b>a[i]){
//         assesding=a[i]
//         let b=a
//         a.splice(,1)
       
//     }
// }
// console.log(b);



// Create a function that returns the smallest number in an array without using Math.min()


// a=[5,6,7,8,4,2]
// b=a[0]
// for(i=0;a.length>i;i++){
//     if(b>a[i]){
//         b=a[i]
        
//     }
// }
// console.log(b);


// a=[5,6,7,8,4,2]
// b=a[0]
// count=0
// for(i=0;a.length>i;i++){
//     if(b>a[i]){
//         count+=1
        
//     }
// }
// console.log(count);


// a=[1,2,3,4,5,6,7]
// function nam (n){
//     for(i=0;i<a.length;i++){
//         if(n==a[i]){
//             console.log("True");
            
//         }
//     }
// }
// nam(6)


// Create a function that concatenates two arrays


// a=[1,2,3,4,5]
// b=[6,7,8,9,10]
// c=a.concat(b);
// console.log(c);



// Write a function that finds the index of a specific element in an array

// function nam(n){
//     for(i=0;i<n.length;i++){
//         b=n.indexOf(3)
//     }
//     console.log(b);
    
// }
// nam([1,2,3,4,5,6])

// Write a function that counts the number of vowels in a string.

// function nam(n){
//     let count=0
//      b=n.split('');
//      for(i=0;i<=b.length;i++){
//     if(b[i]=="A" || b[i]=="a" || b[i]=="e" || b[i]=="E" || b[i]=="I" || b[i]=="i" || b[i]=="O" || b[i]=="o" || b[i]=="U" || b[i]=="u"){
//              count+=1; 
//     }
// }
//     console.log(count)

    
// }
// nam("karthik")



// a=["lion","tiger"]
// b=0;
// c=
// d=[]
// for(i=0;i<a.length;i++){
//    b=a[i];
//    c=b[0].toUpperCase()+b.slice(1);
//    d.push(c);
// }
// console.log(d);



// a=[10,12,28,13,24,22,28]
// b=[];
// for(i=0;i<a.length;i++){
//    for(j=i+1;j<a.length;j++){
//     if(a[i]==a[j]){
//         b.push(a[i])
//     }
//    }
// }
// console.log(b);



// a=[12,33,44,22,66]
// console.log(a.sort((a,b) => a-b));



// function powerByDigits(number) {
//    // Enter your code here
//  let sum=0;
//  let a=number.toString().split('');
//  let l= a.length;
//  for(i=0;i<l;i++){
//     let p=number%10;
//    //   p=Math.pow(a[i],l);
//    p=a[i]**l
//       sum+=p
     
//  }
//  console.log(sum);
 
// }
// powerByDigits(1234)




// function printArray(n) {
//    let a="";
//     let animals=["Lion","Tiger","Cheetah","Leopard"]
//      for(i=0;i<animals.length;i++){
//      a+=animals[i]+", "

         
//     }
//     let b=a.slice(0,a.length-2)
//     console.log(b)
//    }
//    printArray(4)



// function combineArrayElements(array) {
//    // Write your code here
//    let a=array.join()
//        console.log(a)
   
   
   
//    }
//    combineArrayElements([["Papaya", "Apple", "Orange"]])


let a=[1,2,3,4]
b=[]
for(i=0;0<a.length;i++){
   let n=a.pop()
    b.push(n);
    
}
console.log(b);






 












