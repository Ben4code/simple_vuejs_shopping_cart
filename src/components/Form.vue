<template>
  <div>
    <form class="form" @submit.prevent="submitForm()">
      <div>
        <label for="offer">Enter {{formData.formA ? "Employer" : "Employee"}} Offer</label>
        <input id="offer" class="form__input" type="text" v-model="inputValue" :placeholder="placeHolder" />
        <span class="errorMessage">{{errorMessage}}</span>
        <button type="submit" class="form__btn">Send {{formData.formA ? "Employer" : "Employee"}} Offer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: ['formData'],
  data() {
    return {
      inputValue: null,
      errorMessage: null
    };
  },
  computed:{
    placeHolder(){
      if(this.formData.formA){
        return "Max offer: £50,000"
      }else{
        return "Min offer: £50,000"
      }
    }
  },
  methods: {
    submitForm() {
      if(!this.inputValue || !Number.isInteger(+this.inputValue)){
        this.errorMessage = "Please enter a valid number."
        setTimeout(()=>{
          this.errorMessage = null;
        }, 2000)
        return;
      }
      if(this.formData.formA){
        this.$emit('formAInput', +this.inputValue);
        this.inputValue = null;
        this.errorMessage = null;
      }else{
        this.$emit('formBInput', +this.inputValue);
        this.inputValue = null;
        this.errorMessage = null;
      }
    }
  }
};
</script>

<style>
.form {
  padding: 8rem 4rem;
  border-radius: 1rem;
  background-image: linear-gradient(141deg, #1fc8db 0%, #2cb5e8 75%);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.form label{
  color: #fff;
  display: block;
  margin-bottom: .3rem;
  
}
.form input{
  display: block;
  outline: none;
  padding: 1rem;
  border-radius: .5rem;
  border: 1px solid #00b8d4;
  box-shadow: inset 0 1px 2px 1px rgba(0,0,0,.1);
  width: 20rem;
}
.form ::placeholder,
.form ::-webkit-input-placeholder,
.form ::-moz-input-placeholder{
  color: #00b8d4;
}
.form__btn{
  margin-top: 4rem;
  text-transform: uppercase;
  padding: 1rem;
  display: block;
  background-image: linear-gradient(141deg, #1fdbbc 0%, #08ac83 75%);
  width: 100%;
  outline: none;
  border-radius: .5rem;
  border: none;
  color: #fff;
  cursor: pointer;
  box-shadow: 
      0 2px 2px 0 rgba(0,0,0,0.14), 
      0 3px 1px -2px rgba(0,0,0,0.12), 
      0 1px 5px 0 rgba(0,0,0,0.2);
}
.errorMessage{
  color: red;
  text-shadow: .1px .1px #000;
  font-size: 1rem;
}

</style>