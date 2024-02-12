export let cart=JSON.parse(localStorage.getItem('cart'));
export let quantity=JSON.parse(localStorage.getItem('quant'))
if(!cart)
{
cart=[
    {
        productid:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        image:"images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        quantity:1

    },
    {
        productid:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        image:"images/products/intermediate-composite-basketball.jpg",
        name: "intermediate-composite-basketball",
        quantity:2

    }

];}

export function updatecart(quantity)
{
    document.querySelector('.cart-quantity').innerHTML=quantity;
    localStorage.setItem('quant',JSON.stringify(quantity));
}
function addToStorage(cart)
{
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function removeItemfromCart(ID)
{
    let newcart=[];
    cart.forEach((value)=>
    {
        if(value.productid!==ID) 
{        newcart.push(
            {
                productid:value.productid,
                quantity:value.quantity
            }
        )}
    })

    cart=newcart;
    addToStorage(cart);
}
 
export function addToCart()
{
    document.querySelectorAll('.addcart').forEach
(
    (button)=>
    {
        button.addEventListener('click',()=>
        {
            let match;
        cart.forEach((item)=>
        {
            if(item.productid===button.dataset.productId)match=item;

        })
        if(match)match.quantity++;
        
        else{
                 cart.push({
        productid:button.dataset.productId,
        quantity:1})   
        }
            quantity=0;
            cart.forEach((item)=>{quantity+=item.quantity})
            
            updatecart(quantity);
            addToStorage(cart);
        
        })
    }

)
}