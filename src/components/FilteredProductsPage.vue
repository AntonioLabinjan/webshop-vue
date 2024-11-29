<template>
    <div>
      <h2>Filtered Products</h2>
  
      <!-- Search Input -->
      <input
        v-model="searchQuery"
        @keyup.enter="applyFilter"
        type="text"
        placeholder="Search for products..."
      />
  
      <!-- Category Filter -->
      <select v-model="selectedCategory" @change="applyFilter">
        <option value="all">All Categories</option>
        <option value="Mobiteli">Mobiteli</option>
        <option value="Tableti">Tableti</option>
        <option value="Zaštitna stakla">Zaštitna stakla</option>
        <option value="Maskice">Maskice</option>
      </select>
  
      <!-- Display Filtered Products -->
      <div class="products">
        <div
          class="product-card"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <div class="product-image" :style="{ backgroundImage: `url(${product.image})` }"></div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>${{ product.price }}</p>
  
            <!-- View details button -->
            <button @click="viewDetails(product)">View Details</button>
  
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
export default {
  props: ['query'],
  data() {
    return {
      products: [
        { id: 1, name: "Smartphone", category: "Mobiteli", price: 699.99, image: "https://via.placeholder.com/250x200?text=Smartphone" },
        { id: 2, name: "Laptop", category: "Mobiteli", price: 999.99, image: "https://via.placeholder.com/250x200?text=Laptop" },
        { id: 3, name: "T-shirt", category: "Tableti", price: 19.99, image: "https://via.placeholder.com/250x200?text=T-shirt" },
        { id: 4, name: "Blender", category: "Zaštitna stakla", price: 49.99, image: "https://via.placeholder.com/250x200?text=Blender" },
        { id: 5, name: "Novel", category: "Maskice", price: 14.99, image: "https://via.placeholder.com/250x200?text=Novel" },
        { id: 6, name: "Headphones", category: "Maskice", price: 129.99, image: "https://via.placeholder.com/250x200?text=Headphones" },
        { id: 7, name: "Sneakers", category: "Tableti", price: 79.99, image: "https://via.placeholder.com/250x200?text=Sneakers" },
        { id: 8, name: "Microwave", category: "Mobiteli", price: 199.99, image: "https://via.placeholder.com/250x200?text=Microwave" },
      ],
      cart: [], // Store added products in the cart
      searchQuery: "", // Search query
      selectedCategory: "all", // Selected category
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesCategory = this.selectedCategory === 'all' || product.category === this.selectedCategory;
        const matchesSearch = !this.searchQuery || product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    },
  },
  methods: {
    // Method to navigate to the product details page
    viewDetails(product) {
      this.$router.push({ name: 'product-details', params: { id: product.id } });
    },
    addToCart(product) {
      // Add the product to the cart
      this.cart.push(product);
      alert(`${product.name} has been added to the cart.`);
    },
    applyFilter() {
      // Method to trigger the filtering when pressing Enter
      // This ensures only when Enter is pressed does the filtering occur.
    },
  },
};
</script>
  
  <style scoped>
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    background-size: cover;
    background-position: center;
    height: 200px;
    border-radius: 10px;
  }
  
  .product-info {
    margin-top: 10px;
  }
  
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  
  p {
    font-size: 16px;
    color: #555;
  }
  
  button {
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  