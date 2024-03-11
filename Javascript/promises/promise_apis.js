let p1=new Promise((resolve,reject)=>
{
    setTimeout(reject,3000,'p1 resolves');
    
})
let p2=new Promise((resolve,reject)=>
{
    setTimeout(reject,2000,'p2 resolve ');
    
})
let p3=new Promise((resolve,reject)=>
{
    setTimeout(reject,1000,'p3 resolve');
    
})
Promise.any([p1,p2,p3]).then((res)=>{console.log(res)}).catch((error)=>{console.log(error.errors)});
