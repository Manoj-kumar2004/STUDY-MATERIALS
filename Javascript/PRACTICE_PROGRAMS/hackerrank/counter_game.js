function isAPowerOf(a)
{
    for(let i=0;2**i<=a;i++)
    {
        if(2**i===a)return 1;
    }
    return 0;
}
function powerLess(a)
{   let i=0;
    let num=0
    for(i=0;2**i<a;i++)num=2**i;
    console.log(i)
    return (num)
}
function counterGame(n) {
    let number=0,turn=1;
    if(n===1)return 'Richard'
    while(1)
    {
        if(isAPowerOf(n))
        {
            n=Math.floor(n/2);
        }
        else{
            n=n-powerLess(n);
        }
    if(n===1)return turn?'Loiuse':'Richard';
    turn!=turn;


}
}
console.log(counterGame(132));