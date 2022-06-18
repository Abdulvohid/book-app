<script>
export default {
  name: 'LoginComponent',

  data() {
    return {
      error: '',
      name: '',
    }
  },

  methods: {
    login(e) {
      e.preventDefault()

      if (this.name) {
        this.$router.push({ path: '/MainComponent' })
        console.log(this.name)
      }
    },
    handleInvalid(e) {
      this.error = e.target.validationMessage
    },
  },
}
</script>

<template>
  <div class="form__hero">
    <form class="form" @submit="login">
      <h2 class="title">Welcome to Book-App</h2>
      <p class="form_disc" v-if="error">{{ error }}</p>

      <input
        class="input"
        type="text"
        placeholder="Enter your name"
        minlength="16"
        pattern="^[a-zA-Z]+$"
        required
        @invalid="handleInvalid"
        v-model="name"
      />
      <button type="submit" class="form__button">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: #596fbc;
  text-align: center;
  margin-bottom: 40px;
}

.form_disc {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 57px;
}
.form__hero {
  background: #596fbc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #fff;
}

.form {
  background: #fff;
  width: 50%;
  margin: 0 auto;
  width: 440px;
  height: 328px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
}

.input {
  width: 75%;
  height: 40px;
  margin: 0 auto;
  border: 1px solid #c0c3ce;
  border-radius: 4px;
  padding: 12px;
  color: #b8bbc0;
  margin-bottom: 24px;

  &::placeholder {
    color: #b8bbc0;
    padding: 12px;
  }

  &:focus-visible {
    border-color: #7a7a7b;
  }

  &:invalid {
    background-color: transparent;
    border-color: red;
  }
}

.form__button {
  background: #596fbc;
  border-radius: 8px;
  height: 40px;
  width: 75%;
  border: none;
  color: #fff;
  margin: 0 auto;
  cursor: pointer;
}
</style>
