<template>
<div class="modal">
  <button class="modal__button" @click="showModal = true">
    Show Modal
  </button>
  <transition name="fade" appear>
    <div class="modal__overlay" v-if="showModal" @click="showModal = false"></div>
  </transition>
  <transition name="slide" appear>
    <div class="modal__content" v-if="showModal">
      <h4>Success</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ab esse, debitis praesentium modi non hic magnam possimus suscipit ipsam.</p>
      <button class="modal__button" @click="showModal=false">Close</button>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name:'modal',
  data(){
    return{
      showModal: true
    }
  }
}
</script>

<style>
.modal{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  /* min-height: 100vh; */
  overflow-x: hidden;
  overflow-y: hidden;
}
.modal__button{
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: inline-block;
  padding: 1rem 2.5rem;
  background-image: linear-gradient(141deg, #1fc8db 0%, #2cb5e8 75%);
  border-radius: .5rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.8rem;
  box-shadow: 
      0 2px 2px 0 rgba(0,0,0,0.14), 
      0 3px 1px -2px rgba(0,0,0,0.12), 
      0 1px 5px 0 rgba(0,0,0,0.2);
  transition: .4s ease-out;
}

.modal__button:hover{
  box-shadow: 
      0 2px 2px 0 rgba(0,0,0,0.14), 
      0 3px 1px -2px rgba(0,0,0,0.12), 
      0 1px 5px 0 rgba(0,0,0,0.2);
  
}
.modal__overlay{
  position: absolute;
  width: -100rem;
  height: -100rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0,0,0,0.7);
}

.modal__content{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 102;
  width: 100%;
  max-width: 40rem;
  background-color: #fff;
  border-radius: 2rem;
  padding: 2.5rem;
}

/* Fade Effect */
.fade-enter-active,
.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
/* Slide Effect */
.slide-enter-active,
.slide-leave-active{
  transition: transform .5s;
}
.slide-enter,
.slide-leave-to{
  transform: translateY(-50%) translateX(100vw) ;
}

</style>