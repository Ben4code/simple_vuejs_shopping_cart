<template>
  <div class="footer">
    <p>🤝NegoApp {{ currentYear }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed:{
    currentYear(){
      return new Date().getFullYear();
    }
  }
}
</script>

<style>
  .footer{
    background-color: #085f6d;
    color: #fff;
    text-align: center;
    line-height: 100%;
    padding: 4rem 0;
    box-shadow: 0px -4px 2px -2.5px rgba(0,0,0,0.5);
  }
</style>