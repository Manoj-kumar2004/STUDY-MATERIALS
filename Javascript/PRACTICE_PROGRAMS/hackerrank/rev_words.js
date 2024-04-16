let a=[1,2,4,5,5,5,5,5,6,6,7,7,7];
let ob={},pair=0;
for(const obj of a)
ob[obj]=(ob[obj]||0)+1;
console.log(ob)
for(let a of Object.values(ob))
{
pair+=Math.floor(a/2);
}
console.log(pair);