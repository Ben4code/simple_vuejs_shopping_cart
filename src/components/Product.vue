<template>
  <div class="card my-5">
    <div class="card-body">
      <img :src="product.image" alt="image" class="bg-info img-thumbnail rounded">
      <h5 class="text-center card-title">
        {{product.title}}
      </h5>
      <p class="text-center text-muted card-text display-4">
       $ {{Number(product.price).toFixed(0)}}
      </p>
      <button :disabled="isInCart" @click="$emit('add_product', product)" class="btn btn-info form-control">
        {{isInCart ? "Added To Cart" : "Add To Card"}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ['product', 'isInCart']
}
</script>

<style>

</style>