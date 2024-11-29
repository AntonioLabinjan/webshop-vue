import store from 'store';

const productStore = {
  setProduct(product) {
    store.set('product', product);
  },
  getProduct() {
    return store.get('product');
  },

  // Adding the getProductById method
  getProductById(id) {
    const products = [
      
      { id: 1, name: "Smartphone", category: "Mobiteli", description: 'Bla', price: 699.99, image: "https://via.placeholder.com/250x200?text=Smartphone" },
        { id: 2, name: "Laptop", category: "Mobiteli", description: 'Bla', price: 999.99, image: "https://via.placeholder.com/250x200?text=Laptop" },
        { id: 3, name: "T-shirt", category: "Tableti", description: 'Bla',price: 19.99, image: "https://via.placeholder.com/250x200?text=T-shirt" },
        { id: 4, name: "Blender", category: "Zaštitna stakla", description: 'Bla',price: 49.99, image: "https://via.placeholder.com/250x200?text=Blender" },
        { id: 5, name: "Novel", category: "Maskice", description: 'Bla',price: 14.99, image: "https://via.placeholder.com/250x200?text=Novel" },
        { id: 6, name: "Headphones", category: "Maskice", description: 'Bla',price: 129.99, image: "https://via.placeholder.com/250x200?text=Headphones" },
        { id: 7, name: "Sneakers", category: "Tableti", description: 'Bla',price: 79.99, image: "https://via.placeholder.com/250x200?text=Sneakers" },
        { id: 8, name: "Microwave", category: "Mobiteli", description: 'Bla',price: 199.99, image: "https://via.placeholder.com/250x200?text=Microwave" },
      // Add more products here...
    ];
    return products.find(product => product.id === parseInt(id)); // Find the product by ID
  },

  // Cart Management
  getCart() {
    return store.get('cart') || []; // Get cart items, default to an empty array
  },
  addToCart(product) {
    const cart = this.getCart();
    // Check if the product already exists in the cart
    const productIndex = cart.findIndex(item => item.id === product.id);
    if (productIndex !== -1) {
      // If the product is already in the cart, increment the quantity
      cart[productIndex].quantity += 1;
    } else {
      // Otherwise, add the product with a quantity of 1
      product.quantity = 1;
      cart.push(product);
    }
    store.set('cart', cart); // Save updated cart to local storage
  },
  removeFromCart(productId) {
    const cart = this.getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    store.set('cart', updatedCart); // Save updated cart
  },
};

export default productStore;
