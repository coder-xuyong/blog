<template>
    <nav class="my-navbar">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
        <li><router-link to="/contact">联系我们</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Demo"
  };
  </script>
  
  <style scoped>
  .my-navbar {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }
  
  .my-navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .my-navbar ul li {
    margin-right: 20px;
  }
  
  .my-navbar ul li a {
    color: white;
    text-decoration: none;
  }
  </style>