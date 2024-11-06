function factorial(num) {
    // if (num === 0 || num === 1) ;{
    // console.log(1);

    // }

    let fact = 1;
    let sum=0;
    for (let i = 1; i <= num; i++) {
      fact *= i;
      sum+=fact;
    }
    

    // return fact;
    console.log(sum);
  }
  factorial(5)


//   n to m prime number 

function prime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num%i== 0) {
            return false;
        }
        
    }
    return true;
}

function printPrime(m, n) {
    let empty = [];
    for (let i = m; i <= n; i++) {
        if (prime(i)) {
            empty.push(i)


        }
    }
    let output = 0;
    if (prime.length > 0) {
        output = empty.join(", ")
        console.log(output);
    }
    else {
        console.log("NO prime in range");

    }
}

printPrime(1,10)

