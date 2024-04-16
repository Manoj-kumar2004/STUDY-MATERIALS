function countingSort(arr) {
    
    let freq_array=Array(Math.max(...arr)+1).fill(0);
    for(let i=0;i<arr.length;i++)
    {
        freq_array[arr[i]]+=1;
    }
    
   return freq_array;
   }
console.log(countingSort([1,1,3,2,1]))