<script>
import ProductsComponent from '../products/ProductsComponent.vue'
import Loading from '../../../library/Loading.vue'
import Icon from '../../../library/Icon.vue'
export default {
  name: 'SearchComponents',

  components: { ProductsComponent, Loading, Icon },

  data() {
    return {
      search: 'All',
      loading: false,
    }
  },

  methods: {
    async searchProductGetAll(event) {
      event.preventDefault()

      this.loading = true
      try {
        if (this.search) {
          const { data } = await this.$axios.get('/volumes', {
            params: { q: this.search },
          })
          this.$store.dispatch('changeProducts', data)
          this.loading = false
        }
      } catch (err) {
        this.$router.push({ path: '/search' })
      }
    },
  },
}
</script>

<template>
  <div class="search-hero">
    <loading v-if="$store.state.loading" />

    <form class="form__main" @submit="searchProductGetAll">
      <input v-model="search" class="search__input" type="text" />
      <button class="search__btn" type="submit">
        <icon name="search" />
      </button>
    </form>

    <div>
      <products-component />

      <div v-if="$store.state.has_content === 'no_content'">
        Информация не найдена
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form__main {
  width: 75%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 28px;
  margin-top: 28px;
}
.search__input {
  width: 100%;
  border-radius: 5px 0 0 5px;
  height: 40px;
  border: 1px solid #596fbc;
  padding: 5px;
}

.search__btn {
  width: 60px;
  height: 40px;
  border: none;
  background: #596fbc;
  border-radius: 0 5px 5px 0;
}
</style>
