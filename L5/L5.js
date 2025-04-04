// Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not 
// become smaller than the original string, your method should return the original string.
// For example:
// Test	Result
// compressString("aabcccccaaa")
// a2b1c5a3
// compressString("abcdef")
// abcdef


// function find(n){
//     let count=1
//     let str=""
//     for(let i=1;i<=n.length;i++){
//         if(n[i]==n[i-1]){
//             count++

//         }
//         else{
//             str+=n[i-1]+count
//             count=1
//         }
//     }
//     let total;
//     if(str.length<n.length){
//         total=str
//     }
//     else{
//         total=n
//     }
//     console.log(total);

// }
// find("aaabbccc")
// find("abcdef")

function find(n){
    if(!n.length || typeof n=="undefined"){
        console.log("invaild");
        
    }
    let count=1
    str="";
    for(let i=1;i<=n.length;i++){
        if(n[i]==n[i-1]){
            count++
        }
        else{
            str+=n[i-1]+count;
            count=1
        }
    }
    let output;
    if(str.length<n.length){
       output=str
    }
    else{
        output=n
    }
    console.log(output);
}
find("abc")