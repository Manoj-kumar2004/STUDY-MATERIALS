function result(choice)
{
const outcomes = {
'rock': { 3: 'win', 2: 'lose', 1: ' tie' },
'paper': { 1: 'win', 3: 'lose', 2: ' tie' },
'scissors': { 2: 'win', 1: 'lose', 3: ' tie' }
};
let computer=Math.ceil(Math.random()*3);
    let result=outcomes[choice][computer]
    let score=JSON.parse(localStorage.getItem("score"));
    if(score===null)
    {
        score=
        {
            win:0,
            lose:0,
            tie:0
        }
    }
    if(result==='win')
    {
        score.win+=1;
    }
    else if (result==='lose')
    {
        score.lose+=1;
    }
    else
    {
        score.tie+=1;
    }    
    let comp=(computer==1)?'rock':(computer==2)?'paper':'scissors';
    document.querySelector(".res").innerHTML=

`You <img src="../images/${choice}-emoji.png" alt="none">
    <img src="../images/${comp}-emoji.png" alt="none">Computer`

localStorage.setItem('score',JSON.stringify(score))
document.querySelector(".choice").innerHTML=`win:${score.win}

lose:${score.lose} tie:${score.tie}`;

document.querySelector('.result').innerHTML=`${result}`


}
let id;
let Autoplay=false;
function rpeat()
{
    choice='';
    let a=Math.floor(Math.random()*4)
    a===1?choice='rock':a===2?choice='paper':choice='scissors';
    id=setInterval(result, 1000,choice);
}
function stop(f)
{
    clearInterval(f);
}
function change()
{   
    if(!Autoplay)
    {
        Autoplay=true;
    document.querySelector('.Auto').outerHTML=`<button class='psuedo' onclick=stop(${id})> REset</button>`
    

    }
    else{
        Autoplay=false;
        document.querySelector('.psuedo').outerHTML=`<button onclick="
        rpeat();
        change();
        
        " class="Auto psuedo">AutoPlay</button>`

    }
}
document.querySelector('.rock').addEventListener('click',()=>{result('rock')});
document.querySelector('.paper').addEventListener('click',()=>{result('paper')});
document.querySelector('.scissor').addEventListener('click',()=>{result('scissors')});
document.querySelector('.reset').addEventListener('click',()=>{
document.querySelector('.choice').innerHTML='win:0 lose:0 tie:0'
        score={
            win:0,
            lose:0,
            tie:0
        }
        localStorage.removeItem('score')
        
})
document.body.addEventListener('keydown',(event)=>{if(event.key==='r')result('rock')});
document.body.addEventListener('keydown',(event)=>{if(event.key==='p')result('paper')});
document.body.addEventListener('keydown',(event)=>{if(event.key==='s')result('scissors')});