function nam(a) {
    switch (a) {
        case 1:
            console.log("monday");
            break;
        case 2:
            console.log("tue");
            break;
        case 3:
            console.log("wed");
            break;
        case 4:
            console.log("thur");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
            console.log("sat");
            break;
        case 7:
            console.log("sun");
            break;

        default:
            console.log("none");
            break;
    }

}
nam(4)


// 3. Write a function printMultiplicationTable that takes a number n, range r and prints
//  the multiplication table for that number in reverse order.
// For example, if n =5 and r = 6

function nam(n,r) {
    for (let i=r; i>=1; i--)
        console.log(n+" * "+i+" = "+ n*i);      
}
nam(6,10)
