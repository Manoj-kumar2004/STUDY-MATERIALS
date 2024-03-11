let stair="",n=4;
let j=n,i=1,y=0;
for(let i=0;i<=n;i++)
{
    while(y<=j)
    {
        stair+=" "
        y++;
        
    }
    j--;
    for(let s=0;s<i;s++)
        stair+='#'
    stair+='\n';
y=0;
}
console.log(stair)