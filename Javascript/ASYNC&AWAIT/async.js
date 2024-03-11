const p1=new Promise((resolve,reject)=>
{
    setTimeout(()=>resolve('P1 Resolved'),5000);
})
const p2=new Promise((resolve,reject)=>
{
    setTimeout(()=>resolve('P2 Resolved'),5000);
})
async function demo()
{
    const val=await p1;//demo suspended from call stack,waits till p1 gets resolved
    console.log('P1 LOAD...');
    console.log(val);
    const val2=await p2;//demo suspended from call stack,waits till p2 gets resolved
    console.log('p2 loaded');
    console.log(val2);
}

demo();//first while watching the video i felt sleepy because i was watching it when it was late night.But then suddenly i felt some energy when the behind the scenes part came.It motivated me to watch the  full video eventhough it was 2 am.That is Akshay.Thank you for this wonderfull course.
console.log('hello');