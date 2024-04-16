function beautifulDays(i, j, k) {
   let rangeofvalue=[],revrangeofvalue=[],count=0;
   for(let n=i,e=0;n<=j;n++,e++)
            rangeofvalue[e]=n;
    rangeofvalue.forEach((element,index) => {
        revrangeofvalue[index]=Number(String(element).split('').reverse().join(''));
    });
    for(let i=0;i<rangeofvalue.length;i++)
    {
        if((Math.abs(revrangeofvalue[i]-rangeofvalue[i]))%k===0)count++;
    }
    return count;
        }
console.log(beautifulDays(1,10,2))