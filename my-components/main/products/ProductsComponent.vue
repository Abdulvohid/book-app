<template>
  <div>
    <div v-for="(item, id) in $store.state.productsList" :key="id">
      <img :src="item.img" alt="" />
      <div>{{ item.name }}</div>
      <div>{{ item.description }}</div>
      <div>{{ item.authors }}</div>
      <div>{{ item.price }}</div>
      <div>{{ item.description }}</div>
      <div>{{ item.language }}</div>
      <div>{{ item.pageCount }}</div>
      <div>{{ item.publishedDate }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product-components',
}
</script>

<style lang="scss" scoped></style>
