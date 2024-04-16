function countingValleys(steps, path)
{
    let vcount=0,ucount=0,count=0;
   for(let i=0;i<path.length;i++)
   {
       if(path[i]=='U'){count++;}
       else {count--;}
       if(count===0)
       {
           if(path[i]==='U')
           vcount++;
        }

    }
console.log(vcount);
}
countingValleys(8,'DUDDUUDUDUDU');