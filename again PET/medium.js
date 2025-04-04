// 1.push the new array by the given target
// function find (n,target){
//     let empty=[]
//     for(let i=0;i+target<=n.length;i=i+target){
//           let samll=n.slice(i,i+target);
//           empty.push(samll)
        
//     }
//     return empty;
    
// }
// console.log(find([1,2,3,4,5,6,7,8],5))



// 2.duplicate with count
// function duplicatemap(n){
//     let empty={}
    
//     for(let i=0;i<n.length;i++){
//       let color=n[i]
      
//       if(empty[color]){
//           empty[color]= empty[color]+1
//       }
//       else{
//           empty[color]=1
//       }
        
        
//     }
//     return empty;
// }
// console.log(duplicatemap(["red","orange","red","yellow","red"]))



// 3.find vowel

// function vowel(n){
//     let empty=[]
//     let lower=n.toLowerCase()
//     for(let i=0;i<lower.length;i++){
//         if(lower[i]!="a" && lower[i]!="e" && lower[i]!="i" && lower[i]!="o" && lower[i]!="u"){
//             empty.push(lower[i])
//         }
//     }
//     console.log(empty.join(""))
// }
// vowel("HELLOWORLD")


// 4.which is the big word in the given n
// function find(n){
//     let a=n.split(" ")
//       let confirm=0
//       let word="";
//     for(let i=0;i<a.length;i++){
//     let count=a[i].length;
//      if(count>confirm){
//         confirm=count
//           word=a[i]
//     }
    
//     }
//     console.log(word)
      
     
// }
// find("the is karthik i am ten years old")



// 5.anogram

// function anogram(a,b){
//     let first=a.split("")
//     let second=b.split("")
//     let count=0
//     let anogram=false;
//     if(first.length !=second.length){
//         console.log("No Anogram length is not same")
//     }
//     else{
//     for(let i=0;i<first.length;i++){
//         for(let j=0;j<second.length;j++){
//             if(first[i]==second[j]){
//                 anogram=true;
//                 count++;
//                 break;
//             }
//         }
//     }
//     if(anogram && count==first.length){
//       console.log("anogram")
//     }
//     else{
//         console.log("No Anogram words found")
//     }
//     }
// }
// anogram("gsm","ttt")


// 6.anogram with method

// function find(a,b){
//     let first=a.split("").sort().join("");
//     let second=b.split("").sort().join("");
// if(first.length!=second.length){
//     console.log("The length is not same")
// }
// else if(first==second){
//     console.log("Is true it's a Anogram")
// }
// else{
//     console.log("No Anogram found in the given ")
// }

// }
// find("and","dnh")




// randam password 

// let len=6;
// const lower = "abcdefghijklmnopqrstuvwxyz";
// const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numChars = "0123456789";
// const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
// let allchars =specialChars+ numChars+upperChars+ lower ;
// let password=""
    
// for(let i=0;i<len;i++){
//         let over=Math.floor(Math.random()*allchars.length)
//         password+=allchars[over]
//     }
// console.log(password)


arr1=[5,10,15,20]
arr2=[3,6,9,12,18,24]
arr3=[]
let i=0,j=0;

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        arr3.push(arr1[i])
        i++
        console.log(arr3)
    }
    else{
        arr3.push(arr2[j])
        j++
        console.log(arr3)
    }
}
// console.log(arr3)
while(i<arr1.length){
    arr3.push(arr1[i]);
    i++;
    console.log(arr3)
}
while(j< arr2.length){
    arr3.push(arr2[j])
    j++;
    console.log(arr3);
}
console.log(arr3)

