<script>
import ProductsComponent from '../products/ProductsComponent.vue'
export default {
  name: 'SearchComponents',

  components: { ProductsComponent },

  data() {
    return {
      search: '',
    }
  },

  mounted() {
    this.searchProductGetAll()
  },

  methods: {
    async searchProductGetAll() {
      if (this.search) {
        const { data } = await this.$axios.get('/volumes', {
          params: { q: this.search },
        })
        console.log(data)
        this.$store.dispatch('changeProducts', data)
      }
    },
  },
}
</script>

<template>
  <div class="search-hero">
    <form @submit="searchProductGetAll">
      <input v-model="search" class="search__input" type="text" />
      <button type="submit"></button>
    </form>

    <div>
      <products-component />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-hero {
  display: flex;
  justify-content: space-between;

  .search__input {
    width: 500px;
  }
}
</style>
