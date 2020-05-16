<template>
  <div class>
    <div class="card my-5">
      <div class="card-title mx-auto">
        <h5 class="display-4">Cart</h5>
      </div>
      <div class="card-body">
        <ul v-if="cart.length" class="list-group">
          <li v-for="cartItem in cart" :key="cartItem.id" class="list-group-item mb-1">
            <img :src="cartItem.image" alt="image" height="50" width="50" />
            <span class="pl-2 display-5">{{cartItem.title}}</span>
            <button
              @click="$emit('remove', cartItem)"
              class="btn btn-sm btn-danger float-right"
            >Remove</button>
            <hr />
            <div class="">
              <span>Quantity: </span>
              <button class="btn btn-outline-danger">-</button>
              {{cartItem.quantity}}
              <button class="btn btn-outline-success">+</button>
              <span class="float-sm-right">${{ getPrice(cartItem.price, cartItem.quantity) }}</span>
            </div>
          </li>
        </ul>
        <div v-else>
          <h5 class="text-center display-5">Your cart is empty.</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {

    };
  },
  props: ["cart"],
  methods:{
    getPrice(amount, quantity){
      const total = Number(amount) * Number(quantity);
      return total.toFixed(2);
    }
  }
};
</script>

<style>
</style>

