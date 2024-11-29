<template>
    <div class="product-details">
      <div class="modal">
        <!-- Close button inside the modal card -->
        <button class="close-btn" @click="closeDetails">×</button>
        <div class="modal-content">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p class="price">Price: ${{ product.price }}</p>
          <button class="btn-primary" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import productStore from '../store/store.js';
  
  export default {
    props: ['id'],
    data() {
      return {
        product: {},
      };
    },
    created() {
      const productId = this.$route.params.id;
      this.product = productStore.getProductById(productId); // Fetch the product details
    },
    methods: {
      closeDetails() {
        this.$router.push('/'); // Navigate back to the homepage or products list
      },
      addToCart() {
        productStore.addToCart(this.product); // Add product to the cart
        alert(`${this.product.name} has been added to your cart!`); // Optional: show a confirmation message
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .product-details {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  
    .modal {
      background: #fff;
      border-radius: 10px;
      padding: 20px;
      max-width: 500px;
      width: 90%;
      position: relative; /* Ensure the button is positioned within the modal */
  
      .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 30px; /* Increase size for better visibility */
        color: #333; /* Color to make it more visible */
        cursor: pointer;
        z-index: 1; /* Ensure it's above the modal content */
      }
  
      .modal-content {
        text-align: center;
  
        h2 {
          margin-bottom: 10px;
        }
  
        .price {
          color: #ff6f61;
          font-weight: bold;
          margin: 15px 0;
        }
      }
    }
  }
  </style>
  