grades=[4,73,68,37,33]
for(let i=0;i<grades.length;i++)
{
    let j=0;
    for(j=grades[i];!(j%5==0);j++);
    {
        console.log(j);
    }
    if((j-grades[i])<3)grades[i]=j;

}
console.log(...grades);