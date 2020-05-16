<template>
  <div class>
    <div class="card my-5">
      <div class="card-title mx-auto">
        <h5 class="display-4">Cart</h5>
      </div>
      <div class="card-body">
        <div v-if="cart.length">
          <ul class="list-group">
            <li v-for="cartItem in cart" :key="cartItem.id" class="list-group-item mb-1">
              <CartItem :cartItem="cartItem" @remove="deleteFromCart"/>
            </li>
          </ul>
        </div>
        <div v-else>
          <h5 class="text-center display-5">Your cart is empty.</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem';

export default {
  name: "Cart",
  components: {
    CartItem
  },
  props: ["cart"],
  methods:{
    deleteFromCart(cartItem){
      const itemIndex = this.cart.findIndex((item)=> item.id === cartItem.id);
      this.cart.splice(itemIndex, 1);
    }
  }
};
</script>

<style>
</style>

