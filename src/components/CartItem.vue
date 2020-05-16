<template>
  <div>
    <img :src="cartItem.image" alt="image" height="50" width="50" />
    <span class="pl-2 display-5">{{cartItem.title}}</span>
    <button @click="$emit('remove', cartItem)" class="btn btn-sm btn-danger float-right">Remove</button>
    <hr />
    <div class>
      <span>Quantity:</span>
      <button @click="subItem(cartItem)" class="btn btn-outline-danger">-</button>
      {{cartItem.quantity}}
      <button
        @click="addItem(cartItem)"
        class="btn btn-outline-success"
      >+</button>
      <span class="float-sm-right">${{ getPrice(cartItem.price, cartItem.quantity) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["cartItem"],
  methods: {
    getPrice(amount, quantity) {
      const total = Number(amount) * Number(quantity);
      return total.toFixed(2);
    },
    addItem(cartItem) {
      return (cartItem.quantity += 1);
    },
    subItem(cartItem) {
      return (cartItem.quantity -= 1);
    }
  }
};
</script>

<style>
</style>