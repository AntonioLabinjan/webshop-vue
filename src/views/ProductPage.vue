<template>
    <div>
      <Header />
      <main>
        <h1>Product Page</h1>
        <p>This is where product details will go.</p>
      </main>
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  
  export default {
    components: {
      Header,
    },
  };
  </script>
  
  <style scoped lang="scss">
  main {
    padding: 20px;
    text-align: center;
  }
  </style>
  