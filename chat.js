// <!-- Product Card -->
{/* <div class="product-card">
    <h2>Product Name</h2>
    <p>Price: $10.00</p>
    <button class="add-to-cart-btn">Add to Cart</button>
</div>

<script>
    // Add event listener to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        // Retrieve product information from the clicked card
        const productName = event.target.parentElement.querySelector('h2').textContent;
        const productPrice = event.target.parentElement.querySelector('p').textContent;

        // Store product information in Local Storage
        localStorage.setItem('productName', productName);
        localStorage.setItem('productPrice', productPrice);
    }
</script>


<div id="cart-items"></div>

<script>
    // Retrieve product information from Local Storage
    const productName = localStorage.getItem('productName');
    const productPrice = localStorage.getItem('productPrice');

    // Display product information in the cart
    const cartItemsDiv = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.textContent = `${productName} - ${productPrice}`;
    cartItemsDiv.appendChild(cartItem);
</script> */}
