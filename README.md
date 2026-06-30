# Ecommerce Shopping Cart

A simple, functional ecommerce shopping cart application built with vanilla HTML, CSS, and JavaScript. Browse products, add items to your cart, and complete purchases with a clean dark theme interface.

## Features

- **Product Display**: Browse available products with prices
- **Add to Cart**: Add products to your shopping cart with one click
- **Remove Items**: Remove individual items from your cart
- **Real-time Total**: Automatically calculates and updates total price
- **Checkout Process**: Complete purchase with a single click
- **Empty Cart Handling**: Displays friendly message when cart is empty
- **Clean Dark Theme**: Modern dark interface with purple accent colors
- **Zero Dependencies**: Pure vanilla JavaScript - no frameworks or libraries

## How It Works

1. Browse the list of available products
2. Click **Add to Cart** on any product to add it to your cart
3. View your cart items below the product list
4. Remove items by clicking the **Remove** button next to each item
5. See the total price update automatically
6. Click **Checkout** to complete your purchase
7. The cart clears and a confirmation message appears

## Project Structure

```

ecommerce-cart/
├── index.html          # Main HTML structure
├── styles.css          # Styling and dark theme
├── script.js           # Application logic
└── README.md           # Project documentation

```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with dark theme
- **JavaScript (ES6)** - DOM manipulation, event handling, and array methods

## Installation & Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No server, build process, or installation required
4. Start shopping immediately!

## Customization

### Adding More Products

To add or modify products, edit the `products` array in `script.js`:

```javascript
const products = [
    { id: 1, name: "product1", price: 100 },
    { id: 2, name: "product2", price: 200 },
    { id: 3, name: "product3", price: 300 },
    // Add more products...
];
```

### Product Data Structure

Each product object requires:

- `id`: Unique identifier (number)
- `name`: Product name (string)
- `price`: Product price in dollars (number)

### Styling

The dark theme uses:

- Primary background: `#1e1e1e`
- Secondary background: `#333333`
- Accent color: `#6200ea` (purple)

Modify these colors in `styles.css` to match your brand.

### Adding Product Images

To add images to products, extend the product object and update the HTML:

```
// Add image property to product
const products = [
    { id: 1, name: "product1", price: 100, image: "product1.jpg" }
];

// Update product display
productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width:50px;">
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>
`;
```

## API Reference

### Core Functions

| Function | Description |
|---|---|
| `addToCart(product)` | Adds a product to the cart array |
| `renderCart()` | Renders cart items and updates total price |

### Data Structures

| Variable | Type | Description |
|---|---|---|
| `products` | Array | List of available products |
| `cart` | Array | Current items in shopping cart |

### Event Listeners

| Element | Event | Handler |
|---|---|---|
| `#product-list` | `click` | Adds product to cart when "Add to Cart" clicked |
| `#cart-items` | `click` | Removes product from cart when "Remove" clicked |
| `#checkout-btn` | `click` | Clears cart and shows confirmation |

## Shopping Cart Logic

### Adding Items

```
function addToCart(product) {
    cart.push(product);
    renderCart();
}
```

### Removing Items

```
cart.splice(index, 1);
renderCart();
```

### Calculating Total

```
let totalPrice = 0;
cart.forEach(item => totalPrice += item.price);
```

### Checkout

```
cart.length = 0;
renderCart();
alert("Thank you for your purchase!");
```

## Browser Support

Works on all modern browsers:

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 14+
- ✅ Edge 79+
- ✅ Opera 47+

## Future Improvements

- Quantity selection for each product
- Persist cart data with localStorage
- Product categories and filtering
- Search functionality
- Discount codes and promotions
- Shipping cost calculation
- Order summary with subtotal, tax, and total
- Product images with thumbnails
- Responsive design for mobile
- Multiple currency support
- Product ratings and reviews
- Stock availability indicators

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
1. Create a new branch (`git checkout -b feature/improvement`)
1. Make your changes
1. Commit your changes (`git commit -m 'Add feature'`)
1. Push to the branch (`git push origin feature/improvement`)
1. Open a Pull Request

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- Built with ❤️ using vanilla JavaScript
- Inspired by modern ecommerce interfaces
- Dark theme designed for comfortable shopping experience

**Start shopping with your own cart today!** No sign-up, no database, just pure frontend shopping.

