// Find the maximum elements of size k. Example arr ={3,2,1,4,2,9,2,5} k = 2 anser = 9 , 5

// function bubble(n,m){
//     let swaped;
//     do{
//         swaped=false;
//         for(let i=0;i<n.length;i++){
//             if(n[i]<n[i+1]){
//                 swaped=true;
//                 [n[i],n[i+1]]=[n[i+1],n[i]]
//             }
//         }
      
//     }
//     while(swaped){
//         let empty=[]
//     //  console.log(n)
//     for(let i=0;i<m;i++){
//         empty.push(n[i])
        
//     }
//     console.log(empty)
               
//     }

// }
// bubble([21,1,3,4,5,622,2],2)

// [0,1,1,0,0,1,1,0]  How do you sort this efficiently?

function find(n){
    let left=0;
    let right= n.length-1;

    while(left<right){
        while(n[left]==0){
            left++;
        }
        while(n[right]==1){
            right--;
        }
        if(left<right){
            arr[                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        left],arr[right]=arr[right],arr[left]
            left++;
            right--;
        }
    }
    return n;


}
console.log(find([0,1,0,1,0,1,0,1,0,1,0,1]))