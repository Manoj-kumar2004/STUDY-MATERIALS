import { products } from "../../javascript-amazon-project/data/products.js";
import {cart} from '../script/cart.js' 
let html='';
products.forEach((value)=>
{
html+=`        <div class="product">
<div class="product-image">
            <img src="../javascript-amazon-project/${value.image}" alt="product">
    </div>
        <div class="head">${value.name}</div>
        <div class="rating"><img src="../javascript-amazon-project/images/ratings/rating-${value.rating.stars*10}.png" alt="rating"><span>${value.rating.count}</span></div>
        <div class="price">$${(value.priceCents/100).toFixed(2)}</div>
        <div class="quantity">
            <select id="myslect">
                <option selected-value="1">1</option>
                <option value="2">2</option>
                <option value="2">2</option>
                <option value="2">3</option>
                <option value="2">4</option>
                <option value="2">5</option>
                <option value="2">6</option>
                <option value="2">7</option>
                <option value="2">8</option>
                <option value="2">9</option>
                <option value="2">10</option>
            </select>
        </div>
        <div class='cart-added'>added</div>
        <button class="addcart added" data-product-id=${value.id}>ADD TO CART</button>
    </div>`
})
document.querySelector('.orders-grid').innerHTML=html;
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
