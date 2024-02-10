let now = new Date;
console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getFullYear()}/${now.getDate()}/${now.getMonth()}`)
function rotateright(string,unit)
{
    string=string.slice(-(string.length-unit))+string.slice(0,unit)
    return string
}
console.log(rotateright('Manoj',3))
let string='PYTHON'
string=(string.slice(0,2).toLowerCase()==='py')?string:'py'+string;
console.log(string)
if(string.length>=3)
{
    console.log(string.slice(string.length-3)+string+string.slice(string.length-3))
}