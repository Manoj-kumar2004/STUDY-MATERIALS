let a=['apple','guava','apple','mongo'];
a.push([...a],[...a],[...a])
console.log(a)
let obj={};

for(let i=0;i<a.length;i++)
{
    let count=0;
    for(let j=0;j<a.length;j++)
    {
        if(a[i]===a[j]) count++;
    }
    obj[a[i]]=count;

}
console.log(obj);