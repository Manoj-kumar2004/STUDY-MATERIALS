
async function details()
{
let responce = await fetch('https://api.github.com/users/Manoj-kumar2004');
let js=await responce.json();
console.log(js);
}
details();
