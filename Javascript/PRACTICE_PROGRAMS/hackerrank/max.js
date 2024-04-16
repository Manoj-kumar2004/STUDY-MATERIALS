
function maxMin(k, ...arr) {
    let unfair_array=[],unfair=0,f=0,min_unfair=Infinity;
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=i;j<i+k;j++)
        {
           unfair_array[f]=arr[j];
           f++;
        }
        unfair_array=unfair_array.filter((element)=> element!=undefined);
        f=0;
        if(unfair_array.length===k)
       {         if(min_unfair>(Math.max(...unfair_array)-Math.min(...unfair_array)))min_unfair=Math.max(...unfair_array)-Math.min(...unfair_array)}
 
    }

return (min_unfair)
}
maxMin(4,1,2,3,4
    ,10
    ,20
    ,30
    ,40)