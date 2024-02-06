let cart=[]
document.querySelectorAll('.addcart').
forEach((button)=>
{
button.addEventListener('click',()=>
{
cart.push({
    name:button.dataset.productName,
    quantity:1
})
console.log(cart)
})
})