const productSchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., "Performance Hockey Stick"
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { 
      type: String, 
      required: true,
      enum: ['Sticks', 'Shoes', 'Protective Gear', 'Apparel', 'Accessories']
    },
    // ... rest of the schema
  });
  module.exports = mongoose.model('Product', productSchema);