import {cart,removeItemfromCart,updatecart} from '../script/cart.js';
import{products} from '../../javascript-amazon-project/data/products.js';
let quantity=JSON.parse(localStorage.getItem('quant'));
console.log(quantity)
 let html='';
 let matchingitem;
 console.log(cart)
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
updatecart(quantity);
addHTMLToPaymentSummary(cart)
  })
})
document.querySelector('.return-to-home-link').innerHTML=`${JSON.parse(localStorage.getItem('quant'))} items`;
addHTMLToPaymentSummary(cart)
function addHTMLToPaymentSummary(cart)
{
  let total= findTotal(),html='';


  html=`
  <div class="payment-summary">
  <div class="payment-summary-title">
    Order Summary
  </div>

  <div class="payment-summary-row">
    <div>Items (${JSON.parse(localStorage.getItem('quant'))}):</div>
    <div class="payment-summary-money">$${(total/100).toFixed(2)}</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$4.99</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${((total+499)/100).toFixed(2)}</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${(((total+499)/100)/10).toFixed(2)}</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${((total+499+(total+499)/10)/100).toFixed(2)}</div>
  </div>

  <button class="place-order-button button-primary">
    Place your order
  </button>
</div>
  `
  console.log(html)
  document.querySelector('.payment-summary').innerHTML=html
}
export  function findTotal()
{
  let total=0
  cart.forEach((value)=>
  { 
    let match={};
    products.forEach((prod)=>
    {
      if(value.productid===prod.id)
      {
        match=prod;
      }
    })
    total+=value.quantity*(match.priceCents);
  })
  return total;
}