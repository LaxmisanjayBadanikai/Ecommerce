document.addEventListener("DOMContentLoaded",()=>{
    const products=[
        {id:1,name:"product1",price:100},
        {id:2,name:"product2",price:200},
        {id:3,name:"product3",price:300}
    ];
    const cart=[];
    const productList=document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");
    
    products.forEach(products=>{
        const productDiv=document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML=`
        <span>${products.name} - $${products.price.toFixed(2)}</span>
        <button data-id="${products.id}">Add to Cart</button>
        `;
         productList.appendChild(productDiv);
    });

    productList.addEventListener("click",(e)=>{
        if(e.target.tagName==="BUTTON"){
            const productId=parseInt(e.target.getAttribute("data-id"));
            const product=products.find(p=>p.id===productId);
            addToCart(product);
        }
    });
    function addToCart(product){
        cart.push(product);
        renderCart();
    }
    function renderCart(){
        cartItems.innerHTML="";
        let totalPrice=0;
        if(cart.length>0){
            emptyCartMessage.classList.add("hidden");
            cartTotalMessage.classList.remove("hidden");
            cart.forEach((item,index)=>{
                totalPrice+=item.price;
                const cartItemDiv=document.createElement("div");
                cartItemDiv.innerHTML=`
                ${item.name} - $${item.price.toFixed(2)}
                <button data-index="${index}">Remove</button>
                `;
                cartItems.appendChild(cartItemDiv);
                
                 totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
            });
        }else{
            emptyCartMessage.classList.remove("hidden");
            cartTotalMessage.classList.add("hidden");
        }
    }
    cartItems.addEventListener("click",(e)=>{
     if(e.target.tagName==="BUTTON"){
      const index = parseInt(e.target.getAttribute("data-index"));
      cart.splice(index, 1);
      renderCart();
     }      
    });
    checkOutBtn.addEventListener("click",()=>{
        cart.length=0;
        renderCart();
        alert("Thank you for your purchase!");
    });


});