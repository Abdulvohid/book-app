<template>
  <div>
    <search-component />
  </div>
</template>

<script>
import SearchComponent from '../my-components/main/search/SearchComponent.vue'
export default {
  components: { SearchComponent },

  name: 'MainComponent',

  async asyncData({ query, $axios, store }) {
    try {
      const { data } = await $axios.get('/volumes', {
        params: { q: 'All' },
      })

      store.dispatch('changeProducts', data)
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style lang="scss" scoped></style>
