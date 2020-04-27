<template>
  <div class="tabs">
    <div class="tabs__header">
      <h4 class="tabs__control">Employer</h4>
      <h4 class="tabs__control">Employee</h4>
    </div>
    <div class="tabs__content">
      <Form/>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form'


export default {
  name: 'Tabs',
  components: {
    Form
  }
}
</script>

<style>
 .tabs{
  height: 70vh;
  margin: 5rem 15rem;
  background-color: #fff;
  box-shadow: 
    0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);
 }
 .tabs__header{
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .tabs__control{
   text-transform: uppercase;
    background: #00b8d4;
    padding: 1.5rem 1rem;
    width: 50%;
    text-align: center;
    cursor: pointer;
    color: #fff;
    box-shadow: 
      0 2px 2px 0 rgba(0,0,0,0.14), 
      0 3px 1px -2px rgba(0,0,0,0.12), 
      0 1px 5px 0 rgba(0,0,0,0.2);
 }
 .tabs__content{
   display: flex;
   justify-content: center;
   align-items: flex-start;
   padding-top: 5rem;
 }
</style>