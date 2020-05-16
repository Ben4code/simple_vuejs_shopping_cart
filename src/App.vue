<template>
  <div class="app">
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="product in products" :key="product.id">
              <Product :isInCart="isInCart(product)" v-on:add_product="addToCart" :product="product" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <Cart @remove="deleteFromCart" :cart="cart"/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import products from "@/products.json";
import Product from "@/components/Product";
import Cart from '@/components/Cart'

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Product,
    Cart
  },
  data() {
    return {
      products,
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      const val = this.cart.find((item)=> item.id === product.id)
      if(val){
        val.quantity += 1;
        this.cart.map(item => item.id === val.id ? item = val : null)
      }
      else{
        product.quantity = 1;
        this.cart.push(product)
      }
    },
    isInCart(product){
      return this.cart.find((item)=> item.id === product.id) ? true : false;
    },
    deleteFromCart(cartItem){
      const itemIndex = this.cart.findIndex((item)=> item.id === cartItem.id);
      this.cart.splice(itemIndex, 1);
    }
  }
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  box-sizing: inherit;
}
body {
  background: #fbf8f3;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  font-size: 1.6rem;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
