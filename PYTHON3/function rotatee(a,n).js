function rotatee(a,n)
{
    temp=a.slice(0,n)
    a=a.slice(n,a.length-n)
    return [...temp,...a]
}
// console.log([1,2,3,4,5].splice(0,3))
console.log(rotatee([1,2,3,4,5],2))