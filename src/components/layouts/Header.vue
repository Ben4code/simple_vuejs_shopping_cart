<template>
  <header>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__link"><a href="#">🤝NegoApp</a></li>
        <li class="nav__link active"><a href="#">🏠 Home</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .nav{
    background-color: #00b8d4;
    padding: 2rem 15rem;
    box-shadow: 
      0 2px 2px 0 rgba(0,0,0,0.14), 
      0 3px 1px -2px rgba(0,0,0,0.12), 
      0 1px 5px 0 rgba(0,0,0,0.2);
  }
  .nav__list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .nav__link a{
    color: #fff;
    width: 50%;
  }
  .active{
    margin-left: auto;
  }
</style>