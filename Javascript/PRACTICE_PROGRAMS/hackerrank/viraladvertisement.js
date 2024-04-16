
function viralAdvertising(n) {
    let people=[5],count=2;
    for(let i=1;i<n;i++)
    {
        people[i]=Math.floor(people[i-1]/2)*3;
        count+=Math.floor(people[i]/2)
    }
    return count;
    }
    console.log(viralAdvertising(5));