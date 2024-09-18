// let phone=[1 ,2, 3, 4, 5]
// let a=phone.length-1;
// for( i=3 ; i<=a; i--){
//     console.log(i);
    
// }



// let direction = '';  // Declare the variable to store the name

// function getin(){
    
//     const readline = require('readline');
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
    
//     rl.question(`What's direction?`, input => {
//         direction = input;  // Store the input in the userName variable
//       // You can now use the userName variable wherever needed
//       console.log("the"+ direction);
//     });
    
//     return direction;
// }


// 1.Create an array of 5 numbers and print the array.
// let a=[1,2,3,4,5];
// console.log(a)



// 2.Create an array of 4 strings. Print the 2nd and 4th elements.
// let b=["karthi" ,"appa","Amma","papa","Sairaa"];
// console.log(b[2])
// console.log(b[4])


// 3.Create an array of 3 elements. Change the 2nd element to "modified" and print the array.
// let r=["Vajesh","Suthan","Karthi"];
// r[1]="modified";
// console.log(r)



//4. Write a program to print the length of an array containing 7 elements.
// let m=["Vajesh","Suthan","Karthi" ,"appa","Amma","papa","Sairaa"]
// console.log(m.length);



//5. Write a program that iterates over an array of numbers and prints each element.
// let v=[1,2,3,4,5,6,7,8,9]
// for(i=0;i<v.length;i++){
//   console.log(v[i]);
// }








//6. Write a program to sum all elements of an array of numbers and print the result.

// let k=[1,2,3,4,5,6,7,8,9,10]
// sum=0;
// for(i=0; i<k.length;i++){
//   sum=sum+i;
 
// }
// console.log(sum)








//7. Write a program that uses the `for...of` loop to print each element in an array of strings.


// let movies=["Vajesh","Suthan","Karthi" ,"appa","Amma","papa","Sairaa"]
// for(let movie of movies){
//   console.log(movie)
// }


// 8.  Write a program that uses the `forEach()` method to print each element in an array of integers.


// let score=[1,2,3,4,5,6,7,8,9]
// score.forEach(function(score){
//   console.log(score)
// })


// Create an array of 10 numbers. Write a program to filter out only the odd numbers and print them.


let oddNumber=[1,2,3,4,5,6,7,8,9]
for(i=0;i<oddNumber.length;i++){
  if (oddNumber[i]%2==0){
    console.log(oddNumber[i])
  }
}


// Write a program that reverses an array using the `reverse()` method and prints the reversed array.



