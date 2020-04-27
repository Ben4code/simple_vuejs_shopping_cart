<template>
  <div class="app">
    <Header/>
    <Tabs/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Tabs from '@/components/Tabs';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Tabs
  }
}
</script>

<style>
*, *::before, *::after{
  margin: 0;
  padding: 0;
}
html{
  font-size: 62.5%;
  box-sizing: inherit;
}
body{
  background: #ddd;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  font-size: 1.6rem;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
.app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
