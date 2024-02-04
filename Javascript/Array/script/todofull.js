let details=[];
function addtodo()
{
    let name=document.querySelector('.name').value;
    let date=document.querySelector('.date').value;
    details.push({name,date});
    renddertodo();
}
function renddertodo()
{
    let html='';
    for(let i=0;i<details.length;i++)
    {
        html+=`<p>
            <span>${details[i].name}</span><span>${details[i].date}</span><button onclick='delte(${i},details)'>delete</button>
        </p>`;
    }
    document.querySelector('.result').innerHTML=html;
    console.log(details)
}
function delte(index,array)
{
    array.splice(index,1);
    renddertodo();
}