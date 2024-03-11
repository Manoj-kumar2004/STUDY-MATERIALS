function sorting(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]<arr[j])
            {
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;

}
let a1=[[112, 42,83, 119],
[56, 125, 56, 49],
[15, 78, 101, 43],
[62, 98, 114, 108]];
 for(let i=0;i<a1.length;i++)
{a1[i]=sorting(a1[i]);}
let a=[];
for(let j=0;j<a1.length;j++)
{for(let i=0;i<a1.length;i++)
{  
    a[i]=a1[i][j];
   
}
a=sorting(a);
for(let k=0;k<a1[0].length;k++)
{
    for(let p=0;p<a1[0].length;p++){
        a1[p][j]=a[p];
    }
}
}
let sum=0;
for(let i=0;i<Math.ceil(a1[0].length/2);i++)
{
     for(let j=0;j<Math.ceil(a1[0].length/2);j++)
     {
        sum+=a1[i][j];
     }
}
console.log(sum)