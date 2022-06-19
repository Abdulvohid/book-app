<script>
import Loading from '../../library/Loading.vue'
export default {
  name: 'LoginComponent',

  components: { Loading },

  data() {
    return {
      error: '',
      name: '',
      loading: false,
    }
  },

  methods: {
    login(e) {
      e.preventDefault()
      if (this.name) {
        setTimeout(() => {
          this.$router.push({ path: '/MainComponent' })
        }, 3000)
      }
    },

    handleInvalid(e) {
      this.error = e.target.validationMessage
    },

    saveSassion() {
      this.loading = !false
      setTimeout(() => {
        this.loading = !true
      }, 3000)
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

      <button @click="saveSassion" type="submit" class="form__button">
        <div class="button__hero">
          <div v-if="loading">
            <Loading />
          </div>
          <span v-if="loading">Saving</span>
          <span v-else>Saved</span>
        </div>
      </button>

      ]
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

.button__hero {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
