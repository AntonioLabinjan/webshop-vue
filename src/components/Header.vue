<template>
    <header class="header">
      <div class="header-inner container">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/">WebShop</router-link>
        </div>
  
        <!-- Navigation -->
        <nav class="nav">
          <router-link to="/">Home</router-link>
          
          <router-link to="/hot">Deals</router-link>
          <router-link to="/support">Support</router-link>

        </nav>
  
    </div>
    </header>
  </template>
  
  <style scoped lang="scss">
  .header {
    background-color: #1f1f1f;
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
  
      .logo {
        font-size: 24px;
        font-weight: bold;
        color: #fff;
  
        a {
          text-decoration: none;
          color: inherit;
        }
      }
  
      .nav {
        display: flex;
  
        a {
          margin: 0 15px;
          text-decoration: none;
          color: #fff;
          font-weight: 500;
  
          &:hover {
            color: #ff6f61;
          }
        }
      }
  
      .search-bar input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
      }
    }
  }
  </style>
  