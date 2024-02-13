import { cart } from "./cart.js"
import { products } from "../../javascript-amazon-project/data/products.js"
let html='';
cart.forEach(value => {
    let match={};
    products.forEach(prod =>
        {
            if(prod.id===value.productid)match=prod
        }
        )
    
   

    html+=`
            <div class="products">
               <div class='images'> <img src="../javascript-amazon-project/${match.image}" alt="Order"></div>
                <div class="details">
                    <div class="name">${match.name}</div>
                    <div class="date">Arriving on 15 August</div>
                    <div class="quantity">${value.quantity}</div>
                    <button class="buy-again"><img src="../javascript-amazon-project/images/icons/buy-again.png" alt="Buy again">Buy Again</button>
                </div>
                <div class="TrackPackage">
                    <button class="track">Track Package</button>
                </div>
            </div>
    `
});
document.querySelector('.prod').innerHTML=html;