setInterval(()=>{
    let date=new Date;
    let hrs=document.querySelector('.hrs');
    let mins=document.querySelector('.mins');
    let seconds=document.querySelector('.seconds');
    hrs.innerHTML=(date.getHours()>=10?'':'0')+date.getHours();
    mins.innerHTML=(date.getMinutes()>=10?'':'0')+date.getMinutes();
    seconds.innerHTML=(date.getSeconds()>=10?'':'0')+date.getSeconds();
},1000)


