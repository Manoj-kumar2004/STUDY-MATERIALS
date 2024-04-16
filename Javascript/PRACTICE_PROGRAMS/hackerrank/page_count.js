
function pageCount(n, p) {
    
    if(p<n/2)
    {
        let count=1,turns=0;
        while(1)
        {
            count+=2;
            turns+=1;
           if( (count-1==p || count==p))break;
        }
        return turns;
    }
    else{
    
        let count=n,turns=0;
        while(1)
        {
            if( (count+1==p || count==p))break;
            count-=2;
            turns+=1;

        }
     return turns;
    }}
console.log(pageCount(5,6));