<script>
import SearchComponent from '../my-components/main/search/SearchComponent.vue'

export default {
  name: 'ContainerBox',
  components: { SearchComponent },
}
</script>

<template>
  <no-ssr>
    <no-ssr>
      <CReset />
    </no-ssr>
    <no-ssr>
      <search-component />
    </no-ssr>
    <no-ssr>
      <Nuxt />
    </no-ssr>
  </no-ssr>
</template>

<style lang="scss" scoped></style>
