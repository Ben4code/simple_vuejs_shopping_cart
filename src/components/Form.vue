<template>
  <div>
    <form class="form" @submit.prevent="submitForm()">
      <div>
        <label for="offer">Make Offer</label>
        <input id="offer" class="form__input" type="text" placeholder="Max offer: £50,000" />
        <button class="form__btn">Send Offer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {};
  },
  methods: {
    submitForm() {}
  }
};
</script>

<style>
.form {
  border: 1px solid #ddd;
  padding: 8rem 4rem;
  border-radius: 1rem;
  background-image: linear-gradient(141deg, #1fc8db 0%, #2cb5e8 75%);
}
.form label{
  color: #fff;
  display: block;
  margin-bottom: .3rem;
  
}
.form input[type=text]{
  margin-bottom: 1rem;
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
  padding: 1rem;
  display: inline-block;
  background-image: linear-gradient(141deg, #1fdbbc 0%, #08ac83 75%);
  width: 100%;
  outline: none;
  border-radius: .5rem;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
}
</style>