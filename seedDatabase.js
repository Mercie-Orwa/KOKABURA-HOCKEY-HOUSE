// seedDatabase.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');
const User = require('./models/user');

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB for seeding...'))
  .catch(err => console.error('Connection error:', err));

// Sample products data
const products = [
  {
    name: "Performance Hockey Stick",
    description: "Professional-grade hockey stick with carbon fiber construction",
    price: 249.99,
    category: "Sticks",
    brand: "KOKABURA",
    image: "/images/performance-stick.jpg",
    stock: 50,
    rating: 4.5,
    numReviews: 12,
    features: [
      "Advanced carbon fiber construction",
      "Low kick point for quick release",
      "Textured grip surface"
    ]
  },
  {
    name: "Elite Hockey Shoes",
    description: "High-performance shoes with superior ankle support",
    price: 189.99,
    category: "Shoes",
    brand: "KOKABURA",
    image: "/images/elite-shoes.jpg",
    stock: 30,
    rating: 4.2,
    numReviews: 8,
    features: [
      "Lightweight composite construction",
      "Moisture-wicking lining",
      "Reinforced toe cap"
    ]
  },
  {
    name: "Pro Gloves",
    description: "Professional hockey gloves with maximum protection",
    price: 129.99,
    category: "Protective Gear",
    brand: "KOKABURA",
    image: "/images/pro-gloves.jpg",
    stock: 25,
    rating: 4.7,
    numReviews: 15
  }
];

// Sample admin user
const adminUser = {
  name: "Admin User",
  email: "admin@kokaburahockey.com",
  password: "securepassword123",
  isAdmin: true
};

async function seedDB() {
  try {
    // Clear existing data
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Insert new products
    const createdProducts = await Product.insertMany(products);
    console.log(`Seeded ${createdProducts.length} products`);

    // Create admin user (in a real app, hash the password properly)
    const user = await User.create(adminUser);
    console.log(`Created admin user with ID: ${user._id}`);

    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seedDB();