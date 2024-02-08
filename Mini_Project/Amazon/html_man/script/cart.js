let cart=[];
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
        let quantity=0;
            cart.forEach((item)=>{quantity+=item.quantity})
            
            document.querySelector('.cart-quantity').innerHTML=quantity;
                })

    }
)
document.querySelectorAll('.addcart').forEach(
    (element)=>
    {
        element.addEventListener('click',()=>{
            element.previousElementSibling.classList.add('add');
            element.previousElementSibling.classList.remove('cart-added');
            setTimeout(()=>
            {
                element.previousElementSibling.classList.add('cart-added');
                element.previousElementSibling.classList.remove('add');  
            },1000)
            })

        })
