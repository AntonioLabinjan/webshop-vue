<template>
    <div class="support-page">
      <div class="container">
        <h1 class="support-title">Support</h1>
        <p class="contact-info">For any questions or assistance, feel free to contact us via email.</p>
  
        <button @click="openGmail" class="btn-contact">Contact Us via Gmail</button>
  
        <p class="email-info">You will be redirected to your Gmail with the recipient already set to <strong>alabinjan6@gmail.com (tu ubacit njihov mail)</strong></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      openGmail() {
        // Hardcoded receiver email
        const receiverEmail = 'alabinjan6@gmail.com';
        const subject = 'Support Request';
        const body = 'Hello, I need assistance with...';
  
        // Opening Gmail with pre-filled fields
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${receiverEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .support-page {
    padding: 40px;
    background-color: #f9f9f9;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .support-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .contact-info {
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.1rem;
  }
  
  .btn-contact {
    background-color: #ff6f61;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin: 20px auto;
  }
  
  .btn-contact:hover {
    background-color: #e55b50;
  }
  
  .email-info {
    text-align: center;
    font-size: 1rem;
    color: #555;
  }
  </style>
  