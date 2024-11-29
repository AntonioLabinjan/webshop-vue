<template>
    <div>
      <Header />
      <div class="hero-header">
        <img src="@/assets/hero-banner.jpg" alt="Hero Banner" class="hero-logo" />
      </div>
  
      <HeroBanner />
      <main>
        <div class="container">
          <div class="view-cart">
            <router-link to="/cart" class="view-cart-btn">
              View Cart ({{ cartCount }})
            </router-link>
          </div>
  
          <h2 class="section-title">Featured Products</h2>
  
          <div class="carousel-container">
            <div
              class="carousel"
              :style="{ transform: `translateX(-${carouselIndex * 300}px)` }"
            >
              <div
                class="product-card"
                v-for="product in filteredProducts"
                :key="product.id"
              >
                <router-link :to="`/product/${product.id}`" class="product-link">
                  <div class="product-image" :style="{ backgroundImage: `url(${product.image})` }">
                    <span v-if="!product.image">Image Unavailable</span>
                  </div>
                  <div class="product-info">
                    <h3>{{ product.name }}</h3>
                    <p>${{ product.price }}</p>
                    <button @click="addToCart(product)">Add to Cart</button>
                  </div>
                </router-link>
              </div>
            </div>
  
            <!-- Slide Controls -->
            <div class="carousel-controls">
              <button @click="prevSlide" class="prev-btn">❮</button>
              <button @click="nextSlide" class="next-btn">❯</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import productStore from '../store/store.js';
  
  export default {
    data() {
      return {
        selectedCategory: "all",
        searchQuery: "",
        carouselIndex: 0,
        categories: ["Mobiteli", "Tableti", "Maskice", "Zaštitna stakla"],
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
      };
    },
    computed: {
      filteredProducts() {
        let filtered = this.products;
  
        if (this.searchQuery) {
          filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
  
        if (this.selectedCategory !== "all") {
          filtered = filtered.filter(
            (product) => product.category === this.selectedCategory
          );
        }
  
        return filtered;
      },
    },
    methods: {
      prevSlide() {
        if (this.carouselIndex > 0) {
          this.carouselIndex--;
        } else {
          this.carouselIndex = this.filteredProducts.length - 1;
        }
      },
      nextSlide() {
        if (this.carouselIndex < this.filteredProducts.length - 1) {
          this.carouselIndex++;
        } else {
          this.carouselIndex = 0;
        }
      },
      addToCart(product) {
        productStore.addToCart(product); // Add product to the cart
        alert(`${product.name} has been added to your cart!`); // Optional: show a confirmation message
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin-top: 30px;
  }
  
  .carousel {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .product-card {
    width: 300px;
    margin-right: 20px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    background: #f4f4f4;
    height: 200px;
    background-size: cover;
    background-position: center;
  }
  
  .product-info {
    padding: 15px;
    text-align: center;
  
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
      color: #333;
    }
  
    p {
      font-size: 16px;
      color: #ff6f61;
      margin-bottom: 15px;
    }
  }
  
  .carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  
  .prev-btn,
  .next-btn {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .prev-btn:hover,
  .next-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  