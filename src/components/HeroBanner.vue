<template>
    <section class="hero">
      <div class="container">
        <h1>Experience the Best in Tech</h1>
        <p>Shop the latest gadgets, accessories, and more.</p>
        <div class="hero-actions">
          <button class="btn-primary">Shop Now</button>
          <button class="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped lang="scss">
  .hero {
    background: url('../assets/hero-banner.jpg') no-repeat center center/cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
  
    h1 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .hero-actions {
      display: flex;
      gap: 10px;
  
      .btn-primary,
      .btn-secondary {
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: all 0.3s;
  
        &.btn-primary {
          background-color: #ff6f61;
          color: #fff;
  
          &:hover {
            background-color: darken(#ff6f61, 10%);
          }
        }
  
        &.btn-secondary {
          background-color: transparent;
          color: #fff;
          border: 2px solid #fff;
  
          &:hover {
            background-color: #fff;
            color: #1f1f1f;
          }
        }
      }
    }
  }
  </style>
  