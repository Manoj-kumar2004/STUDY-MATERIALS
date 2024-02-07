let cart=[]
document.querySelectorAll('.addcart').
forEach((button)=>
{
button.addEventListener('click',(button)=>
{

 if(cart.productId)
})
console.log(cart)
let html_cart=''
cart.forEach((value)=>
{
    html_cart+=`
    <div class="returns-orders">
        <div class="contents">
            <div class="orders-title">
                <div class="placed">Order Placed : August 12</div>
                <div class="total">Total:$100</div>
                <div class="order-id">Order-id:27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
            </div>
        <div class="products">
            <img src="../javascript-amazon-project/images/products/6-piece-non-stick-baking-set.webp" alt="Order">
            <div class="details">
                <div class="name">6-piece-non-stick-baking-set.webp</div>
                <div class="date">Arriving on 15 August</div>
                <div class="quantity">1</div>
                <button class="buy-again"><img src="../javascript-amazon-project/images/icons/buy-again.png" alt="Buy again">Buy Again</button>
            </div>
            <div class="TrackPackage">
                <button class="track">Track Package</button>
            </div>
        </div>
        <div class="products">
            <img src="../javascript-amazon-project/images/products/6-piece-non-stick-baking-set.webp" alt="Order">
            <div class="details">
                <div class="name">6-piece-non-stick-baking-set.webp</div>
                <div class="date">Arriving on 15 August</div>
                <div class="quantity">1</div>
                <button class="buy-again"><img src="../javascript-amazon-project/images/icons/buy-again.png" alt="Buy again">Buy Again</button>
            </div>
            <div class="TrackPackage">
                <button class="track">Track Package</button>
            </div>
        </div>

        </div>

    </div>
</div>`
})