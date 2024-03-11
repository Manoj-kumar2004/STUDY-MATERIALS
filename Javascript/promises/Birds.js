arr=[1,4,4,4,5,5]
let count={};
    for(let i=0;i<arr.length;i++)
    {
        if(count[`${arr[i]}`]!=undefined)
                count[`${arr[i]}`]+=1;
        else count[`${arr[i]}`]=1;
    }
    console.log('3'<'2');