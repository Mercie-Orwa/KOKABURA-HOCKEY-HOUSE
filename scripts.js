document.addEventListener('DOMContentLoaded', function() {
    // Product image zoom on details page
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnails .img-thumbnail');
    
    if (mainImage && thumbnails) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Update main image
                mainImage.src = this.src.replace('-thumb', '-large');
            });
        });
    }
    // Consider adding smooth transitions
mainImage.style.opacity = 0;
setTimeout(() => {
    mainImage.src = this.src.replace('-thumb', '-large');
    mainImage.style.opacity = 1;
}, 200);

    // Toggle between guest checkout and login
    const guestCheckout = document.getElementById('guestCheckout');
    const loginCheckout = document.getElementById('loginCheckout');
    const guestForm = document.getElementById('guestForm');
    const loginForm = document.getElementById('loginForm');

    if (guestCheckout && loginCheckout && guestForm && loginForm) {
        guestCheckout.addEventListener('change', function() {
            guestForm.style.display = 'block';
            loginForm.style.display = 'none';
        });
        
        loginCheckout.addEventListener('change', function() {
            guestForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }
});
// Initialize form visibility on page load
if (guestCheckout.checked) {
    guestForm.style.display = 'block';
    loginForm.style.display = 'none';
} else if (loginCheckout.checked) {
    guestForm.style.display = 'none';
    loginForm.style.display = 'block';
}
// Add error handling for image loading
mainImage.onerror = function() {
    console.error('Failed to load product image');
    this.src = '/images/placeholder.jpg';
};
// In your ProductCard component
function ProductCard({ product }) {
    // Transform category names if needed
    const displayCategory = product.category === 'Skates' ? 'Shoes' : product.category;
    
    return (
      <div className="product-card">
        <h3>{product.name}</h3>
        <p>Category: {displayCategory}</p>
        {/* ... rest of the card */}
      </div>
    );
  }
  // In your search handler
function handleSearch(query) {
    const normalizedQuery = query.toLowerCase()
      .replace('skates', 'shoes')
      .replace('vapor', 'performance');
    
    return products.filter(product => 
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery)
    );
  }
  const categories = [
    { id: 1, name: 'Sticks' },
    { id: 2, name: 'Shoes' },
    { id: 3, name: 'Protective Gear' },
    // ... other categories
  ];
  // In your order confirmation email template
function generateOrderEmail(order) {
    return `
      <h1>Thank you for your order from KOKABURA HOCKEY HOUSE!</h1>
      <p>Your order includes:</p>
      <ul>
        ${order.items.map(item => `
          <li>
            ${item.name.replace('Vapor', 'Performance')} - 
            $${item.price} x ${item.quantity}
          </li>
        `).join('')}
      </ul>
    `;
  }
  // Create search index with new terminology weights
await Product.collection.createIndex({
    name: 'text',
    description: 'text',
    category: 'text'
  }, {
    weights: {
      name: 10,
      category: 5,
      description: 3
    },
    name: 'product_search'
  });
  // In your main App.js
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      {/* Your app components */}
    </AuthProvider>
  );
}
// In your main App.js
import { CartProvider } from './CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {/* Your app components */}
      </CartProvider>
    </AuthProvider>
  );
}