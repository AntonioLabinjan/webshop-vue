<template>
    <section class="hot-offers">
      <div class="container">
        <h2 class="section-title">Hot Offers</h2>
        
        <div class="offer-card" v-for="offer in offers" :key="offer.id">
          <div class="offer-image" :style="{ backgroundImage: `url(${offer.image})` }"></div>
          <div class="offer-info">
            <h3>{{ offer.title }}</h3>
            <p>{{ offer.description }}</p>
            <span class="offer-price">${{ offer.price }}</span>
            <button class="btn-buy">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HotOffers',
    data() {
      return {
        offers: [
          {
            id: 1,
            title: "Smartphone Special",
            description: "Get the latest smartphone at an unbeatable price!",
            price: "499.99",
            image: "https://via.placeholder.com/250x200?text=Smartphone+Deal"
          },
          {
            id: 2,
            title: "Laptop Discount",
            description: "Save big on our top-rated laptops for a limited time.",
            price: "899.99",
            image: "https://via.placeholder.com/250x200?text=Laptop+Deal"
          },
          {
            id: 3,
            title: "Headphones Sale",
            description: "Experience premium sound at a fraction of the price!",
            price: "69.99",
            image: "https://via.placeholder.com/250x200?text=Headphones+Sale"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .hot-offers {
    background-color: #f9f9f9;
    padding: 40px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
    font-weight: bold;
    color: #333;
  }
  
  .offer-card {
    display: flex;
    margin-bottom: 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .offer-image {
    width: 40%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 10px 0 0 10px;
  }
  
  .offer-info {
    padding: 20px;
    flex-grow: 1;
  }
  
  .offer-info h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  .offer-info p {
    font-size: 1rem;
    margin-bottom: 15px;
    color: #555;
  }
  
  .offer-price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #ff6f61;
  }
  
  .btn-buy {
    background-color: #ff6f61;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-buy:hover {
    background-color: #e55b50;
  }
  </style>
  