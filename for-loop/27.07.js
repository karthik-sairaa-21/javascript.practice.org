// 1. Given an array of integers find the number of multiples of 5.




// a=[1,2,3,4,5,6,7,8,9,10,11]
// n=a.length;
// for(i=0;n>i;i++){
//     if(a[i]%5==0){
//         console.log(a[i])
//     }
// }




// 2.Given an array of integers and 2 numbers a and b (a < b) count the number of elements in the array which are 
// between a and b


// array=[25,12,23,26,32]
// a=6;
// b=22;
// for(i=0;array.length>i;i++){
//     if(array[i]>a && array[i]<b)
//       console.log(array[i])

// }

//3. Given an array of strings count the number of elements which are starting with a vowel


// let array = ['apple','egg','owl','banana'];
// let c=0;

// for(i=0; i<array.length; i++){
//     if(array[i][0]=='a'||array[i][0]=='A'||array[i][0]=='e'||array[i][0]=='E'||array[i][0]=='i'||array[i][0]=='I'||array[i][0]=='o'||array[i][0]=='O'){
//         c++;
//     }
// }
// console.log(c);



// 4. Given an array of float find the average of the numbers


// a=[10.6,20.8,44.65,77,33.2]
// total=0;
// for(i=0;a.length>i;i++){

//            total=total+a[i]
         
          
// }
// console.log(total/a.length);



// 3. Write a function printMultiplicationTable that takes a number n, range r and prints
//  the multiplication table for that number in reverse order.
// For example, if n =5 and r = 6

function nam(n,r) {
    for (let i=r; i>=1; i--)
        console.log(n+" * "+i+" = "+ n*i);      
}
nam(6,10)


