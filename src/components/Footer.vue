<template>
    <footer class="footer">
      <div class="container">
        <div class="contact-info">
          <h4>Contact Us</h4>
          <p>Email: support@store.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 1234 Store St, City, Country</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f4f4f4;
    padding: 30px 0;
    text-align: center;
    font-size: 16px;
    color: #333;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .contact-info {
    h4 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      font-weight: bold;
    }
  
    p {
      margin: 5px 0;
    }
  }
  </style>
  