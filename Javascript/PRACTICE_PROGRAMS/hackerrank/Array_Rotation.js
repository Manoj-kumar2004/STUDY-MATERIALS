
// class Solution{
//     rotate(arr,n,k){
//         k=k%a.length;
//         let temp,kount=1;
//   while(kount<=k){  
//     for(let i=0,j=n-k-1;i<j;i++,j--)
//     {
//         temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
//         for(let i=0,j=n-1;i<j;i++,j--)
//     {
//         temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }kount++;}
//     return arr;
//     }

// }
// a=[1,2,3,4,5]
// let k=new Solution
// console.log(k.rotate(a,a.length,2))
function rot(a,n)
{

    return [...a.slice(n),...a.slice(0,n)]
}
console.log(rot([1,2,3,4,5],2))