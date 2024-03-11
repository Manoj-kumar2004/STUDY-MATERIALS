function number_of_zeros(n)
{   let sum=0
   for(i=5;n/i>0;i*=5)
        sum+=Math.floor(n/i);
    return sum
}
sum=number_of_zeros(2000)
console.log(sum);