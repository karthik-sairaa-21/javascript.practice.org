//swap opeator//
// let a=2;
// let b=3;
// console.log(a,b);
// let c=a;
//  a=b;
//  b=c;
// console.log(a,b)


// array opeartor
// let a="hari";
// let b="priya";
// console.log(a,b);
// [a,b]=[b,a]
// console.log(a,b)

// Arithmetic opeartor
// let a=15,b=20;
// console.log(a,b);
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b)

// let a=10;
// let b=8;
// console.log(~(a-b));

let no_of_movies=4;
let break_muns=15;
let movie_runtime=2;
let total_movie_time=no_of_movies*movie_runtime*60;
let total_of_break=no_of_movies-1*break_muns;
let total_time_mins=total_movie_time+total_of_break;
let total_hour=Math.floor(total_time_mins/60);
let total_mimms=total_time_mins%60;
console.log(total_mimms+total_hour);