<template>
    <div class="cart-page">
      <h1>Your Cart</h1>
      <div v-if="cart.length > 0">
        <ul>
          <li v-for="item in cart" :key="item.id">
            <div>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</div>
            <button @click="removeFromCart(item.id)">Remove</button>
          </li>
        </ul>
        <div>
          <p>Total: ${{ totalPrice }}</p>
          <button @click="checkout">Checkout</button>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
  import productStore from '@/store/store.js';
  
  export default {
    data() {
      return {
        cart: productStore.getCart(), // Fetch cart items from the store
      };
    },
    computed: {
      totalPrice() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate the total price
      },
    },
    methods: {
      removeFromCart(productId) {
        productStore.removeFromCart(productId); // Remove product from cart
        this.cart = productStore.getCart(); // Refresh cart
      },
      checkout() {
        // Prepare the order details
        const orderDetails = this.cart.map(item => {
          return `${item.name} - $${item.price} x ${item.quantity}`;
        }).join("\n");
  
        // Build the email content
        const emailContent = `
          Order Details:\n
          ${orderDetails}\n
          \nTotal: $${this.totalPrice}
        `;
  
        // Open Gmail compose page with pre-filled information
        const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=alabinjan6@gmail.com&su=New Order from Your Cart&body=${encodeURIComponent(emailContent)}`;
  
        // Open the link in a new tab
        window.open(emailLink, '_blank');
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .cart-page {
    padding: 20px;
    text-align: center;
  
    button {
      padding: 10px 15px;
      margin-top: 10px;
      background-color: #ff6f61;
      color: white;
      border: none;
      cursor: pointer;
    }
  
    ul {
      list-style: none;
      padding: 0;
    }
  
    li {
      margin-bottom: 10px;
    }
  }
  </style>
  