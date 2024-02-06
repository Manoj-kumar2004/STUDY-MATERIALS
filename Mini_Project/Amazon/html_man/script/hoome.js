
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
        <button class="addcart" data-product-name=${value.name}>ADD TO CART</button>
    </div>`
})
document.querySelector('.orders-grid').innerHTML=html;
