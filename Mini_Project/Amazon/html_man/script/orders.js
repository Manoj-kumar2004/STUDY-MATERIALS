import {cart,removeItemfromCart} from '../script/cart.js';
import{products} from '../../javascript-amazon-project/data/products.js';
 let html='';
 let matchingitem;
cart.forEach(cartItem => {
    products.forEach((item)=>
   { 
    if(item.id===cartItem.productid)
    {
        matchingitem=item;

    }
   })
   html+=`
   <div class="cart-item-container js-remove-${matchingitem.id}">
   <div class="delivery-date">
     Delivery date: Tuesday, June 21
   </div>

   <div class="cart-item-details-grid">
     <img class="product-image"
       src="../javascript-amazon-project/${matchingitem.image}">

     <div class="cart-item-details">
       <div class="product-name">
        ${matchingitem.name}
       </div>
       <div class="product-price">
${(matchingitem.priceCents/100).toFixed(2)}
       </div>
       <div class="product-quantity">
         <span>
           Quantity: <span class="quantity-label">${cartItem.quantity}</span>
         </span>
         <span class="update-quantity-link link-primary">
           Update
         </span>
         <span class="delete-quantity-link link-primary js-delete" data-product-id='${matchingitem.id}'>
           Delete
         </span>
       </div>
     </div>

     <div class="delivery-options">
       <div class="delivery-options-title">
         Choose a delivery option:
       </div>
       <div class="delivery-option">
         <input type="radio" checked
           class="delivery-option-input"
           name="delivery-option-${matchingitem.id}">
         <div>
           <div class="delivery-option-date">
             Tuesday, June 21
           </div>
           <div class="delivery-option-price">
             FREE Shipping
           </div>
         </div>
       </div>
       <div class="delivery-option">
         <input type="radio"
           class="delivery-option-input"
           name="delivery-option-${matchingitem.id}">
         <div>
           <div class="delivery-option-date">
             Wednesday, June 15
           </div>
           <div class="delivery-option-price">
             $4.99 - Shipping
           </div>
         </div>
       </div>
       <div class="delivery-option">
         <input type="radio"
           class="delivery-option-input"     
           name="delivery-option-${matchingitem.id}">
         <div>
           <div class="delivery-option-date">
             Monday, June 13
           </div>
           <div class="delivery-option-price">
             $9.99 - Shipping
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
   `;

});
document.querySelector('.order-summary').innerHTML=html;
document.querySelectorAll('.js-delete').forEach((value)=>
{
  value.addEventListener('click',()=>
  {

    removeItemfromCart(value.dataset.productId);
document.querySelector(`.js-remove-${value.dataset.productId}`).remove();
  })
})