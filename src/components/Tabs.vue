<template>
  <div class="tabs">
    <div class="tabs__header">
      <h4 :class="[{active: state.formA}, 'tabs__control']" @click="toggleForm('formA')">Employer</h4>
      <h4 :class="[{active: state.formB}, 'tabs__control']" @click="toggleForm('formB')">Employee</h4>
    </div>
    <div class="tabs__content">
      <div v-if="loading" class="spinner"></div>
      <Modal v-else-if="showModal" @reset="resetApp" :formState="state" />
      <Form v-else :formData="state" @formAInput="getFormAInput" @formBInput="getFormBInput" />
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";
import Modal from "@/components/Modal";

export default {
  name: "Tabs",
  components: {
    Form,
    Modal
  },
  data() {
    return {
      state: {
        formA: true,
        formB: false,
        formAInput: null,
        formBInput: null
      },
      negotiate: false,
      loading: false,
      showModal: false
    };
  },
  methods: {
    toggleForm(value) {
      if (value === "formA") {
        this.state.formA = true;
        this.state.formB = false;
      } else {
        this.state.formA = false;
        this.state.formB = true;
      }
    },
    getFormAInput(value) {
      this.state.formAInput = value;
      this.toggleForm("formB");
      this.checkNegotiate();
    },
    getFormBInput(value) {
      this.state.formBInput = value;
      this.toggleForm("formA");
      this.checkNegotiate();
    },
    checkNegotiate() {
      if (this.state.formAInput !== null && this.state.formBInput !== null) {
        this.negotiate = true;
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 800);
        this.showModal = true;
      }
    },
    resetApp() {
      this.negotiate = false;
      this.showModal = false;
      this.state.formAInput = null;
      this.state.formBInput = null;
    }
  }
};
</script>

<style>
.tabs {
  height: 70vh;
  margin: 5rem 15rem;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.tabs__header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs__control {
  text-transform: uppercase;
  background: #00b8d4;
  padding: 1.5rem 1rem;
  width: 50%;
  text-align: center;
  cursor: pointer;
  color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.active {
  background: #085f6d;
}
.tabs__content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5rem;
}

/* Spinner */
@keyframes spinner {
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
}
.spinner {
  height: 10vh;
  opacity: 1;
  position: relative;
  transition: opacity linear 0.1s;
}
.spinner::before {
  animation: 2s linear infinite spinner;
  border: solid 3px #eee;
  border-bottom-color: #00b8d4;
  border-radius: 50%;
  content: "";
  height: 10rem;
  width: 10rem;
  left: 50%;
  opacity: inherit;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  transform-origin: center;
  will-change: transform;
}
</style>